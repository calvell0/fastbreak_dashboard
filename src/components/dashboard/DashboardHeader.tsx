'use client';

import AuthButton from '../AuthButton';

export default function DashboardHeader() {
  return (
    <nav className="bg-[#1d1160] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hornets Stats Dashboard</h1>
        <AuthButton />
      </div>
    </nav>
  );
} 