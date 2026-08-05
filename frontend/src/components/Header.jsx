import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";

export default function Header() {

  const [showSignUp, setShowSignUp] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            SmartAssist
          </h1>
        </div>


        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="/services"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Services
          </a>

          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </a>

          
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </nav>


        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button 
          onClick={() => setShowLogin(true)}
          className="hidden md:block text-gray-700 hover:text-blue-600">
              Login
          </button>
          <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
          

          <button 
          onClick={() => setShowSignUp(true)}
          className="hidden md:block text-gray-700 hover:text-blue-600">
            Sign Up
          </button>
          <SignUp isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
            

          

        </div>

      </div>
    </header>
  );
}

