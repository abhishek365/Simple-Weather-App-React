import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import "./App.css";
import { useWeather } from "./context";
import { useEffect, useRef } from "react";
function App() {
  const { data, setCity, fetchData, fetchCurrentLocation, setData } =
    useWeather();
  useEffect(() => {
    // Get current location here
    fetchCurrentLocation();
  }, []);

  const inputRef = useRef();
  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <Input
        value="Search"
        onChange={(e) => setCity(e.target.value)}
        inputRef={inputRef}
      />
      <Button
        value="Search"
        onClick={() => {
          fetchData();
          inputRef.current.value = "";
        }}
      />
      {data && (
        <>
          <Card />{" "}
          <Button value="Refresh" onClick={() => fetchCurrentLocation()} />
        </>
      )}
    </div>
  );
}

export default App;
