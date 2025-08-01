import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-pink-50 to-white px-4"
    >
      <img
        src="/m.jpg"
        alt="Francis Njoroge"
        className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg mb-6 object-cover"
      />
      <h1 className="text-4xl font-bold text-gray-800">Francis Njoroge</h1>
      <div className="flex space-x-4 mt-4">
  <a href="https://github.com/Ka-few" target="_blank" rel="noreferrer">
    <FaGithub className="text-2xl text-gray-700 hover:text-pink-600" />
  </a>
  <a href="https://www.linkedin.com/in/francis-njoroge-31698181/" target="_blank" rel="noreferrer">
    <FaLinkedin className="text-2xl text-gray-700 hover:text-pink-600" />
  </a>
</div>

      <p className="mt-2 text-xl text-gray-600">
        Turning ideas into web experiences
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block px-6 py-3 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}

export default Home;
