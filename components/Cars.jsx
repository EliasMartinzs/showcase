'use client';
import fetchCars from '@/utils';
import CarCard from './CarCard';

import { useSearchParams } from 'next/navigation';

export default async function Cars({}) {
  const searchParams = useSearchParams();

  const allCars = await fetchCars({
    model: searchParams.get('model') || 'corolla',
    // manufacturer: searchParams.get('manufacturer') || '',
  });

  const newCars = [];
  newCars.push(allCars);

  return (
    <div className="px-10 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:grid grid-cols-3 gap-5">
        {newCars?.map(car => (
          <CarCard key={car.id} carProps={car} />
        ))}
      </div>
    </div>
  );
}
