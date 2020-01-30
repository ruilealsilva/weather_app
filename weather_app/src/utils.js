import moment from "moment";

export const cities = [
  { id: 1, woeid: 742676, name: "Lisbon" },
  { id: 2, woeid: 766273, name: "Madrid" },
  { id: 3, woeid: 615702, name: "Paris" },
  { id: 4, woeid: 44418, name: "London" },
  { id: 5, woeid: 638242, name: "Berlin" }
];

export const transformData = ({ data }) => {
  const { consolidated_weather } = data;
  return consolidated_weather.map(day => ({
    id: day.id,
    name: moment(day.applicable_date).format("dddd"),
    icon: day.weather_state_abbr,
    currentTemp: Math.round(day.the_temp) + "º",
    minTemp: Math.round(day.min_temp) + "º",
    maxTemp: Math.round(day.max_temp) + "º",
    windSpeed: Math.round(day.wind_speed),
    windDir: day.wind_direction_compass
  }));
};
