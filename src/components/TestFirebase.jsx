
import { useEffect, useState } from "react";
import { getData, putData, deleteData, onRealTime } from "../firebase/services";
import { onSnapshot, doc } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
// import { useRealTime } from './useRealTime';

export const TestFirebase = () => {
    // const { error, loading, messages } = useRealTime();
    const { data, setData } =useState({});
    const fnTest = async() => {
        // await putData( { nombre: 'xxx', edad: '32' } );
        // await deleteData('il7baIBbx4o4nHz6o1kh');
        console.log(await getData());
        const unsubscribe = await onSnapshot(doc(db, "tables", 'faVl1PkI36YCZijAzIFh'), (d) => {
            setData( d.data() );
            console.log(d.data());
            console.log('onSnapshot');
            });
        console.log(unsubscribe);
        unsubscribe();
    };
    useEffect( () => {
        fnTest();
    },[]);
    return (
        <div>
            Test
            {/* { messages?.map( m => <p>{m.name}</p>) } */}
            { data && data.map( data => <p>{data}</p>) }
            <button onClick={()=>console.log(data)}>data</button>
        </div>
)};
