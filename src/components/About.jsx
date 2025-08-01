import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="/profile.jpg"
            alt="Francis Njoroge"
            className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">About Me</h2>
          <p className="text-lg">
            Hi, I’m <strong>Francis Njoroge</strong> — a software developer
            passionate about building meaningful, user-focused digital
            experiences. From frontend apps to backend logic, I enjoy solving
            real-world problems with code.
          </p>
          <p className="mt-4">
            I’m currently working with JavaScript, React, JSON Server, and
            Tailwind CSS. I love working on projects that empower people and
            businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
