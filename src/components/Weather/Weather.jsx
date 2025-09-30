import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  // const [lastCity, setLastCity] = useState("");
  const apiKey = "6189d24b215355e8372f5e7d4bc4f5ea";

  const getWeather = async (searchCity = city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: { q: searchCity, appid: apiKey, units: "metric" },
        }
      );
      setWeather(res.data);
      setError("");
      // setLastCity(searchCity)
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found ❌");
      } else {
        setError("Error fetching weather data!");
      }
      setWeather(null);
    }
  };
  useEffect(() => {
    getWeather("cairo");
  }, []);

  const handleInput = (e) => {
    const value = e.target.value
    setCity(value)
    
    if(value.trim() !== "") {
      getWeather(value)
    }
    // else if (lastCity){
    //   // getWeather(lastCity)
    // }
  }
  // const handleSearch = () => {
  //   if (city.trim() !== "") {
  //     getWeather(city);
  //   } else if (lastCity) {
  //     getWeather(lastCity);
  //   }
  // };
  return (
    <>
      <div className="flex justify-center items-center gap-3 m-5 mt-20 mb-20 ">
        <input
          type="text"
          value={city}
          onInput={handleInput}
          // onChange={(e) => setCity(e.target.value)}
          placeholder="search"
          className="bg-[#1E202B] text-gray-50 p-2 rounded-2xl w-3xl"
        />
        <button
          onClick={() => getWeather(city)}
          className="bg-[#009AD8] text-gray-50 p-2 rounded-2xl w-32 cursor-pointer"
        >
          search
        </button>
      </div>
      <div className="w-96 mx-auto mt-0 flex flex-col bg-[#323544] text-gray-50 rounded-xl m-5">
        <h2 className="bg-[#2D303D] w-96  text-gray-50 p-2 rounded-xl font-semibold">
          {new Date().toLocaleDateString("en-us", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </h2>
        {error && <p className="text-red-500 h-96 flex justify-center items-center">{error}</p>}
        {weather && (
          <div className="p-3.5">
            <h2 className="text-xl text-gray-300">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-7xl font-bold p-7 text-center">
              {weather.main.temp} °C
            </p>
            <p className="text-gray-300">
              Feels like {weather.main.feels_like}°
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className=""
            />
            <p className="capitalize text-[#009AD8] pb-5">
              {weather.weather[0].description}
            </p>
            <p className="text-gray-300">Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </>
  );
}
