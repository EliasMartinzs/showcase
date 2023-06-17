import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className="h-24 w-full bg-[#192435] fixed top-0 z-50 px-10">
      <nav className="flex items-center justify-between px-5 w-full">
        <div className="flex items-center">
          <Image
            width={100}
            height={100}
            src="/logo.png"
            className="object-contain"
          />
          <Link
            href="/"
            className="text-white text-xl hover:border-b cursor-pointer"
          >
            Cars Showcase
          </Link>
        </div>
        <Link
          href="/"
          className="text-white text-xl hover:border-b cursor-pointer"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
