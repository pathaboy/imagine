import Link from "next/link";
import React from "react";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="border-t text-white py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 sm:place-items-center gap-8">
        {/* About Section */}
        <div>
          <div className="w-[150%]">
            <Logo />
          </div>
          <p className="text-gray-400 mt-4">
            Your friendly editor brings your ideas to life with amazing videos.
            No complicated processes, just simple steps to get stunning videos
            made fast.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#pricing" className="hover:text-blue-400">
                Pricing
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">Feel free to reach out to us anytime!</p>
          <p className="mt-2">
            <Link href="/contact" className="text-blue-400 hover:underline">
              Visit our Contact Page
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} TextVideoGenerator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
