import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { NavBarPhone } from './NavBarPhone';
import { Head } from './Head';
import { Table } from './Table';
import { About } from './About';
// import { Contact } from './Contact';
import { Contact } from './Contact2';

export const Body = () => {
    return (
        <Container>
                <Head/>
                <NavBarPhone/>
                <SubContainer>
                <Routes>
                    <Route path="/" element={<Table />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route path="/contact" element={<Contact />} />
                </Routes>  
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
`;