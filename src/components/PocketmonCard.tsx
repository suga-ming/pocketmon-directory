import React from "react";
import styled from "styled-components";

const PocketmonCard = () => {
  const Card = styled.img`
    width: 200px;
    height: 250px;
    background-color: pink;
    margin: 12px;
  `;
  return (
    <div>
      <Card></Card>
    </div>
  );
};

export default PocketmonCard;
