import styled from 'styled-components';
import { primaryColor, 
    // gray, 
    // hoverColorText, 
    // hoverColorBackground 
} from '../styles/colors';

export const Message = props => {
    return (
        <Container>
            <Card>
                <h1>{props?.msg}</h1>
            </Card>
        </Container>
)};

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0em 0em;
    margin: 0;
    background-color: rgba( 0,0,0,0.7 );
    z-index: 3;
    transition: all .4s ease ;
`;

const Card = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2em;
    background-color: ${primaryColor}};
    padding: 1em 1em;
    margin: 1em 0em;
    @media(max-width: 768px){
        width: 80%;
    }
    @media(min-width: 768px){
        width: 50%;
    }
`;