import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 mt-10 relative z-10 p-4">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

      <div className="w-[95%] max-w-7xl mx-auto flex items-start justify-center gap-10 flex-wrap">

        {/* HelpMe Brand */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">HelpMe</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Whether you're hiring help or offering it, HelpMe brings people together to get things done — safely and easily.
          </p>
        </div>

        {/* Explore */}
        <div className="flex-1 min-w-[160px] md:ml-15 lg:ml-20">
          <h4 className="text-lg font-semibold text-white mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Browse Services</a></li>
            <li><a href="#" className="hover:text-yellow-400">Become a Worker</a></li>
            <li><a href="#" className="hover:text-yellow-400">Post a Task</a></li>
            <li><a href="#" className="hover:text-yellow-400">Get the App</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">FAQs</a></li>
            <li><a href="#" className="hover:text-yellow-400">How it Works</a></li>
            <li><a href="#" className="hover:text-yellow-400">Safety Guidelines</a></li>
            <li><a href="#" className="hover:text-yellow-400">Support</a></li>
          </ul>
        </div>

        {/* Social / Connect */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
          <p className="text-sm text-gray-400 mb-4">
            Follow us for updates and opportunities.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 hover:bg-yellow-500 text-white p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-yellow-500 text-white p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-yellow-500 text-white p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-yellow-500 text-white p-2 rounded-full">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} HelpMe. Built with ❤️ in India.
      </div>
    </footer>
  );
};

export default Footer;
