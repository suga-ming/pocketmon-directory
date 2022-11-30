import React from "react";
import styled from "styled-components";

const PocketmonCard = () => {
  const CardArea = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <div>
      <CardArea>
        <PocketmonCard />
      </CardArea>
    </div>
  );
};

export default PocketmonCard;
