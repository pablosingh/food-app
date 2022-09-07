import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Btn } from '../styles/btn';
import { 
    primaryColor, 
    // gray, hoverColorText, hoverColorBackground 
} from '../styles/colors';

import { db, auth } from '../firebase/firebaseConfig';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn } from "./SignIn";

export const Cook = () => {
    const [ tables, setTables ] = useState([]);
    const [ user ] = useAuthState(auth);
    const loadFromDB = async() => {
        const ref =  collection(db, "tables");
        const q = query(ref, orderBy("pending"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let tables = [];
            querySnapshot.forEach((doc) => {
                tables.push({ ...doc.data(), fid: doc.id });
            });  
            setTables( [...tables] );
            });
        // unsubscribe();
    };

    useEffect( () => {
        loadFromDB();
    },[]);
    return (
        <Container>
            { !user ? <SignIn /> : 
            <Card>
                { tables && tables.map( (table,i) => <Order>
                    <div className="title">
                        <h3>Mesa: {i}</h3>
                        <h4>Estado: { table.pending ? <span>Pendiente</span> : <span>Despachado</span> }</h4>
                    </div>
                    <div className="dinners">
                        {table.dinners.map( dinner => <div className="dinner">
                            {dinner.name}
                            <p>{dinner.foods.map( food => <p>{food.strMeal}</p>)}</p>
                            </div>)}
                        <Btn onClick={ () => console.log("Despachar") }>Despachar</Btn>
                    </div>
                </Order>)}
            </Card> 
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
`;

const Card = styled.div`
    margin: 2em 0em 0em 0em;
    min-height: 50vh;
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

const Order = styled.div`
    color: white;
    background-color: rgba(103,104,107,1);
    padding: 0.5em 1.5em;
    margin: 0.5em 0em;
    border-radius: 2em;
    .title{
        border-bottom: 3px solid black;
        // padding-bottom: 0.2em;
        padding: 0.2em 0.5em;
    }
    .dinners{
        // background-color: rgba(255,55,55,0.5);
        color: black;
        background-color: ${primaryColor};
        padding: 0.2em 1.5em;
        border-radius: 1em;
        margin-top: 0.3em;
    }
    .dinner{
        padding: 0.2em 0.5em;
        border-bottom: 1px solid black;
    }
`;