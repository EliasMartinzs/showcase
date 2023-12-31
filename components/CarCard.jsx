'use client';
import { useState } from 'react';
import { getCarImage } from '@/utils';
import Image from 'next/image';
import CarDetails from './CarDetails';

const CarCard = ({ carProps }) => {
  const { make, model, fuel_type, year, drive, transmission } = carProps;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-3 mt-auto border">
      <Image
        src={getCarImage()}
        width={400}
        height={400}
        alt={`car`}
        className="object-contain rounded-lg"
      />
      <div className="flex flex-col text-center gap-y-2 capitalize">
        <div className="flex items-center justify-between border-b">
          <span>{make}</span>
          <span>{model}</span>
        </div>
        <div className="flex items-center justify-between border-b">
          <span>Fuel Type</span>
          <span>{fuel_type}</span>
        </div>
        <div className="flex items-center justify-between border-b">
          <span>Year</span>
          <span>{year}</span>
        </div>
        <div className="flex items-center justify-between border-b">
          <span>Drive</span>
          <span>{drive}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Transmission</span>
          <span>{transmission === 'a' ? 'Automatic' : 'Manual'}</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-slate-950 rounded-full text-white mt-2 shadow-md hover:bg-slate-800 transition-colors"
        >
          More Details
        </button>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={carProps}
      />
    </div>
  );
};

export default CarCard;
