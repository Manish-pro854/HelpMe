import React from "react";
import bg from "../assets/home-bg.jpg";
import { Briefcase, Users, Clock } from "lucide-react";
import WorkCard from "../Cards/WorkCard";

const Home = () => {
  return (
    <div className="pt-20 h-full w-full">
      <div className="relative w-[95%] h-[70vh] rounded-2xl overflow-hidden shadow-lg mx-auto">
        <img
          src={bg}
          alt="Home Background"
          className="w-full h-full object-cover opacity-90"
        />

        {/* Text Overlay - Moved Upward */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center p-2 md:px-6 pt-10 md:pt-20 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hire help in minutes or find work that fits your schedule.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Need a quick task done or looking to earn some extra income? We connect skilled professionals with people who need help — fast, easy, and stress-free, anytime, anywhere.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-col md:flex-row">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full border-0">
              Find Flexible Work
            </button>
            <button className="bg-white hover:bg-gray-200 text-black font-semibold py-2 px-6 rounded-full border-0">
              Get Instant Help
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-start items-start w-[95%] md:w-[90%] mx-auto my-8 p-2">
        <h1 className="text-3xl">How HelpMe Works</h1>
        <p className="text-xl flex flex-col">HelpMe simplifies the process of finding and offering part-time work. Here's how you can <span>get started:</span></p>
      </div>
      <div className="w-[95%] mx-auto flex items-center justify-center flex-wrap gap-8 my-8">
        <WorkCard icon={Briefcase} title={"For Workers"} l1={"Create a profile highlighting your skills and availability."} l2={"Find tasks and apply for opportunities matching your expertise."} l3={"Receive secure payments upon task completion."}/>
        <WorkCard icon={Users} title={"For Those Needing Help"} l1={"Describe your task needs, including details and budget."} l2={"Review worker profiles and select the best match."} l3={"Approve completed work and make secure payments."}/>
        <WorkCard icon={Clock} title={"Get Started"} l1={"Sign up for free to explore opportunities or post tasks."} l2={"Our platform offers tools to securely manage tasks and payments."} l3={"Start connecting with skilled professionals or find work that fits your schedule."}/>
      </div>
    </div>
  );
};

export default Home;
