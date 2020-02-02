import moment from "moment";

export const transformData = ({ data }) => {
  const { consolidated_weather } = data;
  return consolidated_weather.map(day => ({
    id: day.id,
    name: moment(day.applicable_date).format("dddd"),
    iconName: day.weather_state_abbr,
    currentTemp: Math.round(day.the_temp) + "º",
    minTemp: Math.round(day.min_temp) + "º",
    maxTemp: Math.round(day.max_temp) + "º",
    windSpeed: Math.round(day.wind_speed),
    windDir: day.wind_direction_compass
  }));
};
