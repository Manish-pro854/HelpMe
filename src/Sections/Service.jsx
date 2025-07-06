import React from 'react';
import {
  FaBroom,
  FaTruck,
  FaBaby,
  FaLaptop,
  FaDog,
  FaTools,
  FaUtensils,
  FaShoppingCart,
} from 'react-icons/fa';

const services = [
  { icon: <FaBroom className="text-yellow-500 text-4xl" />, label: 'Cleaning' },
  { icon: <FaTruck className="text-yellow-500 text-4xl" />, label: 'Moving Help' },
  { icon: <FaBaby className="text-yellow-500 text-4xl" />, label: 'Babysitting' },
  { icon: <FaLaptop className="text-yellow-500 text-4xl" />, label: 'Tech Setup' },
  { icon: <FaDog className="text-yellow-500 text-4xl" />, label: 'Pet Sitting' },
  { icon: <FaTools className="text-yellow-500 text-4xl" />, label: 'Repairs' },
  { icon: <FaUtensils className="text-yellow-500 text-4xl" />, label: 'Cooking Help' },
  { icon: <FaShoppingCart className="text-yellow-500 text-4xl" />, label: 'Grocery Pickup' },
];

const Service = () => {
  return (
    <section className="bg-gray-100 py-12 my-10 rounded-lg">
      <div className="w-[95%] max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Popular <span className="text-yellow-500">Services</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded" />
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover the most requested categories to get started fast. Post your task or find work in just a few taps.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-transform duration-300 flex flex-col items-center justify-center hover:scale-105"
            >
              {service.icon}
              <p className="mt-3 font-medium text-gray-800 text-sm md:text-base">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
