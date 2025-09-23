"use client";
import React, { useState } from 'react';

const instructors = [
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

const CreateCourse = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        thumbnail: null,
        instructor: '',
        subjects: [],
    });

    // For subjects input
    const [subjectInput, setSubjectInput] = useState('');

    // For modules per subject
    const [modules, setModules] = useState({}); // { subject: [{ title, videos: [{title, link}] }] }
    const [selectedSubject, setSelectedSubject] = useState('');
    const [moduleInput, setModuleInput] = useState('');
    const [videoInputs, setVideoInputs] = useState([{ title: '', link: '' }]);
    const [selectedModule, setSelectedModule] = useState('');

    // Handlers
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleInstructorChange = (e) => {
        setForm((prev) => ({
            ...prev,
            instructor: e.target.value,
        }));
    };

    // Subjects
    const handleAddSubject = () => {
        if (subjectInput.trim() && !form.subjects.includes(subjectInput.trim())) {
            setForm((prev) => ({
                ...prev,
                subjects: [...prev.subjects, subjectInput.trim()],
            }));
            setModules((prev) => ({
                ...prev,
                [subjectInput.trim()]: [],
            }));
            setSubjectInput('');
        }
    };

    const handleRemoveSubject = (idx) => {
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
        if (selectedSubject === subject) setSelectedSubject('');
    };

    // Modules
    const handleSelectSubject = (subject) => {
        setSelectedSubject(subject);
        setSelectedModule('');
        setModuleInput('');
        setVideoInputs([{ title: '', link: '' }]);
    };

    const handleAddModule = () => {
        if (!selectedSubject || !moduleInput.trim()) return;
        setModules((prev) => ({
            ...prev,
            [selectedSubject]: [
                ...prev[selectedSubject],
                { title: moduleInput.trim(), videos: [] },
            ],
        }));
        setModuleInput('');
        setVideoInputs([{ title: '', link: '' }]);
    };

    const handleRemoveModule = (modIdx) => {
        setModules((prev) => ({
            ...prev,
            [selectedSubject]: prev[selectedSubject].filter((_, i) => i !== modIdx),
        }));
        if (selectedModule === modIdx) setSelectedModule('');
    };

    // Videos
    const handleSelectModule = (modIdx) => {
        setSelectedModule(modIdx);
        setVideoInputs(
            modules[selectedSubject]?.[modIdx]?.videos?.length
                ? modules[selectedSubject][modIdx].videos
                : [{ title: '', link: '' }]
        );
    };

    const handleVideoInputChange = (idx, field, value) => {
        setVideoInputs((prev) =>
            prev.map((v, i) => (i === idx ? { ...v, [field]: value } : v))
        );
    };

    const handleAddVideoInput = () => {
        setVideoInputs((prev) => [...prev, { title: '', link: '' }]);
    };

    const handleRemoveVideoInput = (idx) => {
        setVideoInputs((prev) => prev.filter((_, i) => i !== idx));
    };

    const handleSaveVideos = () => {
        setModules((prev) => ({
            ...prev,
            [selectedSubject]: prev[selectedSubject].map((mod, i) =>
                i === selectedModule ? { ...mod, videos: videoInputs.filter(v => v.title && v.link) } : mod
            ),
        }));
    };

    // Navigation
    const handleNext = () => setStep((s) => s + 1);
    const handleBack = () => setStep((s) => s - 1);

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare payload
        const payload = {
            ...form,
            modules,
        };
        // Backend integration example (replace URL)
        const data = new FormData();
        Object.entries(payload).forEach(([key, value]) => {
            if (key === 'thumbnail' && value) {
                data.append('thumbnail', value);
            } else if (key === 'modules') {
                data.append('modules', JSON.stringify(value));
            } else if (Array.isArray(value)) {
                data.append(key, JSON.stringify(value));
            } else {
                data.append(key, value);
            }
        });
        // Example POST request
        // await fetch('/api/courses', { method: 'POST', body: data });
        alert('Course created! Ready to hit backend.');
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Create New Course</h2>
            <div className="flex mb-8 space-x-4">
                {["Course Info", "Subjects", "Modules", "Finish"].map((label, idx) => (
                    <div
                        key={label}
                        className={`px-4 py-2 rounded-full text-base font-semibold transition ${
                            step === idx + 1
                                ? "bg-blue-700 text-white shadow"
                                : "bg-gray-100 text-gray-500"
                        }`}
                    >
                        {label}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                placeholder="Enter course title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            >
                                <option value="">Select category</option>
                                {categories.map((cat) => (
                                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                placeholder="Course description"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
                            <select
                                name="instructor"
                                value={form.instructor}
                                onChange={handleInstructorChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            >
                                <option value="">Select instructor</option>
                                {instructors.map((inst) => (
                                    <option key={inst.id} value={inst.id}>{inst.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                min="0"
                                step="0.01"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                placeholder="Course price"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail</label>
                            <input
                                type="file"
                                name="thumbnail"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="button"
                                onClick={handleNext}
                                className="bg-blue-700 text-white py-3 px-8 rounded-lg hover:bg-blue-800 transition font-semibold"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-4">Add Subjects</label>
                        <div className="flex space-x-3 mb-4">
                            <input
                                type="text"
                                value={subjectInput}
                                onChange={(e) => setSubjectInput(e.target.value)}
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                placeholder="e.g. Algebra, Geometry"
                            />
                            <button
                                type="button"
                                onClick={handleAddSubject}
                                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
                            >
                                Add
                            </button>
                        </div>
                        <ul className="mt-3 space-y-2">
                            {form.subjects.map((subj, idx) => (
                                <li key={idx} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg">
                                    <span className="font-medium">{subj}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveSubject(idx)}
                                        className="text-red-500 hover:underline text-xs"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-300 transition font-semibold"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="bg-blue-700 text-white py-3 px-8 rounded-lg hover:bg-blue-800 transition font-semibold"
                                disabled={form.subjects.length === 0}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-4">Add Modules & Videos</label>
                        <div className="flex space-x-3 mb-6">
                            <select
                                value={selectedSubject}
                                onChange={(e) => handleSelectSubject(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            >
                                <option value="">Select subject</option>
                                {form.subjects.map((subj, idx) => (
                                    <option key={idx} value={subj}>{subj}</option>
                                ))}
                            </select>
                        </div>
                        {selectedSubject && (
                            <div className="mb-8">
                                <div className="flex space-x-3 mb-4">
                                    <input
                                        type="text"
                                        value={moduleInput}
                                        onChange={(e) => setModuleInput(e.target.value)}
                                        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                        placeholder="Module title e.g. Introduction"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddModule}
                                        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
                                    >
                                        Add Module
                                    </button>
                                </div>
                                <ul className="space-y-2">
                                    {(modules[selectedSubject] || []).map((mod, modIdx) => (
                                        <li key={modIdx} className="bg-gray-50 rounded-lg px-4 py-2 flex flex-col mb-2 border border-gray-200">
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold">{mod.title}</span>
                                                <div>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleSelectModule(modIdx)}
                                                        className="text-blue-600 hover:underline text-xs mr-4"
                                                    >
                                                        Add/Edit Videos
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveModule(modIdx)}
                                                        className="text-red-500 hover:underline text-xs"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            {selectedModule === modIdx && (
                                                <div className="mt-4 bg-white rounded-lg p-4 border border-blue-100">
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Videos</label>
                                                    {videoInputs.map((video, vidIdx) => (
                                                        <div key={vidIdx} className="flex space-x-2 mb-2">
                                                            <input
                                                                type="text"
                                                                value={video.title}
                                                                onChange={(e) => handleVideoInputChange(vidIdx, 'title', e.target.value)}
                                                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                placeholder="Video title"
                                                            />
                                                            <input
                                                                type="url"
                                                                value={video.link}
                                                                onChange={(e) => handleVideoInputChange(vidIdx, 'link', e.target.value)}
                                                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                placeholder="Video link"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveVideoInput(vidIdx)}
                                                                className="text-red-500 hover:underline text-xs"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    ))}
                                                    <div className="flex space-x-2 mt-2">
                                                        <button
                                                            type="button"
                                                            onClick={handleAddVideoInput}
                                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                                                        >
                                                            Add Video
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={handleSaveVideos}
                                                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm"
                                                        >
                                                            Save Videos
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                            {mod.videos && mod.videos.length > 0 && (
                                                <div className="mt-2 ml-4">
                                                    <span className="text-sm font-medium text-gray-600">Videos:</span>
                                                    <ul className="list-disc ml-6">
                                                        {mod.videos.map((v, vIdx) => (
                                                            <li key={vIdx} className="text-sm">
                                                                <span className="font-semibold">{v.title}</span>: <a href={v.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{v.link}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-300 transition font-semibold"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="bg-blue-700 text-white py-3 px-8 rounded-lg hover:bg-blue-800 transition font-semibold"
                                disabled={
                                    !form.subjects.length ||
                                    Object.values(modules).some(modArr => !modArr.length)
                                }
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Review & Finish</h3>
                        <div className="space-y-3">
                            <div><strong>Title:</strong> {form.title}</div>
                            <div><strong>Description:</strong> {form.description}</div>
                            <div><strong>Category:</strong> {categories.find(c => c.value === form.category)?.label}</div>
                            <div><strong>Instructor:</strong> {instructors.find(i => i.id == form.instructor)?.name}</div>
                            <div><strong>Price:</strong> ${form.price}</div>
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
                                                                    <span className="font-semibold">{v.title}</span>: <a href={v.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{v.link}</a>
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
                                <strong>Thumbnail:</strong> {form.thumbnail ? form.thumbnail.name : "No thumbnail selected"}
                            </div>
                        </div>
                        <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-300 transition font-semibold"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-green-700 text-white py-3 px-8 rounded-lg hover:bg-green-800 transition font-semibold"
                            >
                                Finish
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default CreateCourse;