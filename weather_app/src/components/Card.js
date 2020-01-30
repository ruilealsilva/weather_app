import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 20px;
`;

const Title = styled.h1``;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const BlocksContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const Block = styled.div`
  width: 50%;
`;

const Img = styled.img`
  width: 100px;
`;

const Label = styled.p`
  font-weight: 700;
`;

const Sub = styled.p`
  font-size: 2rem;
`;

const Value = styled.p``;

const Card = ({
  weekDay,
  icon,
  currentTemp,
  minTemp,
  maxTemp,
  windSpeed,
  windDir
}) => (
  <Container>
    <Title>{weekDay}</Title>
    <Img
      src={`https://www.metaweather.com/static/img/weather/${icon}.svg`}
      alt={icon}
    />
    <Sub>{currentTemp}</Sub>
    <BottomWrapper>
      <BlocksContainer>
        <Block>
          <Label>Min</Label>
          <Value>{minTemp}</Value>
        </Block>
        <Block>
          <Label>Max</Label>
          <Value>{maxTemp}</Value>
        </Block>
      </BlocksContainer>
      <BlocksContainer>
        <Block>
          <Label>Wind Speed</Label>
          <Value>{windSpeed}</Value>
        </Block>
        <Block>
          <Label>Wind Dir</Label>
          <Value>{windDir}</Value>
        </Block>
      </BlocksContainer>
    </BottomWrapper>
  </Container>
);

export default Card;
