import { useState } from 'react';
import styled from 'styled-components';
import { AddDinner } from './AddDinner';
import { Cards } from './Cards';
import { Dinner } from './Dinner';
import { primaryColor, gray, 
    hoverColorText, hoverColorBackground } from '../styles/colors';
import { useSelector, useDispatch } from 'react-redux';
// import { TestFirebase } from './TestFirebase';
import { putData } from '../firebase/services';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn } from "./SignIn";
import { auth } from '../firebase/firebaseConfig';
import { clearState } from '../redux/actions';
import { Message } from './Message';

export const Table = () => {
    const [ user ] = useAuthState(auth);
    const [ activeAddDinner, setActiveAddDinner ] = useState(false);
    const [ activeFood, setActiveFood ] = useState(false);
    const [ msg, setMsg ] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector( state => state );
    const openItem = () => {
        setActiveFood(!activeFood);
    };

    const fnBtnActiveAddDinner = () => {
        setActiveAddDinner(!activeAddDinner);
    };

    const submiting = async() => {
        await putData({
            pending: true,
            dinners: state.dinners
        });
        setMsg(true);
        setTimeout(()=>setMsg(false), 2000);
        dispatch(clearState());
        console.log('Enviado');
    };

    return (
        <Container>
        { !user ? <SignIn /> : <>
            { activeFood && 
                <Cards handleClose={openItem}/>    
            }
            { activeAddDinner && 
                <AddDinner handleClose={fnBtnActiveAddDinner}/> 
            }
            { msg && <Message msg={'Exito al enviar!'}/>}
            { !activeFood && 
                <Card>
                    <h2>Comensales</h2>
                    { state && state.dinners.map( d => <Item>
                        <Dinner dinner={d} handleClick={openItem}/>
                    </Item>) }
                    <div className="">
                        <Btn onClick={fnBtnActiveAddDinner}>Agregar</Btn>
                        <Btn onClick={submiting}>Ordernar</Btn>
                        {/* <Btn onClick={()=>console.log(state)}>State</Btn> */}
                    </div>
                </Card>
            }
        </>}
        </Container>
    )
};

const Container = styled.div`
    width: 100%; 
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2em;
    background-color: ${primaryColor}};
    padding: 1em 1em;
    margin: 1em 0em;
    @media(max-width: 768px){
        width: 80%;
    }
    @media(min-width: 768px){
        width: 50%;
    }
`;

const Item = styled.div`
    display: flex;
    width: 100%;
    color: black;
    padding: 0.2em 1em;
    margin: 0.2em 0.2em;
`;

// const Name = styled.div`
//     width: 90%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
// `;

const Btn = styled.button`
    background-color: ${gray};
    color: white;
    margin: 0.5em 0.5em;
    padding: 0.3em 0.5em;
    border-radius: 2em;
    box-shadow: none;
    transition: all .4s ease ;
    :hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
`;