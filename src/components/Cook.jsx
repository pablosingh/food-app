import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
    primaryColor, 
    // gray, hoverColorText, hoverColorBackground 
} from '../styles/colors';
import { getData } from "../firebase/services";

export const Cook = () => {
    const [ data, setData ] = useState([]);
    const loadFromDB = async() => {
        const arrayData = await getData();
        setData(arrayData.filter( d => !d.hasOwnProperty('inicio') ));
    };
    useEffect( () => {
        loadFromDB();
    },[]);
    return (
        <Container>
            <button onClick={() => console.log(data)}>Cook</button>
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
`;