import styled from 'styled-components';
import { NavBarPhone } from './NavBarPhone';
import { Head } from './Head';
import { Cards } from './Cards';
import { Table } from './Table';

export const Body = () => {
    return (
        <Container>
            <Head/>
            <NavBarPhone/>
            <SubContainer>
                {/* <Cards/> */}
                <Table/>
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
    padding-top: 4em;
    width: 100%;
    height: 100%;
`;