'use client';
import Image from 'next/image';

const CarCard = ({ car }) => {
  const { make, model, fuel_type, year, drive, transmission } = car;

  return (
    <div className="p-2 w-[25rem] flex flex-col mx-auto border">
      <Image
        src="/bg4.jpg"
        width={400}
        height={400}
        alt={`car`}
        className="object-contain rounded-lg"
      />
      <div className="flex flex-col text-center mt-5 gap-y-2">
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
        <div className="flex items-center justify-between">
          <span>Drive</span>
          <span>{drive}</span>
        </div>
        <button className="p-2 bg-slate-950 rounded-full text-white mt-2 shadow-md hover:bg-slate-800 transition-colors">
          More Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;
