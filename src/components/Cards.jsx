// import { useSelector } from 'react-redux';
import { Card } from './Card';
import { SearchBar } from './SearchBar';
import styled from 'styled-components';
import { primaryColor, gray, 
    hoverColorText, hoverColorBackground } from '../styles/colors';

export const Cards = props => {
    // const state = useSelector( state => state );
    const arreglo = [
        {
            id: 0,
            name: 'nombre 1',
            description: 'description 1',
            image: 'imagen 1'
        },
        {
            id: 1,
            name: 'nombre 2',
            description: 'description 2',
            image: 'imagen 2'
        },
    ];
    return (
        <Container>
            <BtnClose
                onClick={e =>{
                    e.preventDefault();
                    props?.handleClose();
                    console.log('cerrar');
                }}
                >X</BtnClose>
            <SearchBar/>
            <CardsContainer>
                { arreglo.map( (c,i) => <Card food={c} key={i}/>) }
            </CardsContainer>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 0em 0em;
    background-color: rgba( 0,0,0,0.7 );
    z-index: 1;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5em 0em;
`;

const BtnClose = styled.button`
    width: 5%;
    background-color: ${gray};
    color: white;
    margin: 0.5em 0.5em;
    padding: 0.3em 0.5em;
    border-radius: 2em;
    box-shadow: none;
    :hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
`;