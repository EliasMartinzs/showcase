'use client';

import { useState } from 'react';

import Filters from '@/components/Filters';
import Showcase from '@/components/Showcase';
import { manufacturers } from '@/constants';

export default function Home() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  return (
    <main className="mt-24">
      <Showcase />
      <Filters
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        model={model}
        setModel={setModel}
      />
    </main>
  );
}
