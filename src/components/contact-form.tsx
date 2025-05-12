import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen text-white px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">📬 Get in Touch</h1>
        <p className="text-gray-400 mb-8 text-center">
          Got a question, feedback, or just want to say hi? Drop a message below
          — we'd love to hear from you!
        </p>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
