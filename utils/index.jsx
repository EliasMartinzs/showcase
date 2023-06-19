export default async function fetchCars({ model }) {
  const headers = {
    'X-RapidAPI-Key': '0264115b1emsh1b3249af6606378p1eb643jsn4d6042d81d36',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?&model=${model}`,
    { headers: headers }
  );

  const results = await response.json();

  return results;
}
