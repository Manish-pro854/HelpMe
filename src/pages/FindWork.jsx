import React from "react";
import dog from "../assets/dog.jpg";
import cleaning from "../assets/floor.jpg";
import grocery from "../assets/grocery.png";
import event from "../assets/table.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const tasks = [
  {
    id: 1,
    tag: "New",
    title: "Home Cleaning",
    description: "Clean a 2-bedroom apartment in downtown. Flexible hours.",
    image: cleaning,
  },
  {
    id: 2,
    tag: "Urgent",
    title: "Pet Sitting",
    description:
      "Take care of a friendly dog for 3 days. Must have experience.",
    image: dog,
  },
  {
    id: 3,
    title: "Grocery Shopping",
    description: "Shop for groceries for a family of four. List provided.",
    image: grocery,
  },
  {
    id: 4,
    title: "Event Setup",
    description:
      "Help set up decorations for a small party. Creative skills a plus.",
    image: event,
  },
];

const FindWork = () => {
  return (
    <div className="pt-20 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-10">
        {/* Filters */}
        <aside className="md:w-1/4 w-full">
          {/* Section Heading */}
          <h2 className="text-3xl px-6 font-bold text-gray-900 mb-4">Filters</h2>

          {/* Filter Form Card */}
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <form className="space-y-5">
              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option>Select category</option>
                  <option>Cleaning</option>
                  <option>Delivery</option>
                  <option>Pet Care</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter your area"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Availability */}
              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Availability
                </label>
                <select
                  id="availability"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option>Select time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>

              {/* Pay Rate */}
              <div>
                <label
                  htmlFor="pay"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Max Pay (₹)
                </label>
                <input
                  id="pay"
                  type="number"
                  placeholder="e.g. 500"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
              >
                Apply Filters
              </button>
            </form>
          </div>
        </aside>

        {/* Task Listings */}
        <main className="md:w-3/4 w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Available <span className="text-yellow-500">Tasks</span>
          </h2>
          <div className="space-y-8">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all flex flex-col md:flex-row items-start gap-6"
              >
                {/* Text Content */}
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
                  <button className="mt-4 flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-sm">
                    Apply Now <FaArrowRightLong />
                  </button>
                </div>

                {/* Image */}
                <img
                  src={task.image}
                  alt={task.title}
                  className="w-full md:w-60 h-40 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FindWork;
