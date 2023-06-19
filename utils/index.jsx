export default async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '488fbc12c0msh86d32a72473524dp117130jsnd5dc39ebcc7f',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?&model=corolla',
    { headers: headers }
  );

  const results = await response.json();

  return results;
}
