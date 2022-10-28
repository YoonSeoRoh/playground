import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    body, html{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%; 
    }
    ul{
        margin: 0,
        padding: 0;
        list-style: none;
    }
    input, textarea{
        caret-color: ${({ theme }) => theme.colors.primary};
    }
    input: focus {
        outline: none;
    }
    textarea: focus{
        outline: none;
    }
    img{
        display: block;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
        border: none;
    }
`;

export const ComponentContainer = styled.div`
  min-width: 768px;
`;
