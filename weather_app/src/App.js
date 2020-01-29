import React from "react";
import CityButton from "./CityButton";
import DayCard from "./DayCard";

const cities = [
  { name: "Lisbon" },
  { name: "Madrid" },
  { name: "Paris" },
  { name: "London" },
  { name: "Berlin" }
];

const days = [
  {
    day: "Monday",
    icon: "an icon",
    currentTemp: 13,
    minTemp: 8,
    maxTemp: 18,
    windSpeed: 5,
    windDir: 5
  },
  {
    day: "Tuesday",
    icon: "an icon",
    currentTemp: 13,
    minTemp: 8,
    maxTemp: 18,
    windSpeed: 5,
    windDir: 5
  },
  {
    day: "Wednesday",
    icon: "an icon",
    currentTemp: 13,
    minTemp: 8,
    maxTemp: 18,
    windSpeed: 5,
    windDir: 5
  },
  {
    day: "Thursday",
    icon: "an icon",
    currentTemp: 13,
    minTemp: 8,
    maxTemp: 18,
    windSpeed: 5,
    windDir: 5
  },
  {
    day: "Friday",
    icon: "an icon",
    currentTemp: 13,
    minTemp: 8,
    maxTemp: 18,
    windSpeed: 5,
    windDir: 5
  }
];

const App = () => {
  return (
    <div>
      <div>
        {cities.map(city => (
          <CityButton cityName={city.name} />
        ))}
      </div>
      <div>
        {days.map(day => (
          <DayCard
            weekDay={day.day}
            icon={day.icon}
            currentTemp={day.currentTemp}
            minTemp={day.minTemp}
            maxTemp={day.maxTemp}
            windSpeed={day.windSpeed}
            windDir={day.windDir}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
