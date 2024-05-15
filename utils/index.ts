export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "4868390d32msh9defbb35c7e090ap1bf303jsn80d28f55896c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
