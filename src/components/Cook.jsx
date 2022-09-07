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
import { SignOut } from "./SignOut";

export const Cook = () => {
    const [ data, setData ] = useState([]);
    const [ user ] = useAuthState(auth);
    const loadFromDB = async() => {
        const ref =  collection(db, "tables");
        const q = query(ref, orderBy("pending"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let tables = [];
            querySnapshot.forEach((doc) => {
                tables.push({ ...doc.data(), fid: doc.id });
            });  
            setData( [...tables] );
            });
        // unsubscribe();
    };

    useEffect( () => {
        loadFromDB();
    },[]);
    return (
        <Container>
            <Card>
                { !user ? <SignIn /> : <SignOut /> }
                { data && data.map( (d,i) => <div>
                    <h3>Mesa: {i}</h3>
                    <h4>Pendiente: {d.pending}</h4>
                    <p>{d.dinners.map( din => <p>
                        {din.name}
                        <p>{din.foods.map( f => <p>{f.strMeal}</p>)}</p>
                        </p>)}</p>
                </div>)}
                <Btn onClick={ () => console.log(data)}>Cook</Btn>
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