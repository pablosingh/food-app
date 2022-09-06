import { useEffect, useState } from "react";
import db from '../firebase/firebaseConfig';
import { onSnapshot, doc } from "firebase/firestore";

export const useRealTime = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ messagges, setMessagges ] = useState([]);

    useEffect(
        () => {
            const unsubscribe = onSnapshot(doc(db, "tables", '1'), (d) => {
                // setLoading(false);
                setMessagges( d.data() );
                });
            return () => unsubscribe();
            },[setMessagges]
    );
    return { error, loading, messagges };
};