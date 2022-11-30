import React from "react";
import styled from "styled-components";
import logo from "../assets/pngegg.png";

const Container = styled.div`
  padding: 20px;
  border-bottom: 1px solid black;
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <div>
      <Container>
        <img src={logo} width={180} />
      </Container>
    </div>
  );
};

export default Header;
