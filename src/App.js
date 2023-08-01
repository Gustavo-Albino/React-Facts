import React, { Component } from 'react';
import styled from "styled-components";

// Componentes
import Main from './components/Main';

// Estilos
const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Main />
      </AppDiv>
    );
  }
}

export default App;
