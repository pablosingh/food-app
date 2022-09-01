
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig';

export const TestFirebase = () => {
    useEffect( () => {
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
        getData();
    },[]);
    return (
        <div>
            Test
        </div>
)};
