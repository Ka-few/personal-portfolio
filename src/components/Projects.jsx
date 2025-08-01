import React from "react";

const projects = [
  {
    title: "Smart Goal Planner",
    link: "https://your-smart-goal-app.netlify.app",
    description:
      "A goal-tracking app for managing financial targets with progress tracking, deposits, and savings overview.",
  },
  {
    title: "Bull Semen Catalogue",
    link: "https://your-bull-app.netlify.app",
    description:
      "A digital platform to help farmers access bull breeding info and locate veterinary AI services.",
  },
  {
    title: "Mama Mboga Grocery App",
    link: "https://your-mama-mboga-app.netlify.app",
    description:
      "An online grocery shop with product listings, admin panel, and shopping cart functionality using React and JSON Server.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-600">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-white bg-pink-600 px-4 py-2 rounded hover:bg-pink-700 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
