import React, { useState } from "react";

const skillsList = [
  "Cleaning",
  "Handyman",
  "Pet Sitting",
  "Gardening",
  "Moving",
  "Delivery",
  "Event Help",
  "Office Help",
  "Tech Support",
  "Other",
];

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    about: "",
    rate: "",
    selectedSkills: [],
  });

  const toggleSkill = (skill) => {
    setForm((prev) => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter((s) => s !== skill)
        : [...prev.selectedSkills, skill],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Saved:", form);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-16 p-2 md:px-4 -mb-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Create Your <span className="text-yellow-500">Profile</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Complete your profile to start receiving task requests.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
              >
                <option>Select your location</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Kolkata</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              About Me
            </label>
            <textarea
              name="about"
              value={form.about}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your skills and experience"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Select Your <span className="text-yellow-500">Skills</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    form.selectedSkills.includes(skill)
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Rate */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Hourly Rate (₹)
            </label>
            <input
              type="number"
              name="rate"
              value={form.rate}
              onChange={handleChange}
              placeholder="Enter your hourly rate"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-yellow-400 w-full py-3 rounded-full text-black font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
