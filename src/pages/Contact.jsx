import React, { useState } from "react";
import contactImg from "../assets/contact.webp"; // Your contact image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-20 px-8" id="contact">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Get in <span className="text-yellow-500">Touch</span> with Us
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Have questions, feedback, or need assistance? We’re here to help. Send
          us a message and we’ll respond as quickly as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={contactImg}
            alt="Contact Us Illustration"
            className="rounded-xl shadow-lg object-cover w-full max-h-96 mx-auto"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md md:w-1/2 mx-auto w-full"
        >
          <div className="mb-6 text-left">
            <label
              htmlFor="name"
              className="block text-yellow-600 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your full name"
            />
          </div>
          <div className="mb-6 text-left">
            <label
              htmlFor="email"
              className="block text-yellow-600 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-6 text-left">
            <label
              htmlFor="message"
              className="block text-yellow-600 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full transition-colors duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Office Locations Section */}
      <div className="w-full max-w-6xl mx-auto mt-12 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          <span className="text-yellow-500">Our</span> Office Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Registered Office",
              company: "Roppen Transportation Services Pvt Ltd",
              address:
                "3rd Floor, Sai Prithvi Arcade, Megha Hills, Sri Rama Colony, Madhapur, Hyderabad – 500081.",
              extra: "CIN: U52210TG2015PTC097115",
            },
            {
              title: "City Office",
              company: "Roppen Transportation Services Pvt Ltd",
              address:
                "#148, 1st Floor, SLV Nilaya, 5th Main 80ft road, HSR Layout 7th Sector, Bangalore 560102.",
            },
            {
              title: "Corporate Office",
              company: "Mantri Commercio - Spatium Tower A",
              address:
                "Sy No 54/2, 54/3, 54/4, Doddakannelli, Varthur Hobli, Sarjapur Outer Ring Road, Bangalore 560035.",
            },
          ].map((office, idx) => (
            <div
              key={idx}
              className="bg-white border border-transparent hover:border-yellow-400 hover:shadow-lg rounded-xl p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {office.title}
              </h3>
              <p className="text-gray-700 mb-2 font-medium">{office.company}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {office.address}
              </p>
              {office.extra && (
                <p className="text-gray-500 text-xs mt-2">{office.extra}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
