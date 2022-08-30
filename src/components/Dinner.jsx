import styled from "styled-components";
import { removeDinner, setActualDinner } from '../redux/actions';
import { useDispatch } from 'react-redux';

export const Dinner = props => {
    const dispatch = useDispatch();
    return (
        <Container onClick={() => {
            props?.handleClick();
            dispatch(setActualDinner(props?.dinner?.id));
        }}>
            {props?.dinner?.name}
        </Container>
    )
};

const Container = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

