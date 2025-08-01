import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

<FaGithub className="text-2xl text-gray-700 hover:text-pink-600" />


function NavBar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-600">Francis Njoroge</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-pink-600">Home</a></li>
          <li><a href="#about" className="hover:text-pink-600">About</a></li>
          <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-pink-600">Skills</a></li>
          <li><a href="#experience" className="hover:text-pink-600">Experience</a></li>
          <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
