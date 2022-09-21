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
import { SelectTable } from './SelectTable';
import { BtnAnimated } from './BtnAnimated';


export const Table = () => {
    const [ user ] = useAuthState(auth);
    const [ activeAddDinner, setActiveAddDinner ] = useState(false);
    const [ activeFood, setActiveFood ] = useState(false);
    const [ select, setSelect ] = useState(true);
    const [ msg, setMsg ] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector( state => state );

    const openItem = (value) => {
        setActiveFood(value);
        // console.log(!activeFood);
    };
    const fnBtnActiveAddDinner = () => {
        setActiveAddDinner(!activeAddDinner);
    };
    const fnSelect = () => {
        setSelect(!select);
        console.log(!select);
    };
    const submiting = async() => {
        setMsg(true);
        await putData({
            table: state.table,
            pending: true,
            dinners: state.dinners
        });
        setTimeout(()=>setMsg(false), 1000);
        dispatch(clearState());
        fnSelect();
        // console.log('Enviado');
    };

    return (
        <Container>
        { !user ? <SignIn /> : <>
            { select ? <SelectTable handleClick={fnSelect} /> : <>
            
            <MobilePanel className={`initial ${activeAddDinner ? 'active' : ''}`}>
                <AddDinner handleClose={fnBtnActiveAddDinner} /> 
            </MobilePanel>

            { msg && <Message msg={'Exito al enviar!'}/>}
        
            { activeFood ? 
                !msg && <Cards handleClose={()=> openItem(false)}/>    
            :
                !msg && <Card>
                    <h2>Comensales</h2>
                    { state && state.dinners.map( d => <Item>
                        <Dinner dinner={d} handleClick={()=>openItem(true)}/>
                    </Item>) }
                    <div className="d-flex">
                        <BtnAnimated handleClick={fnBtnActiveAddDinner} text={'Agregar'}/>
                        <BtnAnimated handleClick={submiting} text={'Ordernar'}/>
                    </div>
                </Card>
            } 
            </> }
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
    .d-flex{
        display: flex;
    }
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

const MobilePanel = styled.div`
    position: fixed;
    top: 0vh;
    left: -100vw;
    width: 100%;
    height: 100%;
    transition: all .6s ease ;
    &.active{
        left: 0;
    } 
`;