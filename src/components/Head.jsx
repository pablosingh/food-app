import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

export const Head = () => {
    const name = '< P/S >';
    return (
        <Container>
            <div className={'s.center'}>
                <Link
                    className={'s.linkClass'}
                    activeClass={'s.active'}
                    to="name"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >{name}
                </Link>
            </div>
            <div className={'s.center'}>
                <Link
                    className={'s.linkClass'}
                    activeClass={'s.active'}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Sobre Mi
                </Link>
                <Link
                    className={'s.linkClass'}
                    activeClass={'s.active'}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Habilidades
                </Link>
                <Link
                    className={'s.linkClass'}
                    activeClass={'s.active'}
                    to="proyects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Proyectos
                </Link>
                <Link
                    className={'s.linkClass'}
                    activeClass={'s.active'}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Contacto
                </Link>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 15vw;
    height: 100vh;
    margin: 0;
    padding: 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    background-color: #3a4d54;
    @media(max-width: 768px){
        display: none;
    }
`;