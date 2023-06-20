import React from 'react';

import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { getCarImage } from '@/utils';

export default function CarDetails({ isOpen, closeModal, car }) {
  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={closeModal}
      className="relative z-10"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-slate-500 bg-opacity-25">
        <Dialog.Panel
          className="w-full max-w-sm rounded-xl bg-slate-300 p-10 z-50"
          onClick={closeModal}
        >
          <Image
            src={getCarImage()}
            width={400}
            height={400}
            className="object-contain"
          />

          <div className="flex flex-1 flex-col gap-2">
            <h2 className="font-semibold text-xl capitalize">
              {car.make} {car.model}
            </h2>
            <div className="mt-3 flex flex-wrap gap-4">
              {Object.entries(car).map(([key, value]) => (
                <div
                  className="flex justify-between gap-5 w-full text-right"
                  key={key}
                >
                  <h4 className="text-gray capitalize">
                    {key.split('_').join(' ')}
                  </h4>
                  <p className="text-black-100 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
