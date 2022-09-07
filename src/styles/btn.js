import styled from "styled-components";
import { primaryColor, gray, 
    hoverColorText, hoverColorBackground } from '../styles/colors';

export const Btn = styled.button`
    background-color: ${gray};
    color: white;
    margin: 0.5em 0.5em;
    padding: 0.3em 0.8em;
    border-radius: 2em;
    box-shadow: none;
    transition: all .4s ease ;
    :hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
`;