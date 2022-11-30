import React from "react";
import styled from "styled-components";
import PocketmonCardList from "../components/PocketmonCardList";

const Home = () => {
  const Container = styled.div`
    max-width: 780px;
    margin: 0 auto;
  `;
  return (
    <div>
      <Container>
        <PocketmonCardList />
      </Container>
    </div>
  );
};

export default Home;
