import { useSearchParams } from 'next/navigation';

export default async function fetchCars({ model, manufacturer }) {
  const headers = {
    'X-RapidAPI-Key': '837a51db0fmsh4adb564de1bc50cp16563ejsnf42e6d450663',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=50&make=${manufacturer}&model=${model}`,
    { headers: headers }
  );

  const results = await response.json();

  return results;
}

export const getCarImage = () => {
  const search = useSearchParams();

  const model = search.get('model');
  const make = search.get('manufacturer');

  const key = 'brusar-api-para-estudo';

  // const key =
  //   'brestudante-para-se-torna-um-desenvolvedor-front-end-gostaria-de-usar-a-api-para-um-projeto-pois-sou-apaixonado-por-carro-e-esta-api-atende-mais-do-que-eu-preciso';
  const url = new URL('https://cdn.imagin.studio/getImage?');

  url.searchParams.append('customer', key);
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model);
  url.searchParams.append('zoomType', 'fullscreen');

  return `${url}`;
};
