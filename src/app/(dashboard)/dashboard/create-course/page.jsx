"use client";
import axios from "axios";
import React, { useState, useCallback } from "react";
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

const steps = ["Course Info", "Subjects", "Modules", "Finish"];

const initialForm = {
  title: "",
  description: "",
  category: "",
  price: "",
  thumbnail: null,
  instructor: "",
  subjects: [],
};

const CreateCourse = () => {

  console.log(process.env.NEXT_PUBLIC_IMAGEBB_API_KEY);

  const instructors = React.useMemo(
    () => [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
    ],
    []
  );

  const categories = React.useMemo(
    () => [
      { value: "math", label: "Math" },
      { value: "english", label: "English" },
      { value: "programming", label: "Programming" },
      { value: "design", label: "Design" },
      { value: "marketing", label: "Marketing" },
      { value: "business", label: "Business" },
    ],
    []
  );

  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [subjectInput, setSubjectInput] = useState("");
  const [modules, setModules] = useState({});
  const [selectedSubject, setSelectedSubject] = useState("");
  const [moduleInput, setModuleInput] = useState("");
  const [videoInputs, setVideoInputs] = useState([{ title: "", link: "" }]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateStep1 = useCallback(() => {
    const newErrors = {};
    
    if (!form.title.trim()) newErrors.title = "Course title is required";
    if (!form.description.trim()) newErrors.description = "Description is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.instructor) newErrors.instructor = "Instructor is required";
    if (!form.price || parseFloat(form.price) <= 0) newErrors.price = "Valid price is required";
    if (!form.thumbnail) newErrors.thumbnail = "Thumbnail is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const validateStep2 = useCallback(() => {
    if (form.subjects.length === 0) {
      setErrors({ subjects: "At least one subject is required" });
      return false;
    }
    setErrors({});
    return true;
  }, [form.subjects]);

  const validateStep3 = useCallback(() => {
    if (!selectedSubject) {
      setErrors({ modules: "Please select a subject" });
      return false;
    }
    
    const subjectModules = modules[selectedSubject] || [];
    if (subjectModules.length === 0) {
      setErrors({ modules: "At least one module is required for the selected subject" });
      return false;
    }
    
    // Check if all modules have at least one video
    const incompleteModules = subjectModules.filter(module => 
      !module.videos || module.videos.length === 0 || 
      module.videos.some(video => !video.title.trim() || !video.link.trim())
    );
    
    if (incompleteModules.length > 0) {
      setErrors({ modules: "All modules must have at least one complete video (title and link)" });
      return false;
    }
    
    setErrors({});
    return true;
  }, [selectedSubject, modules]);

  const handleChange = useCallback(async (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file" && files && files[0]) {
      setUploading(true);
      const file = files[0];
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
          formData
        );

        const imageUrl = response.data.data.url;
        setForm((prev) => ({
          ...prev,
          [name]: imageUrl,
        }));
        setUploading(false);
        // Clear thumbnail error if any
        setErrors(prev => ({ ...prev, thumbnail: undefined }));
      } catch (error) {
        console.error("Image upload failed:", error);
        setErrors(prev => ({ ...prev, thumbnail: "Image upload failed" }));
        setUploading(false);
      }
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Clear specific error when field is filled
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, []);

  const handleInstructorChange = useCallback((value) => {
    setForm((prev) => ({
      ...prev,
      instructor: value,
    }));
    setErrors(prev => ({ ...prev, instructor: undefined }));
  }, []);

  const handleCategoryChange = useCallback((value) => {
    setForm((prev) => ({
      ...prev,
      category: value,
    }));
    setErrors(prev => ({ ...prev, category: undefined }));
  }, []);

  const handleAddSubject = useCallback(() => {
    const subject = subjectInput.trim();
    if (subject && !form.subjects.includes(subject)) {
      setForm((prev) => ({
        ...prev,
        subjects: [...prev.subjects, subject],
      }));
      setModules((prev) => ({
        ...prev,
        [subject]: [],
      }));
      setSubjectInput("");
      setErrors(prev => ({ ...prev, subjects: undefined }));
    }
  }, [subjectInput, form.subjects]);

  const handleRemoveSubject = useCallback(
    (idx) => {
      const subject = form.subjects[idx];
      setForm((prev) => ({
        ...prev,
        subjects: prev.subjects.filter((_, i) => i !== idx),
      }));
      setModules((prev) => {
        const newModules = { ...prev };
        delete newModules[subject];
        return newModules;
      });
      if (selectedSubject === subject) setSelectedSubject("");
    },
    [form.subjects, selectedSubject]
  );

  const handleSelectSubject = useCallback((subject) => {
    setSelectedSubject(subject);
    setSelectedModule(null);
    setModuleInput("");
    setVideoInputs([{ title: "", link: "" }]);
    setErrors(prev => ({ ...prev, modules: undefined }));
  }, []);

  const handleAddModule = useCallback(() => {
    if (!selectedSubject || !moduleInput.trim()) return;
    setModules((prev) => ({
      ...prev,
      [selectedSubject]: [
        ...prev[selectedSubject],
        { title: moduleInput.trim(), videos: [] },
      ],
    }));
    setModuleInput("");
    setVideoInputs([{ title: "", link: "" }]);
    setErrors(prev => ({ ...prev, modules: undefined }));
  }, [selectedSubject, moduleInput]);

  const handleRemoveModule = useCallback(
    (modIdx) => {
      setModules((prev) => ({
        ...prev,
        [selectedSubject]: prev[selectedSubject].filter((_, i) => i !== modIdx),
      }));
      if (selectedModule === modIdx) setSelectedModule(null);
    },
    [selectedSubject, selectedModule]
  );

  const handleSelectModule = useCallback(
    (modIdx) => {
      setSelectedModule(modIdx);
      setVideoInputs(
        modules[selectedSubject]?.[modIdx]?.videos.length
          ? modules[selectedSubject][modIdx].videos
          : [{ title: "", link: "" }]
      );
    },
    [modules, selectedSubject]
  );

  const handleVideoInputChange = useCallback((idx, field, value) => {
    setVideoInputs((prev) =>
      prev.map((v, i) => (i === idx ? { ...v, [field]: value } : v))
    );
  }, []);

  const handleAddVideoInput = useCallback(() => {
    setVideoInputs((prev) => [...prev, { title: "", link: "" }]);
  }, []);

  const handleRemoveVideoInput = useCallback((idx) => {
    setVideoInputs((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const handleSaveVideos = useCallback(() => {
    setModules((prev) => ({
      ...prev,
      [selectedSubject]: prev[selectedSubject].map((mod, i) =>
        i === selectedModule
          ? { ...mod, videos: videoInputs.filter((v) => v.title && v.link) }
          : mod
      ),
    }));
    setErrors(prev => ({ ...prev, modules: undefined }));
  }, [selectedSubject, selectedModule, videoInputs]);

  const handleNext = useCallback(() => {
    let isValid = false;
    
    switch(step) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
      default:
        isValid = true;
    }
    
    if (isValid) {
      setStep((s) => s + 1);
    }
  }, [step, validateStep1, validateStep2, validateStep3]);

  const handleBack = useCallback(() => {
    setStep((s) => s - 1);
    setErrors({});
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const payload = { ...form, modules };
      console.log("Final payload:", payload);
      try {
        const response = await axios.post("/api/courses", payload, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Course created:", response.data);
        // Reset form after successful submission
        setForm(initialForm);
        setModules({});
        setStep(1);
        setErrors({});
      } catch (error) {
        console.error("Error creating course:", error);
      }
    },
    [form, modules]
  );

  const isStep1Complete = form.title && form.description && form.category && 
                          form.instructor && form.price && form.thumbnail;
  const isStep2Complete = form.subjects.length > 0;
  const isStep3Complete = selectedSubject && modules[selectedSubject]?.length > 0;

  return (
    <div className="min-h-screen p-4">
      <Card className="w-full max-w-4xl mx-auto mt-8 border-blue-200 shadow-lg">
        <CardHeader className=" rounded-t-lg">
          <CardTitle className="text-blue-700">Create New Course</CardTitle>
          <div className="flex gap-2 mt-4">
            {steps.map((label, idx) => (
              <div
                key={label}
                className={`px-4 py-2 rounded-full text-base font-semibold transition ${
                  step === idx + 1
                    ? "bg-blue-500 text-white shadow"
                    : "bg-blue-100 text-blue-700"
                }`}
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
                  <Input
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter course title"
                    className="mt-2 border-blue-300 focus:border-blue-500"
                  />
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>
                <div>
                  <Label htmlFor="category" className="text-blue-700 font-medium">Category</Label>
                  <Select
                    value={form.category}
                    onValueChange={handleCategoryChange}
                    required
                  >
                    <SelectTrigger className="mt-2 border-blue-300 focus:border-blue-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description" className="text-blue-700 font-medium">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Course description"
                    className="mt-2 border-blue-300 focus:border-blue-500"
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>
                <div>
                  <Label htmlFor="instructor" className="text-blue-700 font-medium">Instructor</Label>
                  <Select
                    value={form.instructor}
                    onValueChange={handleInstructorChange}
                    required
                  >
                    <SelectTrigger className="mt-2 border-blue-300 focus:border-blue-500">
                      <SelectValue placeholder="Select instructor" />
                    </SelectTrigger>
                    <SelectContent>
                      {instructors.map((inst) => (
                        <SelectItem key={inst.id} value={String(inst.id)}>
                          {inst.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.instructor && <p className="text-red-500 text-sm mt-1">{errors.instructor}</p>}
                </div>
                <div>
                  <Label htmlFor="price" className="text-blue-700 font-medium">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                    placeholder="Course price"
                    className="mt-2 border-blue-300 focus:border-blue-500"
                  />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>
                <div>
                  <img src={form.thumbnail} alt="" />
                  <Label htmlFor="thumbnail" className="text-blue-700 font-medium py-5">Thumbnail</Label>
                  <Input
                    required
                    id="thumbnail"
                    name="thumbnail"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="mt-2 border-blue-300 focus:border-blue-500"
                  />
                  {errors.thumbnail && <p className="text-red-500 text-sm mt-1">{errors.thumbnail}</p>}
                  {uploading && <p className="text-blue-500 text-sm mt-1">Uploading image...</p>}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <Label className="text-lg mb-4 text-blue-700 font-medium">Add Subjects</Label>
                <div className="flex gap-2 mb-4">
                  <Input
                    value={subjectInput}
                    onChange={(e) => setSubjectInput(e.target.value)}
                    placeholder="e.g. Algebra, Geometry"
                    className="border-blue-300 focus:border-blue-500"
                  />
                  <Button type="button" onClick={handleAddSubject} className="bg-blue-500 hover:bg-blue-600">
                    Add
                  </Button>
                </div>
                {errors.subjects && <p className="text-red-500 text-sm mb-2">{errors.subjects}</p>}
                <ul className="mt-3 space-y-2">
                  {form.subjects.map((subj, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-lg border border-blue-200"
                    >
                      <span className="font-medium text-blue-700">{subj}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveSubject(idx)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <Label className="text-lg mb-4 text-blue-700 font-medium">Add Modules & Videos</Label>
                <div className="flex gap-2 mb-6">
                  <Select
                    value={selectedSubject}
                    onValueChange={handleSelectSubject}
                  >
                    <SelectTrigger className="border-blue-300 focus:border-blue-500">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {form.subjects.map((subj, idx) => (
                        <SelectItem key={idx} value={subj}>
                          {subj}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {errors.modules && <p className="text-red-500 text-sm mb-2">{errors.modules}</p>}
                {selectedSubject && (
                  <div className="mb-8">
                    <div className="flex gap-2 mb-4">
                      <Input
                        value={moduleInput}
                        onChange={(e) => setModuleInput(e.target.value)}
                        placeholder="Module title e.g. Introduction"
                        className="border-blue-300 focus:border-blue-500"
                      />
                      <Button type="button" onClick={handleAddModule} className="bg-blue-500 hover:bg-blue-600">
                        Add Module
                      </Button>
                    </div>
                    <ul className="space-y-2">
                      {(modules[selectedSubject] || []).map((mod, modIdx) => (
                        <li
                          key={modIdx}
                          className="bg-blue-50 rounded-lg px-4 py-2 flex flex-col mb-2 border border-blue-200"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-blue-700">{mod.title}</span>
                            <div className="flex gap-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleSelectModule(modIdx)}
                                className="border-blue-300 text-blue-700 hover:bg-blue-100"
                              >
                                Add/Edit Videos
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveModule(modIdx)}
                                className="text-red-500 hover:text-red-700"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                          {selectedModule === modIdx && (
                            <div className="mt-4 bg-white rounded-lg p-4 border border-blue-200">
                              <Label className="text-blue-700">Videos</Label>
                              {videoInputs.map((video, vidIdx) => (
                                <div key={vidIdx} className="flex gap-2 mb-2">
                                  <Input
                                    value={video.title}
                                    onChange={(e) =>
                                      handleVideoInputChange(
                                        vidIdx,
                                        "title",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Video title"
                                    className="border-blue-300 focus:border-blue-500"
                                  />
                                  <Input
                                    value={video.link}
                                    onChange={(e) =>
                                      handleVideoInputChange(
                                        vidIdx,
                                        "link",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Video link"
                                    className="border-blue-300 focus:border-blue-500"
                                  />
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleRemoveVideoInput(vidIdx)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              ))}
                              <div className="flex gap-2 mt-2">
                                <Button
                                  type="button"
                                  onClick={handleAddVideoInput}
                                  size="sm"
                                  className="bg-blue-500 hover:bg-blue-600"
                                >
                                  Add Video
                                </Button>
                                <Button
                                  type="button"
                                  onClick={handleSaveVideos}
                                  size="sm"
                                  variant="default"
                                  className="bg-green-500 hover:bg-green-600"
                                >
                                  Save Videos
                                </Button>
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Review & Finish</h3>
                <div className="space-y-3 text-blue-800">
                  <div>
                    <strong>Title:</strong> {form.title}
                  </div>
                  <div>
                    <strong>Description:</strong> {form.description}
                  </div>
                  <div>
                    <strong>Category:</strong>{" "}
                    {categories.find((c) => c.value === form.category)?.label}
                  </div>
                  <div>
                    <strong>Instructor:</strong>{" "}
                    {instructors.find((i) => i.id == form.instructor)?.name}
                  </div>
                  <div>
                    <strong>Price:</strong> ${form.price}
                  </div>
                  <div>
                    <strong>Subjects & Modules:</strong>
                    <ul className="list-disc ml-6">
                      {form.subjects.map((subj, idx) => (
                        <li key={idx}>
                          <span className="font-semibold">{subj}</span>
                          <ul className="list-disc ml-6">
                            {(modules[subj] || []).map((mod, modIdx) => (
                              <li key={modIdx}>
                                <span className="font-medium">{mod.title}</span>
                                <ul className="list-disc ml-6">
                                  {(mod.videos || []).map((v, vIdx) => (
                                    <li key={vIdx}>
                                      <span className="font-semibold">
                                        {v.title}
                                      </span>
                                      :{" "}
                                      <a
                                        href={v.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline"
                                      >
                                        {v.link}
                                      </a>
                                    </li>
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
                    <strong>Thumbnail:</strong>{" "}
                    {form.thumbnail ? (
                      <img
                        src={form.thumbnail}
                        alt="Course Thumbnail"
                        className="mt-2 max-h-48 rounded border border-blue-300"
                      />
                    ) : (
                      "No thumbnail selected"
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between mt-8 p-6 bg-blue-50 rounded-b-lg">
            {step > 1 && (
              <Button 
                type="button" 
                variant="secondary" 
                onClick={handleBack}
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                Back
              </Button>
            )}
            {step < 4 && (
              <Button
                type="button"
                onClick={handleNext}
                disabled={uploading}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300"
              >
                {uploading ? "Uploading..." : "Next"}
              </Button>
            )}
            {step === 4 && (
              <Button 
                type="submit"
                className="bg-green-500 hover:bg-green-600"
              >
                Finish & Create Course
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default CreateCourse;