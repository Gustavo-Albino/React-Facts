// Componente Title utilizado em Main

import React from "react";
import styled from "styled-components";


// Estilos
const StyledH1 = styled.h1`
    font-weight: 700;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 48px;
`;

// Componente
function Title() {
    return (
        <StyledH1>Fun facts about React</StyledH1>
    );
}

export default Title;