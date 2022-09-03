import { useEffect, useState } from "react";
// import db from '../firebase/firebaseConfig';
// import { collection } from 'firebase/firestore';
// import { firebase } from 'firebase';
import { db } from '../firebase/config';

export const useRealTime = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ messagges, setMessagges ] = useState([]);

    useEffect(
        () => {
            // const unsubscribe = firebase.firestore().collection('tables').onSnapshot( 
            const unsubscribe = db.collection('tables').onSnapshot( 
            snap => {
                setLoading(false);
                setMessagges( snap.docs.map( d => {
                    return {
                        ...d.data()
                    }
                } ) );
            },
            error => {
                setError(error);
            }
           );
        return () => unsubscribe();
        },[setMessagges]
    );
    return { error, loading, messagges };
};