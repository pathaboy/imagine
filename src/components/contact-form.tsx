"use client";
import React, { useState } from "react";
import { Loader } from "lucide-react";

const ContactForm = () => {
  const [emailStatus, setEmailStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setLoading(false);
    if (res.ok) {
      setEmailStatus("🎉 Message sent! ");
    }
  };

  return (
    <div className="min-h-screen text-white px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">📬 Get in Touch</h1>
        <p className="text-gray-400 mb-8 text-center">
          Got a question, feedback, or just want to say hi? Drop a message below
          — we'd love to hear from you!
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="name"
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
              name="email"
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
              name="message"
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
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-all"
            >
              {loading ? <Loader className="animate-spin" /> : "Send Message"}
            </button>
          </div>
          {emailStatus && (
            <p className="text-sm text-center text-gray-600">{emailStatus}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
