'use client';
import fetchCars from '@/utils';
import CarCard from './CarCard';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

export default function Cars({}) {
  const [allCars, setAllCars] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCars({
        manufacturer: searchParams.get('manufacturer') || undefined,
        model: searchParams.get('model') || undefined,
      });
      setAllCars(data);
    };
    fetchData();
  }, [searchParams.get('model')]);

  return (
    <div className="px-10 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:grid grid-cols-3 gap-5">
        {allCars?.map(car => (
          <CarCard key={car.id} carProps={car} />
        ))}
      </div>
    </div>
  );
}
