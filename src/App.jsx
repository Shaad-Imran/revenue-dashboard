import React from "react";
import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
};

const Container = styled.div`
  /* border: 2px solid blueviolet; */
  width: 100%;
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
