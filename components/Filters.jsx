'use client';
import { useState } from 'react';

import { manufacturers } from '@/constants';
import { Combobox, Transition } from '@headlessui/react';

import Image from 'next/image';

export default function Filters({
  manufacturer,
  setManufacturer,
  model,
  setModel,
}) {
  const [query, setQuery] = useState('');

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
          onChange={setManufacturer}
          as="div"
          className="relative"
        >
          <Combobox.Input
            onChange={e => setQuery(e.target.value)}
            displayValue={manufacturer => manufacturer}
            placeholder="Nissan"
            className="w-full lg:w-96 h-12 rounded-full outline-none hover:border-slate-950"
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
        <Combobox>
          <Combobox.Input
            onChange={e => setModel(e.target.value)}
            placeholder="350z"
            className="lg:w-96 h-12 rounded-full outline-none hover:border-slate-950"
          />
        </Combobox>
        <button type="submit" onClick={handleCarModel}>
          <Image src="/search.png" width={50} height={50} alt="search" />
        </button>
      </form>
    </div>
  );
}
