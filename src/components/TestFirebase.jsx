
import { useEffect } from "react";
import { getData, putData, deleteData, onRealTime } from "../firebase/services";
import { useRealTime } from './useRealTime';

export const TestFirebase = () => {
    const { error, loading, messages } = useRealTime();
    const fnTest = async() => {
        // await putData( { nombre: 'xxx', edad: '32' } );
        // await deleteData('il7baIBbx4o4nHz6o1kh');
        // onRealTime();
        console.log(await getData());
    };
    useEffect( () => {
        fnTest();
    },[]);
    return (
        <div>
            Test
            { messages?.map( m => <p>{m.name}</p>) }
        </div>
)};
