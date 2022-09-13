import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Btn } from '../styles/btn';
import { 
    primaryColor, 
    // gray, hoverColorText, hoverColorBackground 
} from '../styles/colors';

import { db, auth } from '../firebase/firebaseConfig';
import { doc, query, collection, orderBy, onSnapshot, updateDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn } from "./SignIn";
import { BtnAnimated } from './BtnAnimated';

export const Cook = () => {
    const [ tables, setTables ] = useState([]);
    const [ user ] = useAuthState(auth);
    const loadFromDB = async() => {
        const ref =  collection(db, "tables");
        const q = query(ref, orderBy("table"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let tables = [];
            querySnapshot.forEach((doc) => {
                tables.push({ ...doc.data(), fid: doc.id });
            });  
            setTables( [...tables] );
            });
        // unsubscribe();
    };
    const doneTable = async(id, stateTable) => {
        await updateDoc(doc(db, "tables", id), { pending: stateTable });
    };

    useEffect( () => {
        loadFromDB();
    },[]);
    return (
        <Container>
            { !user ? <SignIn /> : 
            <Card>
                { tables && tables.map( table => <Order>
                    <div className="title">
                        <h3>Mesa: {table?.table}</h3>
                        <h4>Estado: { table.pending ? <Red>Pendiente</Red> : <Green>Despachado</Green> }</h4>
                    </div>
                    <div className="dinners">
                        {table.dinners.map( dinner => <div className="dinner">
                            <h4>{dinner.name}</h4>
                            <p>{dinner.foods.map( food => <p>{food.strMeal}</p>)}</p>
                            </div>)}
                        {/* <Btn onClick={ () => {
                            // console.log("Despachar");
                            doneTable(table.fid, !table.pending);
                            } }>Despachar</Btn> */}
                        <BtnAnimated handleClick={ () => {
                            // console.log("Despachar");
                            doneTable(table.fid, !table.pending);
                            }} text='Despachar' />
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
    padding: 0.5em 1em;
    margin: 0.5em 0em;
    border-radius: 2em;
    .title{
        // border-bottom: 3px solid black;
        // padding-bottom: 0.2em;
        padding: 0.2em 0.5em;
    }
    .dinners{
        // background-color: rgba(255,55,55,0.5);
        color: black;
        background-color: ${primaryColor};
        padding: 0.2em 2em;
        border-radius: 1em;
        margin-top: 0.3em;
    }
    .dinner{
        padding: 0.2em 0.5em;
        border-bottom: 1px solid black;
    }
`;

const Red = styled.span`
    color: red;
    font-weight: bold;
    background-color: white;
    padding: 0.1em 0.7em;
    border-radius: 1em;
`;

const Green = styled.span`
    color: green;
    font-weight: bold;
    background-color: white;
    padding: 0.1em 0.7em;
    border-radius: 1em;
`;