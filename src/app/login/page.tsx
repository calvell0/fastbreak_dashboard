'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d1160] to-[#00788c]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1d1160] mb-2">Hornets Stats Dashboard</h1>
          <p className="text-gray-600 text-center">Access player statistics and team analytics</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <Image
            src="/hornets-logo.png"
            alt="Charlotte Hornets Logo"
            width={150}
            height={150}
            className="opacity-90"
          />
        </div>

        <a
          href="/api/auth/login"
          className="w-full bg-[#00788c] text-white py-3 px-4 rounded-lg flex items-center justify-center font-semibold hover:bg-[#1d1160] transition-colors duration-300"
        >
          Sign In to Continue
        </a>
      </div>
    </div>
  );
} 