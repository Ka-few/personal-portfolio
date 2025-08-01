import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">
          I'm currently open to freelance or full-time opportunities. Feel free
          to reach out!
        </p>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-8 text-gray-600">
          Or email me directly at:{" "}
          <a
            href="mailto:njorovista@gmail.com"
            className="text-pink-600 hover:underline"
          >
            njorovista@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
