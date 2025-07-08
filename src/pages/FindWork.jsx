import React from "react";
import { useJobContext } from "../context/JobContext";
import { FaArrowRightLong } from "react-icons/fa6";

// 📦 default showcase task images
import cleaning from "../assets/floor.jpg";
import dog from "../assets/dog.jpg";
import grocery from "../assets/grocery.png";
import event from "../assets/table.jpg";

// ---------- static default tasks ----------
const staticTasks = [
  {
    id: "static-1",
    tag: "New",
    title: "Home Cleaning",
    description: "Clean a 2‑bedroom apartment in downtown. Flexible hours.",
    image: cleaning,
  },
  {
    id: "static-2",
    tag: "Urgent",
    title: "Pet Sitting",
    description: "Take care of a friendly dog for 3 days. Must have experience.",
    image: dog,
  },
  {
    id: "static-3",
    title: "Grocery Shopping",
    description: "Shop for groceries for a family of four. List provided.",
    image: grocery,
  },
  {
    id: "static-4",
    title: "Event Setup",
    description: "Help set up decorations for a small party. Creative skills a plus.",
    image: event,
  },
];

const FindWork = () => {
  // 🔗 jobs posted via <PostJob />
  const { jobs } = useJobContext();

  // 🥇 user‑posted jobs first, then defaults
  const allTasks = [...jobs, ...staticTasks];

  return (
    <div className="pt-20 px-4 bg-white min-h-screen -mb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-10">
        {/* ------------ FILTER SIDEBAR ------------ */}
        <aside className="md:w-1/4 w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 px-1">Filters</h2>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <form className="space-y-5">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-yellow-400 focus:outline-none focus:ring-2">
                  <option>Select category</option>
                  <option>Cleaning</option>
                  <option>Delivery</option>
                  <option>Pet Care</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your area"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-yellow-400 focus:outline-none focus:ring-2"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-yellow-400 focus:outline-none focus:ring-2">
                  <option>Select time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>

              {/* Pay Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Pay (₹)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 500"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-yellow-400 focus:outline-none focus:ring-2"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Apply Filters
              </button>
            </form>
          </div>
        </aside>

        {/* ------------ TASK LISTS ------------ */}
        <main className="md:w-3/4 w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Available <span className="text-yellow-500">Tasks</span>
          </h2>

          {allTasks.length === 0 ? (
            <p className="text-gray-500 text-lg">No tasks available yet.</p>
          ) : (
            <div className="space-y-8">
              {allTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all flex flex-col md:flex-row items-start gap-6"
                >
                  {/* Text */}
                  <div className="flex-1">
                    {task.tag && (
                      <span className="text-sm font-semibold text-yellow-500 uppercase tracking-wide">
                        {task.tag}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {task.title}
                    </h3>
                    <p className="text-gray-700 mt-2">{task.description}</p>
                    <button className="mt-4 flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-sm cursor-pointer">
                      Apply Now <FaArrowRightLong />
                    </button>
                  </div>

                  {/* Image (fallback if none) */}
                  <img
                    src={task.image || cleaning}
                    alt={task.title}
                    className="w-full md:w-60 h-40 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FindWork;
