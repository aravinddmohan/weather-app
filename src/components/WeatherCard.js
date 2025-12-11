export default function WeatherCard({ weather, aqi }) {
  if (!weather) return null;

  const icon = weather.weather[0].icon;
  const desc = weather.weather[0].description;
  const temp = Math.round(weather.main.temp);
  const feels = Math.round(weather.main.feels_like);
  const wind = weather.wind.speed;

  const aqiValue = aqi?.main?.aqi || 0;
  const aqiText = ["", "Good", "Fair", "Moderate", "Poor", "Very Poor"][aqiValue];
  const aqiColor =
    ["", "bg-green-400 text-black", "bg-lime-300 text-black",
      "bg-yellow-300 text-black", "bg-orange-400 text-black",
      "bg-red-500 text-white"][aqiValue];

  return (
    <div className="mt-4">

      {/* City */}
      <h2 className="text-2xl font-bold text-center">
        {weather.name}
      </h2>

      {/* Icon + TEMP */}
      <div className="flex justify-center items-center gap-3">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
        <span className="text-4xl font-semibold">
          {temp}°
        </span>
      </div>

      {/* Condition */}
      <p className="text-center capitalize opacity-80 text-sm mb-2">
        {desc} • Feels like {feels}°
      </p>

      {/* Aqi */}
      {aqi && (
        <div className={`text-sm px-3 py-1 rounded-full inline-block mb-3 ${aqiColor}`}>
          Air Quality: {aqiText}
        </div>
      )}

      {/* Dashboard GRID */}
      <div className="grid grid-cols-2 gap-3 text-sm">

        <div className="bg-white/20 rounded-lg p-2">
          🌡 Temp: {temp}°C
        </div>

        <div className="bg-white/20 rounded-lg p-2">
          💧 Humidity: {weather.main.humidity}%
        </div>

        <div className="bg-white/20 rounded-lg p-2">
          💨 Wind: {wind} m/s
        </div>
        <div className="bg-white/20 rounded-lg p-2">
         👀 Visibility: {weather.visibility / 1000} km
        </div>

        <div className="bg-white/20 rounded-lg p-2 col-span-2 capitalize">
          ☁️ Condition: {desc}
        </div>

      </div>
    </div>
  );
}