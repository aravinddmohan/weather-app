export function groupForecast(rawData) {
  // rawData.list contains 40 entries spaced 3 hours apart
  const groups = {};

  rawData.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0]; // e.g. "2025-12-11"

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(item);
  });

  // Now convert grouped data → summary for each day
  const summary = Object.keys(groups).map(date => {
    const entries = groups[date];

    // Average temperature
    const avgTemp =
      entries.reduce((sum, item) => sum + item.main.temp, 0) /
      entries.length;

    // Most common weather condition
    const conditionCounts = {};
    let mostCommon = "";
    let maxCount = 0;

    entries.forEach(item => {
      const cond = item.weather[0].main;
      conditionCounts[cond] = (conditionCounts[cond] || 0) + 1;

      if (conditionCounts[cond] > maxCount) {
        maxCount = conditionCounts[cond];
        mostCommon = cond;
      }
    });

    // Icon (just take the first entry's icon)
    const icon = entries[0].weather[0].icon;

    return {
      date,
      temp: Math.round(avgTemp),
      condition: mostCommon,
      icon,
    };
  });

  // Return only 5 days
  return summary.slice(0, 5);
}
