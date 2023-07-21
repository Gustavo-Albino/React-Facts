// Componente utilizado em App.js

import React from "react";
import styled from "styled-components";

// Componentes filhos
import Title from "./Title";
import Nav from "./Nav";
import List from "./List";

// Estilos
const StyledDiv = styled.div`
    width: 800px;
    height: 800px;
    background-color: #272D34;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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