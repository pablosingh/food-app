import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor, gray, hoverColorBackground, hoverColorText } from '../styles/colors';
import { addDinner } from '../redux/actions'; 
import { useDispatch } from "react-redux";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { BtnAnimated } from './BtnAnimated';

export const AddDinner = props => {
    const [state, setState] = useState(false);
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
    const adding = () => {
        setDinners(
            [...dinners, data.name]
        );
        dispatch(addDinner(data.name));
        setData({name: ''});
    };
    // const submiting = e => {
    //     e.preventDefault();
    //     console.log(dinners);
    //     setData({name: ''});
    // };
    const animation = () => {
        setState(true);
        setTimeout(() =>{
            setState(false);
        },200);
    };
    return (
        <Container>
            <Card>
                <TitleAndClose>
                    <h3>Agregando Comensales</h3>
                    <BtnAnimated handleClick={props?.handleClose} text={'X'}/>
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
                    {/* <button className="btn" 
                        onClick={adding}>Agregar</button> */}
                    <BtnAnimated handleClick={adding} text={'Agregar'}/>
                    <BtnAnimated handleClick={props?.handleClose} text={'Listo'}/>
                    {/* <button className="btn"
                        onClick={e =>{
                            props?.handleClose();
                        }}
                        >Listo</button> */}
                        {/* <Test>
                            <SwitchTransition>
                                <CSSTransition
                                    key={state ? "Goodbye, world!" : "Hello, world!"}
                                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                                    classNames='fade'
                                    >
                                    <div className="correr">
                                        <button onClick={() => setState(state => !state)}
                                            className='btn-test'>
                                            {state ? "Goodbye!" : "Hello!"}
                                        </button>
                                        <label htmlFor="">label en div</label>
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                        </Test> */}
                </div>
            </Card>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(1,1,1,0.8);
    .twoBtn{
        display: flex;
        align-items: center;
        justify-content: center;
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
    margin: 0em 0em;
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
    *{
        padding: 0.5em 0.5em;
    }
`;

// const Btn = styled.button`
//     background-color: ${gray};
//     color: white;
//     margin: 0.5em 0.5em;
//     padding: 0.3em 0.5em;
//     border-radius: 2em;
//     box-shadow: none;
//     :hover{
//         background-color: ${hoverColorText};
//         color: ${hoverColorBackground};
//     }
// `;


const TitleAndClose = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Test = styled.div`
    display: flex;
    .btn-test{
        color: white;
        background-color: ${gray};
        border-radius: 2em;
        padding: 0.5em 1em;
        transition: all .4s ease ;
        :hover{
            background-color: ${hoverColorText};
            color: ${hoverColorBackground};
        }
    }
    .fade-enter{
        opacity: 0;
        transform: translateY(-100%);
    }
    .fade-enter-active{
        opacity: 1;
        transform: translateY(0%);
    }
    .fade-exit{
        opacity: 1;
        transform: translateY(0%);
    }
    .fade-exit-active{
        opacity: 0;
        transform: translateY(100%);
    }
    .fade-enter-active,
    .fade-exit-active{
        transition: opacity 500ms, transform 500ms;
    }
`;
