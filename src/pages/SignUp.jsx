import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const toggleMode = () => setIsSignIn(!isSignIn);

  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-25 pb-10 -mb-10">
      {/* Auth Container */}
      <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-xl flex flex-col-reverse md:flex-row overflow-hidden transition-all duration-500">
        {/* Form Section (70%) */}
        <div className="w-full md:w-[70%] p-10 flex flex-col justify-center items-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              {isSignIn ? "Login to Your Account" : "Create Your Account"}
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              {isSignIn
                ? "Login using social networks"
                : "Sign up using your email"}
            </p>

            {/* Social Login */}
            {isSignIn && (
              <div className="flex gap-4 mb-6 justify-center">
                <button className="bg-blue-600 text-white w-10 h-10 rounded-full font-bold">
                  f
                </button>
                <button className="bg-red-500 text-white w-10 h-10 rounded-full font-bold">
                  G+
                </button>
                <button className="bg-gray-700 text-white w-10 h-10 rounded-full font-bold">
                  in
                </button>
              </div>
            )}

            {/* Divider */}
            <div className="flex items-center mb-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Here you can add your login/signup logic
                if (!isSignIn) {
                  // If user just signed up
                  navigate("/create-profile"); // redirect to create-profile
                } else {
                  navigate("/"); // redirect to home/dashboard
                }
              }}
              className="space-y-4"
            >
              {!isSignIn && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>

        {/* Promo Panel (30%) */}
        <div
          className={`w-full md:w-[30%] flex flex-col justify-center items-center text-center px-6 py-12 text-white transition-all duration-500 ${
            isSignIn
              ? "bg-gradient-to-br from-teal-400 to-green-500"
              : "bg-gradient-to-br from-yellow-400 to-yellow-600"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">
            {isSignIn ? "New Here?" : "Welcome Back!"}
          </h2>
          <p className="mb-6 max-w-sm text-lg">
            {isSignIn
              ? "Sign up and discover a great amount of new opportunities!"
              : "To keep connected with us, please login with your credentials."}
          </p>
          <button
            onClick={toggleMode}
            className="bg-white text-gray-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>

      <section className="mt-16 bg-yellow-50 py-10 px-6 rounded-xl shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Why <span className="text-yellow-500">Join HelpMe</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Flexible Work Hours",
              desc: "Choose when and how much you work — total freedom!",
            },
            {
              title: "Verified Payments",
              desc: "Secure and timely payments for every job you do.",
            },
            {
              title: "Trusted Community",
              desc: "Connect with real people, backed by reviews & ratings.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-yellow-500 font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10 bg-white rounded-xl shadow px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Get the <span className="text-yellow-500">HelpMe</span> App
        </h2>
        <p className="text-gray-600 mb-6">
          Work or get help anytime, from anywhere.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Download for Android
          </button>
          <button className="bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            Download for iOS
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuthPage;
