'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function AuthButton() {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span>Welcome, {user.name}!</span>
        <Link
          href="/api/auth/logout"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </Link>
      </div>
    );
  }

  return (
    <Link
      href="/api/auth/login"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Login
    </Link>
  );
} 