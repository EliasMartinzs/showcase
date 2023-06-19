'use client';
import fetchCars from '@/utils';
import CarCard from './CarCard';

import { useEffect } from 'react';

export default async function Cars() {
  useEffect(() => {
    const fetchCars = async function () {
      const allCars = await fetchCars({});
    };
    fetchCars();
  }, []);

  return (
    <div className="px-10">
      <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:grid grid-cols-3 space-y-14">
        {results && results.map(car => <CarCard key={car} car={car} />)}
      </div>
    </div>
  );
}
