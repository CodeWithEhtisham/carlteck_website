import React from 'react';

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-black text-white flex items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ zIndex: 2 }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-red-600 text-white text-2xl p-2 rounded-full cursor-pointer"
      >
        &times;
      </button>
      <div className="flex flex-col items-center">
        <ul className="space-y-4 text-xl">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
