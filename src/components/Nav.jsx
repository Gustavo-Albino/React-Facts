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
        font-size: 1.8rem;
        font-weight: 600;
        color: white;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        border-radius: 0;
        flex-direction: column;

        h3 {
            font-size: 1.4rem;
        }
      }
      

    @media (max-width: 768px) {
        border-radius: 0;
        flex-direction: column;

        h3 {
            font-size: 1rem;
        }
    }
`;

const ImageConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #61DAFB;
    
    img {
        width: 3rem;
        margin: 0;
        padding: 0;
    }
    
    p {
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0 0 0 10px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        margin: 1rem 0 0 0;

        img {
            width: 2rem;
        }

        p {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 768px) {
        margin: 1rem 0 0 0;

        img {
            width: 2rem;
        }

        p {
            font-size: 1.2rem;
        }
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
