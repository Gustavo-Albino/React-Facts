// Componente Title utilizado em Main

import React from "react";
import styled from "styled-components";


// Estilos
const StyledH1 = styled.h1`
    font-weight: 700;
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 2.4rem;

    @media (max-width: 768px) {
        padding: 0.5rem;
        font-size: 2rem;
    }
`;

// Componente
function Title() {
    return (
        <StyledH1>Fun facts about React</StyledH1>
    );
}

export default Title;