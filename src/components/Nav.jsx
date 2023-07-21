// Componente utilizado em Main

import React from "react";
import styled from "styled-components";

// Estilos
const NavBar = styled.nav`
    background-color: #21222A;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;

    h3 {
        font-size: 24px;
        color: white;
    }
`;

const ImageConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #61DAFB;
    
    img {
        width: 80px;
        margin: 0;
        padding: 0;
    }
    
    p {
        font-size: 30px;
        font-weight: 600;
        margin: 0 0 0 10px;
    }
`;

// Componente
function Nav() {
    return (
        <NavBar>
            <ImageConteiner>
                <img src={require("../assets/react-logo.png")} alt="React Logo" />
                <p translate="no">React Facts</p>
            </ImageConteiner>
            <h3>React Course - Project 1</h3>
        </NavBar>
    )
}

export default Nav;
