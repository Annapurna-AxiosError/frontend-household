import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header";

export default function HeaderLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 w-full z-10">
        <Header />
      </header>
      <div className="flex-1 mt-16 fixed w-full">
        <Outlet />
      </div>
    </div>
  );
}
