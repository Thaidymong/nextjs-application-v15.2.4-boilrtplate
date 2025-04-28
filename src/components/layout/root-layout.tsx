'use client';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header';

interface Props {
  children?: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
