// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext"; // ✅ Import JobProvider

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostJob from "./pages/PostJob";
import FindWork from "./pages/FindWork";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SignUp from "./pages/SignUp";
import CreateProfile from "./pages/CreateProfile";

const App = () => {
  return (
    <JobProvider> {/* ✅ Wrap inside JobProvider */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/find-work" element={<FindWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-profile" element={<CreateProfile/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </JobProvider>
  );
};

export default App;
