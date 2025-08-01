import React from "react";

const skills = [
  "JavaScript (JS)",
  "React",
  "Tailwind CSS",
  "JSON Server",
  "Git & GitHub",
  "Node.js (basic)",
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-10">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-pink-100 text-pink-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-pink-200 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
