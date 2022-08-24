import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { primaryColor, gray, hoverColorText, hoverColorBackground } from '../styles/colors';

export const Table = () => {
    const [ dinners, setDinners ] = useState([]);
    useEffect(() =>{
        setDinners([
            'Pablo',
            'Roberto',
            'Manuel',
            'Singh'
        ]);
    }, []);
    const openItem = e => {
        e.preventDefault();
        console.log('Item clicked');
    }
    return (
        <Container>
            <Card>
                <h2>Comensales</h2>
                { dinners && dinners.map( (d,index) => <Item>
                    <button className="btn"
                        onClick={ e => {
                            e.preventDefault();
                            console.log(index);
                            setDinners(
                                dinners.filter( (d,i) => index != i )
                            );
                        }}
                        >X
                    </button>
                    <Name onClick={openItem}>
                        {d} 
                    </Name>
                </Item>) }
            </Card>
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
    .btn{
        background-color: ${gray};
        color: white;
        margin: 0.5em 0.5em;
        padding: 0.3em 0.5em;
        border-radius: 2em;
        box-shadow: none;
    }
    .btn:hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
`;

const Name = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;