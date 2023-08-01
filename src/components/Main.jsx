// Componente utilizado em App.js

import React from "react";
import styled from "styled-components";

// Componentes filhos
import Title from "./Title";
import Nav from "./Nav";
import List from "./List";

// Estilos
const StyledDiv = styled.div`
    width: 60vw;
    height: 80vh;
    background-color: #272D34;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) and (max-width: 1023px) {
        border-radius: 0;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }
`

// Componente
function Main() {
    return (
        <StyledDiv>
            <Nav></Nav>
            <Title></Title>
            <List></List>
        </StyledDiv>
    )
}

export default Main;