import React from "react";
import team1 from "../assets/londia-1.jpg";
import team2 from "../assets/londa.jpg";
import team3 from "../assets/londia-2.jpg"; // Replace with your actual images

const Team = () => {
  const members = [
    { name: "Rishikesh S R", role: "Founder", image: team1 },
    { name: "Pavan Guntupalli", role: "Founder", image: team2 },
    { name: "Aravind Sanka", role: "Founder", image: team3 },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden w-[95%] mx-auto">
      {/* Yellow Circle Shape on Left */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-100 rounded-full -z-10 -translate-x-1/2 -translate-y-1/2 md:block hidden"></div>

      <div className="max-w-7xl mx-auto px-4 md:flex md:items-center md:justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Champions of our <span className="text-yellow-500">success story</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            HelpMe has grown from a simple idea to a thriving platform trusted by thousands. 
            With hard work, creativity, and belief in community-driven help, 
            our team has built a space where people can earn, connect, and get support — every day.
          </p>
        </div>

        {/* Team Members */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-xl border-4 border-yellow-300"
                />
              </div>
              <h4 className="font-semibold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
