// import { useSelector } from 'react-redux';
import { Card } from './Card';
import { SearchBar } from './SearchBar';
import styled from 'styled-components';

export const Cards = () => {
    // const state = useSelector( state => state );
    const arreglo = [
        {
            id: 0,
            name: 'nombre 1',
            description: 'description 1',
            image: 'imagen 1'
        },
        {
            id: 1,
            name: 'nombre 2',
            description: 'description 2',
            image: 'imagen 2'
        },
    ];
    return (
        <Container>
            {/* { state && state.subCards.map( c => <Card food={c} />) } */}
            <SearchBar/>
            { arreglo.map( (c,i) => <Card food={c} key={i}/>) }
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5em 0em;
`;