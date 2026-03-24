import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-10 bottom-0 w-full bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        Created by <span className="font-semibold">Rohit Shah</span>
      </p>
      <a
        href="https://github.com/rohitshah316/React-Travel-Booking-App.git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline text-sm"
      >
        Click here for GitHub
      </a>
    </footer>
  );
};

export default Footer;