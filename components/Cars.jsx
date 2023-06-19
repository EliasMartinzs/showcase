import fetchCars from '@/utils';
import CarCard from './CarCard';

export default async function Cars({ searchParams }) {
  const allCars = await fetchCars({
    model: 'carrera',
  });

  console.log(searchParams);

  return (
    <div className="px-10 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:grid grid-cols-3 gap-5">
        {allCars && allCars.map(car => <CarCard key={car.id} carProps={car} />)}
      </div>
    </div>
  );
}
