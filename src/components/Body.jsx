import styled from 'styled-components';
// import { Route, Routes } from 'react-router-dom';
import { NavBarPhone } from './NavBarPhone';
import { Head } from './Head';
import { Cards } from './Cards';
import { Table } from './Table';

export const Body = () => {
    return (
        <Container>
            {/* <Routes> */}
                <Head/>
                <NavBarPhone/>
                <SubContainer>
                    {/* <Route exact path="/"> */}
                        <Table/>
                    {/* </Route>      */}
                    {/* <Route exact path="/"> */}
                    {/* </Route>  */}
                    {/* <Route exact path="/"> */}
                    {/* </Route>     */}
                </SubContainer>
            {/* </Routes> */}
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
`;