const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=fdd237114a0941c096a185607241305";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  const data = await response.json();
  return data;
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}`);
  const data = await response.json();
  return data;
};

