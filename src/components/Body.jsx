import styled from 'styled-components';
import { NavBarPhone } from './NavBarPhone';
import { Head } from './Head';
import { Cards } from './Cards';
import { AddDinner } from './AddDinner';
import { Table } from './Table';

export const Body = () => {
    return (
        <Container>
            <Head/>
            <NavBarPhone/>
            <SubContainer>
                <Cards/>
                {/* <AddDinner/> */}
                {/* <Table/> */}
            </SubContainer>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const SubContainer = styled.div`
    padding: 4em 0em;
    margin: 0em;
    width: 100%;
    height: 100%;
    background-color: green;
`;