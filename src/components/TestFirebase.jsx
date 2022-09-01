
import { useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig';

export const TestFirebase = () => {
    const getData = async() => {
        try {
            const data = await getDocs( collection( db, 'dinners' ) );
            data.forEach( doc => {
                console.log(doc.data());
            });
        } catch (error) {
            console.error(error);
        }
    };
    const postData = async() => {
        try {
            const docRef = await addDoc( collection( db, 'dinners' ), {
                nombre: 'Manuel',
                edad: '33'
            } );
            console.log( docRef );
            console.log( docRef.id );
        } catch (error) {   
            console.error(error);
        }
    };
    useEffect( () => {
        // postData();
        getData();
    },[]);
    return (
        <div>
            Test
        </div>
)};
