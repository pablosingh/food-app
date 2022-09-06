
import { useEffect, useState } from "react";
import { getData, putData, deleteData, onRealTime } from "../firebase/services";
import { onSnapshot, doc } from "firebase/firestore";
import { db, auth } from '../firebase/firebaseConfig';
import { query, collection, orderBy } from 'firebase/firestore';
// import { useRealTime } from './useRealTime';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";


export const TestFirebase = () => {
    const [ data, setData ] = useState([]);
    const [ user ] = useAuthState(auth)

    const fnTest = async() => {
        // console.log(await getData());

        const ref =  collection(db, "tables");
        // console.log(ref);

        const q = query(ref, orderBy("name"));
        // console.log(q);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            console.log(querySnapshot);
            // console.log(querySnapshot.data());
            querySnapshot.forEach((doc) => {
                console.log('for each');        
                messages.push({ ...doc.data(), fid: doc.id });
                console.log(doc.data());
            });  
            setData( [...messages] );
            console.log('onSnapshot');
            console.log(messages);
            });
        // console.log(unsubscribe);
        // unsubscribe();
    };

    useEffect( () => {
        fnTest();
        // console.log(user);
    },[]);

    return (
        <div>
            Test
            { !user ? <SignIn /> : <SignOut /> }
            {/* { data && data.map( data => <p>{data}</p>) } */}
            <button onClick={ () =>{ 
                console.log(data);
                // console.log(user);
            } }>data</button>
        </div>
)};
