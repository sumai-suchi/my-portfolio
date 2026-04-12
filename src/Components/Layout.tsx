"use client";

import React from 'react';
import Navbar from './Navbar';
import ImmersiveFooter from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation stays at the top */}
      <Navbar />

      {/* Main content grows to fill available space */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer stays at the bottom */}
      <ImmersiveFooter />
    </div>
  );
};