import React from 'react';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <AnnouncementBar />
      <Navbar />
      <div className="pt-32"> {/* Increased padding for Navbar + AnnouncementBar */}
        <Outlet />
      </div>
      {/* Footer will go here */}
    </div>
  );
};

export default Layout;
