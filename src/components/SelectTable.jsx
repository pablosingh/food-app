import { useState } from "react";
import styled from 'styled-components';
import { primaryColor, 
    // gray, hoverColorText, hoverColorBackground 
} from '../styles/colors';
import { useDispatch } from 'react-redux';
import { setTable } from '../redux/actions';
import { Btn } from '../styles/btn';
import { BtnAnimated } from "./BtnAnimated";

export const SelectTable = ( props ) => {
    const [ number, setNumber ] = useState(); 
    const dispatch = useDispatch();
    const changing = e => {
        e.preventDefault();
        setNumber(e.target.value);
    };
    const submiting = () => {
        // console.log(number);
        dispatch(setTable(number));
        props?.handleClick();
    };
    return (
        <Container>
            <Card>
                <h2>Selecciona tu mesa</h2>
                <div className="input_btn">
                    <input type="number" onChange={changing} value={number} className='iNumber'/>
                    {/* <Btn onClick={submiting}>Ok</Btn> */}
                    <BtnAnimated handleClick={submiting} text={'Ok'} />
                </div>
            </Card>
        </Container>
)};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .iNumber{
        border-radius: 1em;
        padding: 0.2em 1em;
        margin: 0.2em 0.5em 0.2em 0;
    }
`;