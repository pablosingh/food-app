import styled from 'styled-components';

export const About = () => {
    return (
        <Container id="about">
            
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