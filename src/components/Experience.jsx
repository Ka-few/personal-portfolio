import React from "react";

const experiences = [
  {
    jobTitle: "Information Technology Sales Specialist",
    company: "Cherry Brokers",
    summary:
      "Provided technical support and IT consultation to clients. Facilitated sales of software and digital services, helping clients enhance their business operations through tech adoption.",
  },
  {
    jobTitle: "Freelance Web Developer",
    company: "Self-employed",
    summary:
      "Built and deployed custom web applications for small businesses and personal projects. Specialized in React and Tailwind CSS to deliver responsive and functional user interfaces.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-pink-600">
                {exp.jobTitle}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-2">
                {exp.company}
              </p>
              <p className="text-gray-700">{exp.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
