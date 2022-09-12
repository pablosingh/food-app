// import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { primaryColor, gray, 
    hoverColorText, hoverColorBackground } from '../styles/colors';
import { useEffect } from "react";
import { loadCards } from "../redux/actions";
import { Link } from 'react-router-dom';
import { SignOut } from "./SignOut";

export const Head = () => {
    const state = useSelector( state => state ); 
    const dispatch = useDispatch();
    useEffect( ()=> {
        dispatch( loadCards() );
    }, []);
    return (
        <Container>
            <div className={'group'}>
                <Link to="/" className={`linkClass`}>- Food App -</Link>
            </div>
            <div className={'group'}>
                <Link to="/" className={`linkClass`}>Menu</Link>
                <Link to="/cook" className={`linkClass`}>Cocina</Link>
                <Link to="/about" className={`linkClass`}>Acerca</Link>
                <Link to="/contact" className={`linkClass`}>Contacto</Link>
                <SignOut className={`linkClass`}/>
            </div>
                {/* <Btn onClick={ ()=> console.log(state) }>
                    State
                </Btn> */}
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    margin: 0;
    padding: 0; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 0;
    background-color: ${primaryColor};
    @media(max-width: 768px){
        display: none;
    }
    .group{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    .linkClass{
        color: black;
        margin: 0.7em;
        padding: 0.3em 0.7em;
        font-size: 1.2em;
        border-radius: 1.3em;
        text-decoration: none;
    }
    .linkClass:hover {
        color: white;
        cursor: pointer;
        background-color: #839d92;
    }
    .active{
        color: black;
        background-color: #839d92;
        border-radius: 1.3em;
    }
`;

// const Btn = styled.button`
//     background-color: ${gray};
//     color: white;
//     margin: 0.5em 0.5em;
//     padding: 0.3em 0.5em;
//     border-radius: 2em;
//     box-shadow: none;
//     :hover{
//         background-color: ${hoverColorText};
//         color: ${hoverColorBackground};
//     }
// `;