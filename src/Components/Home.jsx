import React from "react";
import bg from "../assets/home-bg.jpg";
import car from "../assets/car.jpg";
import clothes from "../assets/clothes.jpg";
import dog from "../assets/dog.jpg";
import floor from "../assets/floor.jpg";
import { Briefcase, Users, Clock } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
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
            Need a quick task done or looking to earn some extra income? We
            connect skilled professionals with people who need help — fast,
            easy, and stress-free, anytime, anywhere.
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
      <section className="bg-white px-4 w-[95%] mx-auto my-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          {/* Section Heading & Intro */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How <span className="text-yellow-500">HelpMe</span> Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              HelpMe simplifies the process of finding and offering part-time
              work. <br className="hidden md:block" />
              Here's how you can{" "}
              <span className="text-yellow-600 font-semibold">get started</span>
              :
            </p>
            <div className="w-16 h-1 bg-yellow-400 mt-6 mx-auto rounded" />
          </div>

          {/* Work Cards */}
          <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-8">
            <WorkCard
              icon={Briefcase}
              title={"For Workers"}
              l1={"Create a profile highlighting your skills and availability."}
              l2={
                "Find tasks and apply for opportunities matching your expertise."
              }
              l3={"Receive secure payments upon task completion."}
            />
            <WorkCard
              icon={Users}
              title={"For Those Needing Help"}
              l1={"Describe your task needs, including details and budget."}
              l2={"Review worker profiles and select the best match."}
              l3={"Approve completed work and make secure payments."}
            />
            <WorkCard
              icon={Clock}
              title={"Get Started"}
              l1={"Sign up for free to explore opportunities or post tasks."}
              l2={
                "Our platform offers tools to securely manage tasks and payments."
              }
              l3={
                "Start connecting with skilled professionals or find work that fits your schedule."
              }
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        {" "}
        {/* Full width, content height */}
        <div className="w-[95%] max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
                Start <span className="text-yellow-500">Earning</span> on Your
                Terms
                <br />
                with <span className="text-yellow-500">Flexible Work</span>
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6" />
              <p className="text-gray-700 text-lg mb-8">
                Looking to earn extra income? Join{" "}
                <strong className="text-black">HelpMe</strong> and discover
                flexible, short-term tasks posted by real people near you. Work
                when it suits you and get paid securely after completing tasks.
              </p>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Find Flexible Work <FaArrowRightLong className="text-lg" />
              </button>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-4 md:w-1/2">
              {[
                { src: floor, alt: "Cleaning Tasks", label: "Cleaning Tasks" },
                { src: clothes, alt: "Laundry Help", label: "Laundry Help" },
                { src: dog, alt: "Pet Sitting", label: "Pet Sitting" },
                { src: car, alt: "Driving Help", label: "Driving Help" },
              ].map(({ src, alt, label }, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    index % 2 !== 0 ? "translate-y-6" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-xl object-cover h-36 w-full hover:scale-105 transition-transform duration-300"
                  />
                  <span className="mt-2 font-medium text-sm text-gray-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section className="py-12">
  <div className="w-[95%] max-w-7xl mx-auto">
    {/* Gray Box */}
    <div className="bg-gray-100 rounded-2xl shadow-md p-8 md:p-12">
      {/* Use flex-col-reverse to swap order on mobile */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Right Text Content (Appears first on mobile) */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Need Help? <span className="text-yellow-500">Post a Job</span>
            <br />
            and Get it Done <span className="text-yellow-500">Quickly</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mb-6" />
          <p className="text-gray-700 text-lg mb-8">
            Have a task or errand you need help with?{" "}
            <strong className="text-black">HelpMe</strong> connects you with
            trusted local workers ready to take on jobs — fast, reliable,
            and stress-free.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Post a Job Now <FaArrowRightLong className="text-lg" />
          </button>
        </div>

        {/* Left Image Grid (Appears second on mobile) */}
        <div className="grid grid-cols-2 gap-4 md:w-1/2">
          {[
            { src: floor, alt: "House Cleaning", label: "House Cleaning" },
            { src: clothes, alt: "Organizing Help", label: "Organizing Help" },
            { src: dog, alt: "Pet Walking", label: "Pet Walking" },
            { src: car, alt: "Delivery Help", label: "Delivery Help" },
          ].map(({ src, alt, label }, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index % 2 !== 0 ? "translate-y-6" : ""
              }`}
            >
              <img
                src={src}
                alt={alt}
                className="rounded-xl object-cover h-36 w-full hover:scale-105 transition-transform duration-300"
              />
              <span className="mt-2 font-medium text-sm text-gray-700">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
