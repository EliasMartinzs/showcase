'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { manufacturers } from '@/constants';
import { Combobox } from '@headlessui/react';

import Image from 'next/image';

export default function Filters() {
  const [query, setQuery] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

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

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar ');
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());

    setManufacturer('');
    setModel('');
  };

  const updateSearchParams = (model, manufacturer) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div className="w-full p-10">
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
            onChange={e => setModel(e.target.value.toLowerCase())}
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
