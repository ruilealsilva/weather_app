import React from "react";

const DayCard = ({
  weekDay,
  icon,
  currentTemp,
  minTemp,
  maxTemp,
  windSpeed,
  windDir
}) => (
  <div>
    <p>{weekDay}</p>
    <p>{icon}</p>
    <p>{currentTemp}</p>
    <p>{minTemp}</p>
    <p>{maxTemp}</p>
    <p>{windSpeed}</p>
    <p>{windDir}</p>
  </div>
);

export default DayCard;
