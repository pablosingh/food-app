import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor, gray, hoverColorBackground, hoverColorText } from '../styles/colors';

export const BtnAnimated = props => {
    const [state, setState] = useState(false);
    const fnClick = e => {
        e.preventDefault();
        setState(true);
        setTimeout(()=>{
            setState(false);
            props?.handleClick();
        }, 200);
        console.log('clicked animated');
    };
    return (
        <Container>
            <button className={`btn ${ state ? `active` : `initial` }` }
                onClick={fnClick}>
                {props?.text}
            </button>
        </Container>
    )
};

const Container = styled.div`
    display: inline-block;
    margin: 0;
    padding: 0;
    .btn{
        background-color: ${gray};
        color: white;
        margin: 0.3em 0.3em;
        padding: 0.5em 1em;
        border-radius: 2em;
        transition: all .4s ease;
    }
    .btn:hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
    .active{
        padding: 1.5em 1.5em;
        transition: all .4s ease;
    }
`;
