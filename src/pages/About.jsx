import React from "react";
import teamImg from "../assets/team.jpg"; // Add a nice team image here
import Team from "../Sections/Team";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-yellow-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-yellow-500">HelpMe</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          We’re on a mission to connect people who need help with those who are
          ready to work — quickly, securely, and stress-free.
        </p>
      </section>
      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="md:pl-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Who <span className="text-yellow-500">We</span> Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="text-yellow-500">HelpMe</strong> is a
            fast-growing platform designed to match task posters with skilled
            local workers. Whether it’s cleaning, deliveries, tech help, or more
            — we believe in empowering people to earn with flexible jobs and
            helping others get things done.
          </p>
        </div>
        <img
          src={teamImg}
          alt="Our team"
          className="rounded-xl w-full h-80 object-cover shadow-md"
        />
      </section>
      {/* Our Mission & Values */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Our Mission",
              text: "To simplify how people find short-term work or help with everyday tasks.",
            },
            {
              title: "Trust & Safety",
              text: "We prioritize verified users, reviews, and secure payments for peace of mind.",
            },
            {
              title: "Flexibility & Freedom",
              text: "Empowering people to work when they want and help when they can.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-500 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Our Stats & Achievements
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-2">💼</span>
              <span className="text-4xl font-extrabold text-yellow-600">
                10,000+
              </span>
              <span className="uppercase tracking-wide text-gray-700">
                jobs posted
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-2">👥</span>
              <span className="text-4xl font-extrabold text-yellow-600">
                3,000+
              </span>
              <span className="uppercase tracking-wide text-gray-700">
                verified workers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-2">⭐</span>
              <span className="text-4xl font-extrabold text-yellow-600">
                4.8
              </span>
              <span className="uppercase tracking-wide text-gray-700">
                average rating
              </span>
            </div>
          </div>
        </div>
      </section>

       <Team />
      
      {/* Call To Action */}
      <section className="text-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Ready to get started?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Join thousands who are already using HelpMe to work or get things
          done.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <NavLink to="/find-work"><button className="bg-yellow-400 hover:bg-yellow-500 px-8 md:px-6 py-3 rounded-full text-black font-semibold transition-all duration-300 cursor-pointer">
            Find Flexible Work
          </button></NavLink>
          <NavLink to="/post-job"><button className="bg-black hover:bg-gray-800 px-15 md:px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 max-w-full cursor-pointer">
            Post a Job
          </button></NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;
