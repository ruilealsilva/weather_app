import React from "react";
import styled from "styled-components";

const ListItem = styled.a`
  color: white;
  padding: 15px 30px;
  margin: 0px 15px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#ffa500" : "transparent"};
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
    padding: 15px;
  }
`;

const HeaderItem = ({ cityName, isSelected, onClick }) => (
  <ListItem isSelected={isSelected} onClick={onClick}>
    {cityName}
  </ListItem>
);

export default HeaderItem;
