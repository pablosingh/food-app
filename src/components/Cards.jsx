// import { useSelector } from 'react-redux';
import { Card } from './Card';
// import { SearchBar } from './SearchBar';
import styled from 'styled-components';
import { 
    // primaryColor, 
    gray, hoverColorText, hoverColorBackground } from '../styles/colors';
import { useSelector } from 'react-redux';
// import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Cards = props => {
    const state = useSelector( state => state );
    return (
        <Container>
            <div className="btn_close_container">
                <BtnClose
                    onClick={e =>{
                        e.preventDefault();
                        props?.handleClose();
                        // console.log('cerrar');
                    }}
                    ><AiOutlineArrowLeft/> Atras</BtnClose>
            </div>
            {/* <SearchBar/> */}
            <CardsContainer>
                { state.cards && state.cards.map( (c,i) => <Card 
                    food={c} key={i}
                    handleClose={props?.handleClose}
                    />) }
            </CardsContainer>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 0em 0em;
    margin: 0;
    background-color: rgba( 0,0,0,0.7 );
    z-index: 9;
    transition: all .4s ease ;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5em 0em;
`;

const BtnClose = styled.button`
    background-color: ${gray};
    color: white;
    margin: 0.5em 0.5em 0.5em 1em;
    padding: 0.3em 0.5em;
    border-radius: 2em;
    box-shadow: none;
    :hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
`;