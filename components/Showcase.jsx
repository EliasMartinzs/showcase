'use client';

import Image from 'next/image';
import React from 'react';

export default function Showcase() {
  return (
    <section className="bg-[#192435] py-20">
      <div className="w-full flex flex-col lg:flex-row flex-1 justify-between items-center mx-auto px-14 gap-y-10">
        <div className="flex items-center justify-center">
          <h3 className="text-white text-2xl lg:text-5xl font-extralight capitalize">
            the best car <span className="text-red-600 font-medium">demos</span>
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="card__skew">
            <Image
              src="/bg2.jpg"
              fill
              className="object-cover bg-center"
              alt="cars"
            />
          </div>
          <div className="card__skew">
            <Image
              src="/bg5.jpg"
              fill
              className="object-cover bg-center"
              alt="cars"
            />
          </div>
          <div className="card__skew">
            <Image
              src="/bg6.jpg"
              fill
              className="object-cover bg-center"
              alt="cars"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
