import React from 'react';
import userImage from '../assets/LoginImage.svg'; // Adjust the path to your image

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between bg-white p-4">
      <h3 className="text-left font-cameraObscura font-bold text-[#6B8E23]">Annapurnaa</h3>
      <img
        src={userImage}
        alt="User"
        className="w-12 h-12 object-cover rounded-full"
      />
    </header>
  );
}
