import { useState } from "react";
import {getWeatherByCity} from "./services/weatherService";
import { fetchAQI } from "./services/weatherService";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Error from "./components/Error";

function App(){
  const [city,setCity] = useState(null);
  const [weather,setWeather] = useState(null);
  const [error,setError] = useState("");
  const [aqi,setAqi]=useState(null);
  const [aiMessage, setAiMessage] = useState("");

  async function getAIForecast(query) {
    try {
      const res = await fetch(`http://localhost:5000/api/ai-forecast?q=${query}`);
      const data = await res.json();
      return data.reply;
    } catch (err) {
      console.error("AI Error:", err);
      return "Aiyo! Server pothinjirikkunu. Try again da.";
    }
  }

  async function handleAskAI() {
    if (!city) return alert("City kudu da tambi!");

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
    }
    catch(error){
      setWeather(null);
      setAqi(null);
      setError("city not found");
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