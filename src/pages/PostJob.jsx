import React, { useState, useContext } from "react";
import { JobContext } from "../context/JobContext";

const PostJob = () => {
  const { addJob } = useContext(JobContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    payment: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(formData);
    setFormData({
      title: "",
      description: "",
      skills: "",
      payment: "",
      image: null,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-25 pb-10 -mb-10">
      <div className="w-[90%] max-w-5xl mx-auto px-6 py-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Post a <span className="text-yellow-500">Task</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Task Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Need help with cleaning"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the task in detail..."
              className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none focus:ring-2 focus:ring-yellow-400 outline-none"
              rows="3"
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Required Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. Cleaning, Lifting"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Payment */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Proposed Payment (₹)</label>
            <input
              type="number"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              placeholder="e.g. 500"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Upload Image (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500 transition"
            />
          </div>

          {/* Preview */}
          {formData.image && (
            <div className="mt-2">
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-40 object-cover rounded-xl shadow"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold w-full py-3 rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Post Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
