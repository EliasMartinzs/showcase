'use client';

import { useState, Fragment } from 'react';

import { Combobox } from '@headlessui/react';
import { manufacturers } from '@/constants';
import Image from 'next/image';

export default function Filters() {
  const [manufacturer, setManufacturer] = useState(manufacturers);
  const [query, setQuery] = useState('');
  const [model, setModel] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturer
      : manufacturer.filter(manufac =>
          manufac
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  const handleCar = e => {
    e.preventDefault();
    console.log(query, model);
  };

  return (
    <div className="w-full mt-10 mx-auto px-10">
      <h4 className="text-xl font-extralight py-2">
        Chose make and model of car.
      </h4>
      <div className="max-w-[12rem] flex">
        <Combobox
          value={manufacturer}
          onChange={setManufacturer}
          as="div"
          className="relative"
        >
          <Combobox.Input
            onChange={event => setQuery(event.target.value)}
            value={query}
            name="assignee"
            placeholder="Nissan"
            className="w-80"
          />

          <Combobox.Options>
            {filteredManufacturers.map(manufac => (
              <Combobox.Option key={manufac} value={manufac}>
                {({ active }) => (
                  <ul className="">
                    <li
                      className={`${
                        active
                          ? 'bg-slate-900 text-white'
                          : 'bg-white text-black'
                      }`}
                    >
                      {manufac}
                    </li>
                  </ul>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      <div className="flex"></div>
        <Combobox className="ml-5">
          <Combobox.Input
            placeholder="350z"
            onChange={e => setModel(e.target.value.toLowerCase())}
            name="model"
            value={model}
            className=""
          />
        </Combobox>
        <button type="submit" onClick={handleCar}>
          <Image src="/search.png" width={50} height={50} alt="search" />
        </button>
      </div>
    </div>
  );
}

{
}
