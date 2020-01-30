import React from "react";
import styled from "styled-components";

const ListItem = styled.a`
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 40px;
  margin: 0px 15px;
  background-color: ${({ isSelected }) => (isSelected ? "#ffa500" : "#192841")};
  font-weight: 700;
  font-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  point-events: @media (max-width: 768px) {
    margin: 0;
    border: 2px solid #fff;
    border-radius: 0;
    padding: 10px 5px;
  }
`;

const HeaderItem = ({ cityName, isSelected, onClick }) => (
  <ListItem isSelected={isSelected} onClick={onClick}>
    {cityName}
  </ListItem>
);

export default HeaderItem;
