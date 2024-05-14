import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../src/api";

export const weatherContext = createContext();

export const useWeather = () => useContext(weatherContext);

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataForCity(city);
    setData(response);
  };

  const fetchCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <weatherContext.Provider
      value={{ data, city, setCity, fetchData, fetchCurrentLocation }}
    >
      {children}
    </weatherContext.Provider>
  );
};
