"use client";

import {
    FiPhone,
    FiMail,
    FiTwitter,
    FiInstagram,
    FiGithub,
    FiLinkedin,
  } from "react-icons/fi";
  
  function FooterMenu() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-gray-100">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <a
            href="tel:+819012345678"
            className="flex flex-col items-center justify-center m-2 p-4 md:m-2 md:p-4 bg-white rounded-lg shadow hover:bg-blue-100"
          >
            <FiPhone className="text-2xl mb-1 text-blue-600" />
            <span className="text-xs">Call</span>
          </a>
          <a
            href="mailto:shoko@example.com"
            className="flex flex-col items-center justify-center m-2 p-4 md:m-2 md:p-4 bg-white rounded-lg shadow hover:bg-blue-100"
          >
            <FiMail className="text-2xl mb-1 text-red-600" />
            <span className="text-xs">Email</span>
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center m-2 p-4 md:m-2 md:p-4 bg-white rounded-lg shadow hover:bg-blue-100"
          >
            <FiTwitter className="text-2xl mb-1 text-blue-400" />
            <span className="text-xs">Twitter</span>
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center m-2 mt-0 p-4 md:m-2 md:p-4 bg-white rounded-lg shadow hover:bg-pink-200"
          >
            <FiInstagram className="text-2xl mb-1 text-pink-500" />
            <span className="text-xs">Instagram</span>
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center m-2 mt-0 p-4 md:m-2 md:p-4 bg-white rounded-lg shadow hover:bg-gray-200"
          >
            <FiGithub className="text-2xl mb-1" />
            <span className="text-xs">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center m-2 mt-0 p-4 md:m-2 md:p-4 bg-white rounded-lg shadow hover:bg-blue-200"
          >
            <FiLinkedin className="text-2xl mb-1 text-blue-700" />
            <span className="text-xs">LinkedIn</span>
          </a>
        </div>
      </footer>
    );
  }
  
  export default FooterMenu;
  