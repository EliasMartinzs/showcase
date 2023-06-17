'use client';

import { useState, Fragment } from 'react';

import { Combobox } from '@headlessui/react';
import { manufacturers } from '@/constants';

export default function Filters() {
  const [manufacturer, setManufacturer] = useState(manufacturers);
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturer
      : manufacturer.filter(manufac =>
          manufac
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <Combobox value={manufacturer} onChange={setManufacturer}>
      <Combobox.Input onChange={event => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredManufacturers.map(manufac => (
          <Combobox.Option key={manufac} value={manufac}>
            {manufac}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
