
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function HeaderLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
