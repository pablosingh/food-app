import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor, gray, hoverColorBackground, hoverColorText } from '../styles/colors';
import { addDinner } from '../redux/actions'; 
import { useDispatch } from "react-redux";

export const AddDinner = props => {
    const [ dinners, setDinners ] = useState([]);
    const [ data, setData ] = useState({name: ''});
    const dispatch = useDispatch();

    const changing = e => {
        e.preventDefault();
        setData({ 
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const adding = e => {
        e.preventDefault();
        setDinners(
            [...dinners, data.name]
        );
        dispatch(addDinner(data.name));
        setData({name: ''});
    };
    const submiting = e => {
        e.preventDefault();
        console.log(dinners);
        setData({name: ''});
    };
    return (
        <Container>
            <Card>
                <TitleAndClose>
                    <h3>Agregando Comensales</h3>
                    <Btn
                        onClick={e =>{
                            props?.handleClose();
                        }}
                        >X</Btn>
                </TitleAndClose>
                <div className="nameAndInput">
                    <label htmlFor="name">Nombre : </label>
                    <input type="text" name='name' 
                        placeholder='Ingrese su Nombre'
                        className='inputName'
                        onChange={changing}
                        value={data.name}/>
                </div>
                <div className="twoBtn">
                    <button className="btn" 
                        onClick={adding}>Agregar</button>
                    <button className="btn"
                        onClick={e =>{
                            props?.handleClose();
                        }}
                        >Listo</button>
                </div>
            </Card>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw; 
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
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
    .nameAndInput{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .inputName{
        border-radius: 1em;
    }
    .btn{
        background-color: ${gray};
        color: white;
        margin: 0.5em 0.5em;
        padding: 0.5em 1em;
        border-radius: 2em;
    }
    .btn:hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
    *{
        padding: 0.5em 0.5em;
    }
`;

const Btn = styled.button`
    background-color: ${gray};
    color: white;
    margin: 0.5em 0.5em;
    padding: 0.3em 0.5em;
    border-radius: 2em;
    box-shadow: none;
    :hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
`;

const TitleAndClose = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;