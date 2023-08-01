// Componente utilizado em Main

import React from "react";
import styled from "styled-components";

// Estilos
const ListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 500;
    color: white;
    font-size: 1.4rem;

    li {
        margin: 0.6rem 0.1rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

// Componente
function List() {
    const facts_list = [
        "Was first released in 2013",
        "Was originally created by Jordan Walke",
        "Has well over 100K stars on GitHub",
        "Is maintained by Facebook",
        "Powers thousands of enterprise apps, including mobile apps"
    ]
    
    return (
        <ListStyled>
            {
                facts_list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ListStyled>
    );
}

export default List;