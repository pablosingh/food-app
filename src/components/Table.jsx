import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AddDinner } from './AddDinner';
import { Cards } from './Cards';
import { primaryColor, gray, 
    hoverColorText, hoverColorBackground } from '../styles/colors';
import { removeDinner, setActualDinner } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

export const Table = () => {
    const [ dinners, setDinners ] = useState([]);
    const [ activeAddDinner, setActiveAddDinner ] = useState(false);
    const [ activeFood, setActiveFood ] = useState(false);
    const state = useSelector( state => state );
    const dispatch = useDispatch();
    
    useEffect(() =>{
        setDinners([
            'Pablo',
            'Roberto',
            'Manuel',
            'Singh'
        ]);
    }, []);

    const openItem = () => {
        setActiveFood(!activeFood);
    };

    const fnBtnActiveAddDinner = () => {
        setActiveAddDinner(!activeAddDinner);
    };

    return (
        <Container>
            <Card>
                { activeAddDinner && 
                    <AddDinner handleClose={fnBtnActiveAddDinner}/> 
                }
                <h2>Comensales</h2>
                { state && state.dinners.map( (d,index) => <Item>
                    <Btn
                        onClick={ e => {
                            e.preventDefault();
                            dispatch(removeDinner(d.id));
                        }}>X
                    </Btn>
                    <Name onClick={() => {
                        openItem();
                        dispatch(setActualDinner(d.id));
                    }}>
                        {d.name} 
                    </Name>
                </Item>) }
                <Btn onClick={fnBtnActiveAddDinner}>Agregar</Btn>
            </Card>
            { activeFood && 
                <Cards handleClose={openItem}/>    
            }
        </Container>
    )
};

const Container = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: pink;
`;

const Card = styled.div`
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

const Item = styled.div`
    display: flex;
    width: 100%;
    color: black;
    padding: 0.2em 1em;
    margin: 0.2em 0.2em;
`;

const Name = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Btn = styled.button`
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