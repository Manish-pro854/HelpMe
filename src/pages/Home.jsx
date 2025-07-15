import React from "react";
import bg from "../assets/home-bg.webp";
import car from "../assets/car.webp";
import clothes from "../assets/clothes.webp";
import dog from "../assets/dog.webp";
import floor from "../assets/floor.webp";
import londiaa from "../assets/londia-1.jpg";
import londia from "../assets/londia-2.jpg";
import londa from "../assets/londa.jpg";
import { Briefcase, Users, Clock } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import WorkCard from "../Cards/WorkCard";
import Service from "../Sections/Service";
import FAQ from "../Sections/FAQ";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20 h-full w-full">

      <div className="relative w-[95%] h-[80vh] rounded-2xl overflow-hidden shadow-2xl mx-auto mt-4">
  {/* Background Image */}
  <img
    src={bg}
    alt="Home Background"
    className="w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold leading-snug animate-fade-in-up">
      Hire help in minutes or find work that fits your schedule.
    </h1>
    <p className="text-lg md:text-xl mt-4 max-w-3xl text-white/90 animate-fade-in-up delay-100">
      Need a quick task done or looking to earn some extra income? We connect skilled professionals with people who need help — fast, easy, and stress-free, anytime, anywhere.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col md:flex-row gap-4 animate-fade-in-up delay-200">
      <NavLink to="/find-work"><button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow hover:scale-105 cursor-pointer">
        Find Flexible Work
      </button></NavLink>
      <NavLink to="/post-job"><button className="bg-white hover:bg-gray-200 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow hover:scale-105 cursor-pointer">
        Get Instant Help
      </button></NavLink>
    </div>
  </div>
      </div>


      <section className="bg-white md:px-4 w-[95%] mx-auto my-10">
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

      <Service />

      <section className="bg-gray-100 py-8 md:mx-7 my-10 rounded-xl">
        <div className="w-[95%] max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content (Title + Desc + Button) */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-2">
                Start <span className="text-yellow-500">Earning</span> on Your
                Terms
                <br />
                with <span className="text-yellow-500">Flexible Work</span>
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6" />
              <p className="text-gray-700 text-lg mb-6">
                Looking to earn extra income? Join{" "}
                <strong className="text-black">HelpMe</strong> and discover
                flexible, short-term tasks posted by real people near you. Work
                when it suits you and get paid securely after completing tasks.
              </p>
              <NavLink to="/find-work"><button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                Find Flexible Work <FaArrowRightLong className="text-lg" />
              </button></NavLink>
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
                    className="rounded-xl object-cover h-40 md:h-48 lg:h-56 w-full hover:scale-105 transition-transform duration-300"
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

      <section className="bg-gray-100 py-8 md:mx-7 my-10 rounded-xl">
        <div className="w-[95%] max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 md:gap-14">
            {/* Images - Appears 2nd on small screens, 1st on large */}
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                { src: floor, alt: "House Cleaning", label: "House Cleaning" },
                {
                  src: clothes,
                  alt: "Organizing Help",
                  label: "Organizing Help",
                },
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
                    className="rounded-xl object-cover h-40 md:h-48 lg:h-56 w-full hover:scale-105 transition-transform duration-300"
                  />
                  <span className="mt-2 font-medium text-sm text-gray-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Content (Title + Desc + Button) - Appears 1st on mobile, 2nd on lg */}
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-2">
                Need Help? <span className="text-yellow-500">Post a Job</span>
                <br />
                and Get it Done <span className="text-yellow-500">Quickly</span>
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-4" />
              <p className="text-gray-700 text-lg mb-6">
                Have a task or errand you need help with?{" "}
                <strong className="text-black">HelpMe</strong> connects you with
                trusted local workers ready to take on jobs — fast, reliable,
                and stress-free.
              </p>
              <NavLink to="/post-job"><button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                Post a Job Now <FaArrowRightLong className="text-lg" />
              </button></NavLink>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="bg-white md:mx-7 my-10">
        <div className="w-[95%] max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What <span className="text-yellow-500">People Say</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Real feedback from users who found help or earned money through
            HelpMe.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                role: "Pet Owner",
                feedback:
                  "HelpMe made finding a pet sitter so easy. The process was quick and stress-free!",
                image: londiaa,
              },
              {
                name: "Ravi Mehta",
                role: "Part-time Cleaner",
                feedback:
                  "I found flexible cleaning work that fits my schedule. Highly recommend HelpMe!",
                image: londa,
              },
              {
                name: "Anjali Verma",
                role: "Busy Professional",
                feedback:
                  "From laundry to deliveries, HelpMe helps me get daily tasks done efficiently.",
                image: londia,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-left"
              >

                {/* Star Rating */}
                <div className="text-yellow-400 text-xl mb-2">★★★★★</div>

                {/* Feedback Text */}
                <p className="text-gray-700 italic mb-4">
                  {testimonial.feedback}
                </p>

                {/* User Info */}
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;