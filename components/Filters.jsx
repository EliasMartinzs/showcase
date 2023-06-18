'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { manufacturers } from '@/constants';
import { Combobox } from '@headlessui/react';

import { setManufacturer, setModel } from '@/store/features/cars-slices';
import Image from 'next/image';
import { selectManufacturer } from '@/store/features/cars-selector';

export default function Filters() {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const manufacturer = useSelector(selectManufacturer);
  const handleManufacturer = dispatch(() => setManufacturer());
  const handleModel = dispatch(() => setModel());

  console.log(manufacturer);

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter(item =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  const handleCarModel = e => {
    e.preventDefault();
  };

  return (
    <div className="w-full py-10 px-5">
      <h3 className="text-xl font-extralight mb-5">
        Chose the cars with make and model!
      </h3>
      <form className="flex flex-col lg:flex-row gap-5">
        <Combobox
          value={manufacturer}
          onChange={handleManufacturer}
          as="div"
          className="relative"
        >
          <Combobox.Input
            onChange={e => setQuery(e.target.value)}
            displayValue={manufacturer => manufacturer}
            placeholder="Nissan"
            className="w-96 h-12 flex rounded-full outline-none hover:border-slate-950"
          />
          <Combobox.Options className="select-none">
            {filteredManufacturers.map(manufac => (
              <Combobox.Option key={manufac} value={manufac}>
                {({ active }) => (
                  <ul>
                    <li
                      className={`${active ? 'bg-slate-950 text-white' : null}`}
                    >
                      {manufac}
                    </li>
                  </ul>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        <Combobox className="flex" as="div">
          <Combobox.Input
            onChange={e => handleModel(e.target.value)}
            placeholder="350z"
            className="w-96 h-12 flex rounded-full outline-none hover:border-slate-950"
          />
          <button type="submit" onClick={handleCarModel} className="flex">
            <Image src="/search.png" width={50} height={50} alt="search" />
          </button>
        </Combobox>
      </form>
    </div>
  );
}
