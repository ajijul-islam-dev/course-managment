"use client";

import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import Loading from "@/app/loading";

const steps = ["Course Info", "Subjects", "Modules", "Finish"];

const initialForm = {
  title: "",
  description: "",
  category: "",
  price: "",
  thumbnail: "",
  instructor: "",
  duration: "",
  startDate: "",
  endDate: "",
  subjects: [],
};

const CreateCourseLike_Instructors = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

const categories = [
  { value: "math", label: "Math" },
  { value: "english", label: "English" },
  { value: "programming", label: "Programming" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "business", label: "Business" },
];

export default function EditCoursePage() {
  const router = useRouter();
  const params = useParams();
  const courseId = params?.id;

  const { data: session } = useSession();
  const userRole = session?.user?.role || "student";

  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [modules, setModules] = useState({}); // separate modules state (subject -> [modules])
  const [subjectInput, setSubjectInput] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedModule, setSelectedModule] = useState(null);
  const [videoInputs, setVideoInputs] = useState([{ title: "", link: "" }]); // temp editor for selected module
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  // Pre-fill existing course
  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/courses/${courseId}`);
        // data.modules might be Map-like or plain object — use as-is or fallback
        const modulesObj = data.modules || {};
        // instructor in DB might be id or object or name; try to normalize to string id if matches our instructors
        let instructorVal = "";
        if (data.instructor) {
          // if it's an object with name or id
          if (typeof data.instructor === "object" && data.instructor !== null) {
            // prefer id if exists, else name
            instructorVal = data.instructor.id ? String(data.instructor.id) : data.instructor.name || "";
          } else {
            // primitive (id or name)
            instructorVal = String(data.instructor);
          }
        }

        // If instructorVal is an id and not in our static list, keep as-is (so UI shows id fallback)
        // But attempt to find name for display when needed by mapping ids to names in Select

        setForm({
          title: data.title || "",
          description: data.description || "",
          category: data.category || "",
          price: data.price ?? "",
          thumbnail: data.thumbnail || "",
          instructor: instructorVal,
          duration: data.duration ?? "",
          startDate: data.startDate ? data.startDate.split("T")[0] : "",
          endDate: data.endDate ? data.endDate.split("T")[0] : "",
          subjects: Array.isArray(data.subjects) ? data.subjects : [],
        });

        setModules(modulesObj);

        // set default selected subject to first subject if present
        const firstSub = Array.isArray(data.subjects) && data.subjects.length ? data.subjects[0] : "";
        setSelectedSubject(firstSub);
        setSelectedModule(null);
        setVideoInputs([{ title: "", link: "" }]);
      } catch (err) {
        console.error("Error loading course:", err);
        Swal.fire("Error", "Failed to load course data.", "error");
      } finally {
        setLoading(false);
      }
    }

    if (courseId) fetchCourse();
  }, [courseId]);

  // Image upload (imgbb)
  const handleChangeFile = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!process.env.NEXT_PUBLIC_IMAGEBB_API_KEY) {
      Swal.fire("Missing Key", "Image upload API key not configured.", "error");
      return;
    }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      const resp = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`, fd);
      const url = resp.data?.data?.url;
      if (!url) throw new Error("No url from upload");
      setForm((p) => ({ ...p, thumbnail: url }));
      setErrors((p) => ({ ...p, thumbnail: undefined }));
      Swal.fire("Uploaded", "Thumbnail uploaded successfully.", "success");
    } catch (err) {
      console.error("Upload error", err);
      setErrors((p) => ({ ...p, thumbnail: "Image upload failed" }));
      Swal.fire("Upload failed", "Could not upload image.", "error");
    } finally {
      setUploading(false);
    }
  }, []);

  // validation as in your create page
  const validateStep1 = useCallback(() => {
    const newErrors = {};
    if (!form.title?.trim()) newErrors.title = "Course title is required";
    if (!form.description?.trim()) newErrors.description = "Description is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.instructor?.toString()?.trim()) newErrors.instructor = "Instructor is required";
    if (!form.price || Number(form.price) <= 0) newErrors.price = "Valid price is required";
    if (!form.thumbnail) newErrors.thumbnail = "Thumbnail is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const validateStep2 = useCallback(() => {
    if (!form.subjects || form.subjects.length === 0) {
      setErrors({ subjects: "At least one subject is required" });
      return false;
    }
    setErrors({});
    return true;
  }, [form.subjects]);

  const validateStep3 = useCallback(() => {
    if (!selectedSubject) {
      setErrors({ modules: "Please select a subject to edit modules" });
      return false;
    }
    const subjectModules = modules[selectedSubject] || [];
    if (subjectModules.length === 0) {
      setErrors({ modules: "Please add at least one module for this subject" });
      return false;
    }
    const incomplete = subjectModules.some((m) => {
      if (!m.title || !m.title.trim()) return true;
      if (!m.videos || m.videos.length === 0) return true;
      return m.videos.some((v) => !v.title?.trim() || !v.link?.trim());
    });
    if (incomplete) {
      setErrors({ modules: "All modules must have titles and at least one complete video (title & link)" });
      return false;
    }
    setErrors({});
    return true;
  }, [modules, selectedSubject]);

  // Navigation
  const handleNext = useCallback(() => {
    let ok = true;
    if (step === 1) ok = validateStep1();
    if (step === 2) ok = validateStep2();
    if (step === 3) ok = validateStep3();
    if (ok) setStep((s) => Math.min(4, s + 1));
  }, [step, validateStep1, validateStep2, validateStep3]);

  const handleBack = useCallback(() => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  }, []);

  // Step2: subjects only
  const handleAddSubject = useCallback(() => {
    const subject = subjectInput.trim();
    if (!subject) return;
    if (form.subjects.includes(subject)) {
      setSubjectInput("");
      return;
    }
    setForm((p) => ({ ...p, subjects: [...p.subjects, subject] }));
    setModules((m) => ({ ...m, [subject]: m[subject] ?? [] }));
    setSubjectInput("");
    setErrors((p) => ({ ...p, subjects: undefined }));
  }, [subjectInput, form.subjects]);

  const handleRemoveSubject = useCallback((sub) => {
    setForm((p) => ({ ...p, subjects: p.subjects.filter((s) => s !== sub) }));
    setModules((m) => {
      const copy = { ...m };
      delete copy[sub];
      return copy;
    });
    if (selectedSubject === sub) {
      setSelectedSubject("");
      setSelectedModule(null);
      setVideoInputs([{ title: "", link: "" }]);
    }
  }, [selectedSubject]);

  // Step3: modules & videos (all immutable updates)
  const handleAddModule = useCallback((subject) => {
    if (!subject) return;
    setModules((prev) => {
      const copy = { ...(prev || {}) };
      copy[subject] = copy[subject] ? [...copy[subject], { title: "", videos: [] }] : [{ title: "", videos: [] }];
      return copy;
    });
    setSelectedSubject(subject);
    // select the newly added module index
    setSelectedModule((_) => {
      const idx = (modules[subject]?.length ?? 0); // previous length -> new index
      return idx;
    });
  }, [modules]);

  const handleRemoveModule = useCallback((subject, idx) => {
    setModules((prev) => {
      const copy = { ...(prev || {}) };
      copy[subject] = (copy[subject] || []).filter((_, i) => i !== idx);
      return copy;
    });
    setSelectedModule(null);
  }, []);

  const handleUpdateModuleTitle = useCallback((subject, idx, value) => {
    setModules((prev) => {
      const copy = { ...(prev || {}) };
      copy[subject] = copy[subject] || [];
      copy[subject] = copy[subject].map((m, i) => (i === idx ? { ...m, title: value } : m));
      return copy;
    });
  }, []);

  const handleAddVideo = useCallback((subject, moduleIdx) => {
    // add a single video input to that module
    setModules((prev) => {
      const copy = { ...(prev || {}) };
      copy[subject] = copy[subject] || [];
      const moduleArr = copy[subject].map((m) => ({ ...m, videos: (m.videos || []).slice() }));
      moduleArr[moduleIdx].videos.push({ title: "", link: "" });
      copy[subject] = moduleArr;
      return copy;
    });
    // ensure editor shows that module's videos
    setSelectedSubject(subject);
    setSelectedModule(moduleIdx);
  }, []);

  const handleRemoveVideo = useCallback((subject, moduleIdx, videoIdx) => {
    setModules((prev) => {
      const copy = { ...(prev || {}) };
      copy[subject] = (copy[subject] || []).map((m) => ({ ...m, videos: (m.videos || []).slice() }));
      copy[subject][moduleIdx].videos = (copy[subject][moduleIdx].videos || []).filter((_, i) => i !== videoIdx);
      return copy;
    });
  }, []);

  const handleUpdateVideo = useCallback((subject, moduleIdx, videoIdx, field, value) => {
    setModules((prev) => {
      const copy = { ...(prev || {}) };
      copy[subject] = (copy[subject] || []).map((m) => ({ ...m, videos: (m.videos || []).slice() }));
      copy[subject][moduleIdx].videos = (copy[subject][moduleIdx].videos || []).map((v, i) => (i === videoIdx ? { ...v, [field]: value } : v));
      return copy;
    });
  }, []);

  // When user clicks "Edit Videos" — load that module's videos into videoInputs local editor (optional)
  const openModuleEditor = useCallback((subject, moduleIdx) => {
    const modVideos = (modules[subject]?.[moduleIdx]?.videos) ?? [];
    setSelectedSubject(subject);
    setSelectedModule(moduleIdx);
    // copy to local editor if you want inline editing; but we are directly editing modules via handlers above,
    // so this is just for UI focus; no separate local state needed.
    setVideoInputs(modVideos.length ? modVideos.map(v => ({ ...v })) : [{ title: "", link: "" }]);
  }, [modules]);

  // Submit — send PUT
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!["admin", "instructor"].includes(userRole)) {
      Swal.fire("Forbidden", "You cannot edit this course.", "error");
      return;
    }
    if (!validateStep1()) { setStep(1); return; }
    if (!validateStep2()) { setStep(2); return; }
    // Optionally validate modules too
    try {
      const payload = { id: courseId, ...form, modules };
      await axios.put(`/api/courses/${courseId}`, payload);
      Swal.fire("Success", "Course updated successfully", "success");
      router.push("/dashboard");
    } catch (err) {
      console.error("Update failed:", err);
      Swal.fire("Error", "Failed to update course", "error");
    }
  }, [courseId, form, modules, router, userRole, validateStep1, validateStep2]);

  // Helpers for instructor display: map id to name when possible in Select
  const findInstructorLabel = (val) => {
    if (!val) return "";
    const found = CreateCourseLike_Instructors.find((i) => String(i.id) === String(val));
    return found ? found.name : val;
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen p-4">
      <Card className="w-full max-w-4xl mx-auto mt-8 border-blue-200 shadow-lg">
        <CardHeader className=" rounded-t-lg">
          <CardTitle className="text-blue-700">Edit Course</CardTitle>
          <div className="flex gap-2 mt-4">
            {steps.map((label, idx) => (
              <div
                key={label}
                className={`px-4 py-2 rounded-full text-base font-semibold transition ${ step === idx + 1 ? "bg-blue-500 text-white shadow" : "bg-blue-100 text-blue-700" }`}
              >
                {label}
              </div>
            ))}
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="p-6">
            {/* Step 1 */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title" className="text-blue-700 font-medium">Course Title</Label>
                  <Input id="title" value={form.title} onChange={(e) => setForm(p => ({ ...p, title: e.target.value }))} placeholder="Enter course title" className="mt-2 border-blue-300 focus:border-blue-500" />
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                <div>
                  <Label htmlFor="category" className="text-blue-700 font-medium">Category</Label>
                  <Select value={form.category} onValueChange={(v) => setForm(p => ({ ...p, category: v }))}>
                    <SelectTrigger className="mt-2 border-blue-300 focus:border-blue-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="description" className="text-blue-700 font-medium">Description</Label>
                  <Textarea id="description" value={form.description} onChange={(e) => setForm(p => ({ ...p, description: e.target.value }))} rows={4} placeholder="Course description" className="mt-2 border-blue-300 focus:border-blue-500" />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>

                <div>
                  <Label htmlFor="instructor" className="text-blue-700 font-medium">Instructor</Label>
                  <Select value={form.instructor} onValueChange={(v) => setForm(p => ({ ...p, instructor: v }))}>
                    <SelectTrigger className="mt-2 border-blue-300 focus:border-blue-500">
                      <SelectValue placeholder="Select instructor" />
                    </SelectTrigger>
                    <SelectContent>
                      {CreateCourseLike_Instructors.map((inst) => (
                        <SelectItem key={inst.id} value={String(inst.id)}>{inst.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.instructor && <p className="text-red-500 text-sm mt-1">{errors.instructor}</p>}
                </div>

                <div>
                  <Label htmlFor="price" className="text-blue-700 font-medium">Price ($)</Label>
                  <Input id="price" type="number" value={form.price} onChange={(e) => setForm(p => ({ ...p, price: e.target.value }))} min="0" step="0.01" placeholder="Course price" className="mt-2 border-blue-300 focus:border-blue-500" />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>

                <div>
                  <Label htmlFor="duration" className="text-blue-700 font-medium">Duration (hours)</Label>
                  <Input id="duration" type="number" value={form.duration} onChange={(e) => setForm(p => ({ ...p, duration: e.target.value }))} className="mt-2 border-blue-300 focus:border-blue-500" />
                </div>

                <div>
                  <Label htmlFor="startDate" className="text-blue-700 font-medium">Start Date</Label>
                  <Input id="startDate" type="date" value={form.startDate} onChange={(e) => setForm(p => ({ ...p, startDate: e.target.value }))} className="mt-2 border-blue-300 focus:border-blue-500" />
                </div>

                <div>
                  <Label htmlFor="endDate" className="text-blue-700 font-medium">End Date</Label>
                  <Input id="endDate" type="date" value={form.endDate} onChange={(e) => setForm(p => ({ ...p, endDate: e.target.value }))} className="mt-2 border-blue-300 focus:border-blue-500" />
                </div>

                <div>
                  <Label htmlFor="thumbnail" className="text-blue-700 font-medium py-5">Thumbnail</Label>
                  {form.thumbnail ? <img src={form.thumbnail} alt="thumbnail" className="mb-2 max-h-40 rounded border border-blue-300" /> : null}
                  <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" onChange={handleChangeFile} className="mt-2 border-blue-300 focus:border-blue-500" />
                  {uploading && <p className="text-blue-500 text-sm mt-1">Uploading image...</p>}
                  {errors.thumbnail && <p className="text-red-500 text-sm mt-1">{errors.thumbnail}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Subjects only */}
            {step === 2 && (
              <div>
                <Label className="text-lg mb-4 text-blue-700 font-medium">Add Subjects</Label>
                <div className="flex gap-2 mb-4">
                  <Input value={subjectInput} onChange={(e) => setSubjectInput(e.target.value)} placeholder="e.g. Algebra, Geometry" className="border-blue-300 focus:border-blue-500" />
                  <Button type="button" onClick={handleAddSubject} className="bg-blue-500 hover:bg-blue-600">Add</Button>
                </div>
                {errors.subjects && <p className="text-red-500 text-sm mb-2">{errors.subjects}</p>}
                <ul className="mt-3 space-y-2">
                  {form.subjects.map((subj) => (
                    <li key={subj} className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3">
                        <button type="button" onClick={() => { setSelectedSubject(subj); setSelectedModule(null); }} className={`px-3 py-1 rounded-md text-sm font-medium ${selectedSubject === subj ? "bg-blue-600 text-white" : "bg-white text-blue-700 border border-blue-200"}`}>
                          {subj}
                        </button>
                        <span className="text-sm text-gray-700">({(modules[subj]?.length) || 0} modules)</span>
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveSubject(subj)} className="text-red-500 hover:text-red-700">Remove</Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Step 3: Modules & Videos */}
            {step === 3 && (
              <div>
                <Label className="text-lg mb-4 text-blue-700 font-medium">Add Modules & Videos</Label>
                {!selectedSubject ? (
                  <p className="text-sm text-gray-600 mb-4">Select a subject in Step 2 or click a subject above to edit modules.</p>
                ) : (
                  <>
                    <div className="mb-4">
                      <strong className="text-pink-600">{selectedSubject}</strong>
                    </div>

                    <div className="space-y-4">
                      {(modules[selectedSubject] || []).map((mod, mi) => (
                        <div key={mi} className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                          <div className="flex items-center justify-between">
                            <Input placeholder="Module Title" value={mod.title} onChange={(e) => handleUpdateModuleTitle(selectedSubject, mi, e.target.value)} className="max-w-lg" />
                            <div className="flex gap-2">
                              <Button type="button" variant="ghost" size="sm" onClick={() => openModuleEditor(selectedSubject, mi)} className="border-blue-300 text-blue-700 hover:bg-blue-100">Edit Videos</Button>
                              <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveModule(selectedSubject, mi)} className="text-red-500">Remove Module</Button>
                            </div>
                          </div>

                          <div className="mt-3 space-y-2">
                            {(mod.videos || []).map((v, vi) => (
                              <div key={vi} className="flex gap-2 items-center">
                                <Input placeholder="Video title" value={v.title} onChange={(e) => handleUpdateVideo(selectedSubject, mi, vi, "title", e.target.value)} />
                                <Input placeholder="Video link" value={v.link} onChange={(e) => handleUpdateVideo(selectedSubject, mi, vi, "link", e.target.value)} />
                                <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveVideo(selectedSubject, mi, vi)} className="text-red-500">Remove</Button>
                              </div>
                            ))}
                            <div>
                              <Button type="button" onClick={() => handleAddVideo(selectedSubject, mi)} className="bg-blue-500 hover:bg-blue-600">+ Add Video</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Button type="button" onClick={() => handleAddModule(selectedSubject)} className="bg-blue-500 hover:bg-blue-600">+ Add Module</Button>
                    </div>
                  </>
                )}
                {errors.modules && <p className="text-red-500 text-sm mt-2">{errors.modules}</p>}
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Review & Finish</h3>
                <div className="space-y-3 text-blue-800">
                  <div><strong>Title:</strong> {form.title}</div>
                  <div><strong>Description:</strong> {form.description}</div>
                  <div><strong>Category:</strong> {categories.find(c => c.value === form.category)?.label || form.category}</div>
                  <div><strong>Instructor:</strong> {findInstructorLabel(form.instructor)}</div>
                  <div><strong>Price:</strong> ${form.price}</div>
                  <div>
                    <strong>Subjects & Modules:</strong>
                    <ul className="list-disc ml-6">
                      {form.subjects.map((subj, idx) => (
                        <li key={idx}>
                          <span className="font-semibold">{subj}</span>
                          <ul className="list-disc ml-6">
                            {(modules[subj] || []).map((m, mi) => (
                              <li key={mi}>
                                <span className="font-medium">{m.title || "Untitled Module"}</span>
                                <ul className="list-disc ml-6">
                                  {(m.videos || []).map((v, vi) => (
                                    <li key={vi}><span className="font-semibold">{v.title}</span>: <a href={v.link} target="_blank" rel="noreferrer" className="text-blue-600 underline">{v.link}</a></li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Thumbnail:</strong>
                    {form.thumbnail ? <img src={form.thumbnail} alt="Course Thumbnail" className="mt-2 max-h-48 rounded border border-blue-300" /> : " No thumbnail selected"}
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between mt-8 p-6 bg-blue-50 rounded-b-lg">
            <div>
              {step > 1 && (
                <Button type="button" variant="secondary" onClick={handleBack} className="border-blue-300 text-blue-700 hover:bg-blue-100">Back</Button>
              )}
            </div>

            <div className="flex gap-3">
              {step < 4 && (
                <Button type="button" onClick={handleNext} disabled={uploading} className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300">
                  {uploading ? "Uploading..." : "Next"}
                </Button>
              )}
              {step === 4 && (
                <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow">Update Course</Button>
              )}
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
