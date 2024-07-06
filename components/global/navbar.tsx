"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-blue-600 text-2xl font-bold">
              Accredian
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 px-3 py-2"
            >
              Log In
            </Link>
            <Link
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-md ml-3"
            >
              Join for Free
            </Link>
          </div>
          <div className="sm:hidden flex items-center">
            <div
              className="space-y-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/login"
              className="block text-gray-600 hover:text-gray-900 px-3 py-2"
            >
              Log In
            </Link>
            <Link
              href="/join"
              className="block bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Join for Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
