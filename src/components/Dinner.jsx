import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { primaryColor, gray, 
    hoverColorText, hoverColorBackground } from '../styles/colors';
import { removeDinner, setActualDinner } from '../redux/actions';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

export const Dinner = props => {
    // const state = useSelector( state => state );
    const dispatch = useDispatch();
    const [ activeOrders, setActiveOrders ] = useState(false);
    const FnActiveOrders = () => setActiveOrders(!activeOrders);
    return (
        <Container>
            <Name>
                <div className="nameAndX">
                    <Btn onClick={() => {
                        dispatch(removeDinner(props?.dinner?.id));
                    }}>X</Btn>
                    <div className="onlyName" onClick={() => {
                        props?.handleClick();
                        dispatch(setActualDinner(props?.dinner?.id));
                    }}>
                        {props?.dinner?.name}
                    </div>
                </div>
                <Btn onClick={FnActiveOrders}>v</Btn>
            </Name>
            { activeOrders &&
                <Orders>
                    { props?.dinner?.foods && 
                        props?.dinner?.foods.map( f => <p>{f.idMeal}: {f.strMeal}</p>)
                    }
                </Orders>
            }
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Orders = styled.div`
    width: 100%;
    padding-left: 0.5em;
    background-color: rgba(103,104,107,0.5);
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
`;

const Name = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nameAndX{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .onlyName{
        width: 100%;
    }
`;