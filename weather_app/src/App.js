import React, { useState } from "react";
import styled from "styled-components";
import API from "./CONSTANTS";
import { useFetchWithWoeid } from "./services/api";
import HeaderItem from "./components/HeaderItem";
import Card from "./components/Card";
import { cities, transformData } from "./utils";

const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;

const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  padding: 40px 0;
  flex-wrap: wrap;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const App = () => {
  const [woeid, setWoeid] = useState(742676);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading } = useFetchWithWoeid(`${API}/location/`, woeid, {
    isLoading: true,
    data: null
  });
  const days = data && transformData(data);

  return (
    <Container>
      <Header>
        {cities.map((city, currentIndex) => (
          <HeaderItem
            key={city.woeid}
            cityName={city.name}
            isSelected={selectedIndex === currentIndex}
            onClick={() => {
              setWoeid(city.woeid);
              setSelectedIndex(currentIndex);
            }}
          />
        ))}
      </Header>
      {isLoading ? (
        "loading"
      ) : (
        <Body>
          {days &&
            days.map(day => (
              <Card
                key={day.id}
                weekDay={day.name}
                icon={day.icon}
                currentTemp={day.currentTemp}
                minTemp={day.minTemp}
                maxTemp={day.maxTemp}
                windSpeed={day.windSpeed}
                windDir={day.windDir}
              />
            ))}
        </Body>
      )}
    </Container>
  );
};
export default App;
