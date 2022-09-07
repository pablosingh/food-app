
import { useEffect, useState } from "react";
import { getData, putData, deleteData, onRealTime } from "../firebase/services";
import { onSnapshot, doc } from "firebase/firestore";
import { db, auth } from '../firebase/firebaseConfig';
import { query, collection, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { Item } from "./Item";


export const TestFirebase = () => {
    const [ data, setData ] = useState([]);
    const [ user ] = useAuthState(auth);

    const fnTest = () => { 
        const ref =  collection(db, "tables");
        const q = query(ref, orderBy("pending"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                // console.log('for each');        
                messages.push({ ...doc.data(), fid: doc.id });
                // console.log(doc.data());
            });  
            setData( [...messages] );
            // console.log('onSnapshot');
            console.log(messages);
            });
        // unsubscribe();
    };

    useEffect( () => {
        fnTest();
    },[]);

    return (
        <div>
            Test
            { !user ? <SignIn /> : <SignOut /> }
            { data && data?.map( m => <Item i={m}/> )}
            <button onClick={ () =>{ 
                console.log(data);
            } }>data</button>
        </div>
)};
