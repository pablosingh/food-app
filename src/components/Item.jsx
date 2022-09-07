import { useEffect } from "react";

export const Item = ( props ) => {
    const si = 'si';
    const no = 'no';
    useEffect( () => {

    }, []);
    return (
        <div>
            <p>Pendiente : { props?.i?.pending ? si : no }</p>
            <p> Comensales : { props?.i?.dinners?.map( d => <p>{d.name}</p>)  }</p>
            <p></p>
        </div>
)};