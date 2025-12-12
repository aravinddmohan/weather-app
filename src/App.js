import { useState } from "react";
import {getWeatherByCity} from "./services/weatherService";
import { fetchAQI } from "./services/weatherService";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Error from "./components/Error";
import { getForecast } from "./services/weatherService";
import { groupForecast } from "./utils/groupForecast";
import ForecastCard from "./components/ForecastCard";

function App(){
  const [city,setCity] = useState(null);
  const [weather,setWeather] = useState(null);
  const [error,setError] = useState("");
  const [aqi,setAqi]=useState(null);
  const [aiMessage, setAiMessage] = useState("");
  const [forecast, setForecast] = useState(null);


  async function getAIForecast(query) {
    try {
      const res = await fetch(`https://weather-app-d6jj.onrender.com/api/ai-forecast?q=${query}`);
      const data = await res.json();
      return data.reply;
    } catch (err) {
      console.error("AI Error:", err);
      return "Error Try later.";
    }
  }

  async function handleAskAI() {
    if (!city) return alert("Please Enter City!");

    const reply = await getAIForecast(city);
    setAiMessage(reply);
  }


  const handleSearch = async() => {
    try{
      setError("");
      const data = await getWeatherByCity(city);
      setWeather(data);

      const {lat,lon} = data.coord;
      const aqiData = await fetchAQI(lat,lon);
      setAqi(aqiData);

      const forecastData = await getForecast(city);
      const grouped =groupForecast(forecastData);
      setForecast(grouped);
    }
    catch(error){
      setWeather(null);
      setAqi(null);
      setError("city not found");
      setForecast(null);
    }
  };

  const getVideo=()=>{
    if(!weather) return "/videos/snow.mp4";
    const condition =weather.weather[0].main.toLowerCase();

    if (condition.includes("cloud")) return "/videos/clouds.mp4";
    if (condition.includes("clear sky") ||condition.includes("clear")) return "/videos/clear.mp4"
    if (condition.includes("rain") || condition.includes("drizzle")) return "/videos/rain.mp4";
    if (condition.includes("thunder") || condition.includes("storm")) return "/videos/storm.mp4";
    if (condition.includes("snow")) return "/videos/snow.mp4";
    if (condition.includes("haze") ||condition.includes("fog") ||condition.includes("smoke") ||condition.includes("dust") ||condition.includes("mist")) return "/videos/mist.mp4";
    return "/videos/snow.mp4";
};

  return (
  <div className="min-h-screen relative overflow-hidden">

    {/* BACKGROUND VIDEO */}
    <video
      autoPlay
      loop
      muted
      className="absolute w-full h-full object-cover"
      src={getVideo()}
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* APP CARD */}
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
      <div className="bg-white/25 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl w-full max-w-md text-center text-white border border-white/20 animate-fade-in">

        <h1 className="text-2xl font-bold mb-1">Weather ☁️</h1>
        <p className="text-sm opacity-80 mb-4">
          Mood-based weather
          
        </p>

        <SearchBox city={city} setCity={setCity} onSearch={handleSearch} />

        {error && <Error message={error} />}
        {weather && <WeatherCard weather={weather} aqi={aqi} />}
        {forecast && <ForecastCard data={forecast} />}
                  {weather && (
            <div className="mt-6">
              <button
                onClick={handleAskAI}
                className="bg-purple-700 hover:bg-purple-800 transition px-4 py-2 rounded-xl text-white shadow-md"
              >
                Ask AI
              </button>

              {/* AI Reply Box */}
              {aiMessage && (
                <p className="mt-4 bg-black/30 p-3 rounded-xl text-sm leading-relaxed">
                  {aiMessage}
                </p>
              )}
            </div>
          )}
    
      </div>
    </div>

  </div>
);

}
export default App;