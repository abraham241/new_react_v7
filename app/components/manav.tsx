import React from "react";
import { Link } from "react-router";

export default function manav() {
  return (
    <div>
      <nav className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
        {/* Logo */}
        <img src="/logo.png" alt="logo" className="h-12" />

        {/* Liens de navigation */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
