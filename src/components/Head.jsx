import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { primaryColor } from '../styles/colors';

export const Head = () => {
    return (
        <Container>
            <div className={'group'}>
                <Link
                    className={'linkClass'}
                    activeClass={'active'}
                    to="name"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Food App
                </Link>
            </div>
            <div className={'group'}>
                <Link
                    className={'linkClass'}
                    activeClass={'active'}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Menu
                </Link>
                <Link
                    className={'linkClass'}
                    activeClass={'active'}
                    to="proyects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Contacto
                </Link>
                <Link
                    className={'linkClass'}
                    activeClass={'active'}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Acerca
                </Link>
            </div>
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
    z-index: 1;
    background-color: ${primaryColor};
    @media(max-width: 768px){
        display: none;
    }
    .group{
        display: flex;
    }
    
    .linkClass{
        color: black;
        margin: 0.7em;
        padding: 0.3em 0.7em;
        font-size: 1.2em;
        border-radius: 1.3em;
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