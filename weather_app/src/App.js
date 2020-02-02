import React, { useState } from "react";
import styled from "styled-components";
import API from "./CONSTANTS";
import { useApi } from "./services/api";
import HeaderItem from "./components/HeaderItem";
import Card from "./components/Card";
import { transformData } from "./utils";

const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  background-color: #192841;
  display: flex;
  justify-content: center;
  padding: 40px 10px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    background-color: #192841;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const LoadingText = styled.h1`
  text-align: center;
`;

const cities = [
  { id: 1, woeid: 742676, name: "Lisbon" },
  { id: 2, woeid: 766273, name: "Madrid" },
  { id: 3, woeid: 615702, name: "Paris" },
  { id: 4, woeid: 44418, name: "London" },
  { id: 5, woeid: 638242, name: "Berlin" }
];

const App = () => {
  const [woeid, setWoeid] = useState(742676);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading } = useApi(`${API}/location/${woeid}`, {
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
      <Body>
        {isLoading ? (
          <LoadingText>Loading. Please Wait...</LoadingText>
        ) : (
          days.map(day => (
            <Card
              key={day.id}
              weekDay={day.name}
              iconName={day.iconName}
              currentTemp={day.currentTemp}
              minTemp={day.minTemp}
              maxTemp={day.maxTemp}
              windSpeed={day.windSpeed}
              windDir={day.windDir}
            />
          ))
        )}
      </Body>
    </Container>
  );
};
export default App;
