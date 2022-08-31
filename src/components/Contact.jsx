import styled from 'styled-components';
import { 
    primaryColor, 
    // gray, hoverColorText, hoverColorBackground 
} from '../styles/colors';

export const Contact = () => {
    return (
        <Container>
            <Card>
                Contact
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
`;

const Card = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 768px){
        width: 80vw;
    }
    @media(min-width: 768px){
        width: 50vw;
    }
    background-color: ${primaryColor};
    border-radius: 2em;
`;