import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import db from './firebaseConfig';
const nameCollection = 'dinners';

export const getData = async() => {
    try {
        const data = await getDocs( collection( db, nameCollection ) );
        const formattedData = [];
        data.forEach( doc => {
            formattedData.push( {
                ...doc.data(), 
                idFirestore: doc.id 
            } );
        });
        return formattedData;
    } catch (error) {
        console.error(error);
    }
};

export const putData = async (toInsert) => {
    try {
        const docRef = await addDoc( collection( db, nameCollection ), toInsert );
        return docRef.id;
    } catch (error) {   
        console.error(error);
    }
};

export const deleteData = async (id) => {
    try {
        const res = await deleteDoc( doc(db, nameCollection, id));
        console.log(res);
    } catch (error) {
        console.error(error);
    }  
};