import React from "react";

const WorkCard = ({icon:Icon,title,l1,l2,l3}) => {
  return (
    <div
      className="w-80 min-h-[350px] bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out group flex flex-col"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4 transition-colors duration-300 group-hover:bg-amber-200">
        <Icon className="w-6 h-6 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
        {title}
      </h3>

      {/* Description List */}
      <ul className="text-gray-700 space-y-2 text-sm leading-relaxed flex-grow">
        <li>✅ {l1}</li>
        <li>✅ {l2}</li>
        <li>✅ {l3}</li>
      </ul>
    </div>
  );
};

export default WorkCard;
