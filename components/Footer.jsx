import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="w-full bg-[#121522] h-60">
      <div className="flex items-start justify-around text-start w-full p-10 gap-5 text-2xl text-white">
        <div className="flex flex-col">
          <Link
            href="https://rapidapi.com/apininjas/api/cars-by-api-ninjas?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel"
            target="_blank"
          >
            Data base Api Car
          </Link>
          <Link href="https://www.imagin.studio/" target="_blank">
            Data base Api Car Images
          </Link>
          <Link href="https://headlessui.com/" target="_blank">
            Headless Ui
          </Link>
        </div>
        <div className="flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/">Explore Cars</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <small className="font-extralight text-white">
          Copyright By Elias Martins 2023 - {year}
        </small>
      </div>
    </footer>
  );
}
