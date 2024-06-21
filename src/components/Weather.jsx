//Weather.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          const { latitude, longitude } = position.coords;

          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ee11567202766ed1b15e51654dcbf58e`
          );
          setWeatherData(res.data);
        } catch (error) {
          if (error.code === error.PERMISSION_DENIED) {
            setError(
              "Permiso de geolocalización denegado. Por favor, habilítalo en la configuración del navegador."
            );
          } else {
            setError("Error al obtener la ubicación.");
          }
        } finally {
          setLoading(false);
        }
      } else {
        setError("Geolocalización no es soportada por este navegador.");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather">
      {loading ? (
        <p>Cargando el clima...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        weatherData && (
          <div>
            <p>
              {weatherData.name}: {weatherData.main.temp.toFixed(1)}ºC
            </p>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
