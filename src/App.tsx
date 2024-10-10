import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { myTheme } from "./styles/Theme.styled";
import image from "./images/1.png";
import { Title } from "./components/Title.styled";
import { Button } from "./components/buttons.styled";

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <img src={image} alt="" />
          <Title>Headline</Title>
          <p>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </p>
          <div>
            <Button active>See more</Button>
            <Button>Save</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: ${myTheme.spacing.padding};
  background-color: ${myTheme.colors.light};
  border-radius: ${myTheme.styles.borderRadius};
  box-shadow: ${myTheme.styles.boxShadow};
  gap: ${myTheme.spacing.gap};

  p,
  ${Title}, div {
    margin-left: 10px;
    margin-right: 20px;
  }

  div {
    display: flex;
    gap: 12px;
  }
`;
