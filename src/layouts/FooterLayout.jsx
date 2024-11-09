import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterNav from "../components/FooterNav";

export default function FooterLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 mb-16">
        <Outlet />
      </div>
      <FooterNav className="fixed bottom-0 w-full z-10" />
    </div>
  );
}
