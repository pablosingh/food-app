
import { useEffect } from "react";
import { getData, putData, deleteData } from "../firebase/services";

export const TestFirebase = () => {
    const fnTest = async() => {
        // await putData( { nombre: 'xxx', edad: '32' } );
        // await deleteData('il7baIBbx4o4nHz6o1kh');
        console.log(await getData());
    };
    useEffect( () => {
        fnTest();
    },[]);
    return (
        <div>Test</div>
)};
