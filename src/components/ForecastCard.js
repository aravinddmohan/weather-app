export default function ForecastCard({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mt-6 bg-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/20 animate-fade-in">
      <h3 className="text-lg font-semibold mb-3 text-center">5-Day Forecast</h3>

      <div className="grid grid-cols-5 gap-2">
        {data.map((day, index) => {
          const dateObj = new Date(day.date);
          const weekday = dateObj.toLocaleDateString("en-US", { weekday: "short" });

          return (
            <div
              key={index}
              className="bg-white/30 p-2 rounded-xl text-center flex flex-col items-center"
            >
              <p className="font-semibold text-sm">{weekday}</p>

              <img
                src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                alt="day icon"
                className="w-10 h-10"
              />

              <p className="text-sm font-bold">{day.temp}°</p>

              <p className="text-xs opacity-80">{day.condition}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
