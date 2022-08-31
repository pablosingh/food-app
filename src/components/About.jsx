import styled from 'styled-components';
import s from '../styles/About.module.css';
import { 
    primaryColor, 
    // gray, hoverColorText, hoverColorBackground 
} from '../styles/colors';

export const About = () => {
    return (
        <Container>
            <Card>
            {/* <div className={s.card}> */}
                <Hache2>
                    Hola! soy Pablo Singh me gusta mucho programar, estudié 2 años 
                    Ing. Electrónica, entre otras cosas. Aqui te comparto mis proyectos
                    y datos de contacto. Gracias!
                </Hache2>
                <Hache4>
                    Hola! soy Pablo Singh me gusta mucho programar, estudié 2 años 
                    Ing. Electrónica, entre otras cosas. Aqui te comparto mis proyectos
                    y datos de contacto. Gracias!
                </Hache4>
                <div className={s.divBtnDirections}>
                    <button onClick={ () => { 
                            window.location.href = 'https://github.com/pablosingh/';
                            }}
                        className={`btn`}
                        >GitHub
                    </button>
                    <button onClick={ () => { 
                            window.location.href = 'https://www.linkedin.com/in/pablosingh/';
                            }}
                        className={`btn`}
                        >Linkedin
                    </button>
                </div>
            {/* </div> */}
            </Card>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn{
        color: white;
        margin: 0.3em 0.7em;
        padding: 0.3em 0.7em;
        font-size: 1em;
        border-radius: 1em;
        background-color: #3a4d54;
        @media(min-width: 768px) {
            font-size: 1em;
        }
        @media(max-width: 768px) {
            font-size: 0.7em;
        }
    }
    .btn:hover{
        color: black;
        font-weight: bold;
        cursor: pointer;
        background-color: #839d92;
    }
`;

const Card = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    @media(max-width: 768px){
        width: 80vw;
    }
    @media(min-width: 768px){
        width: 50vw;
    }
    background-color: ${primaryColor};
    border-radius: 2em;
`;

const Hache2 = styled.h2`
    @media(max-width: 768px){
        display: none;
    }
`;

const Hache4 = styled.h4`
    @media(min-width: 768px){
        display: none;
    }
`;