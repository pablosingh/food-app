import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { NavBarPhone } from './NavBarPhone';
import { Head } from './Head';
import { Table } from './Table';
import { About } from './About';
// import { Contact } from './Contact';
import { Contact } from './Contact';
import { Cook } from './Cook';
import DivAnimated from './DivAnimated';
// import image from '../images/resto.jpg';
import image from '../images/madera.jpg';


export const Body = () => {
    return (
        <Container>
                <Head/>
                <NavBarPhone/>
                <SubContainer>
                    <Routes>
                        <Route path="/" element={ <DivAnimated element={<Table/>} />} />
                        <Route path="/cook" element={ <DivAnimated element={<Cook />} />} />
                        <Route path="/about" element={ <DivAnimated element={<About />} />} />
                        <Route path="/contact" element={ <DivAnimated element={<Contact />} />}  />
                    </Routes>  
                </SubContainer>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    // background-color: rgba(0,0,0,0.8);
    &::before{
        content: '';
        position: fixed;
        top: 0vh;
        left: 0vw;
        width: 100vw;
        height: 100vh;
        background-repeat: repeat-y;
        background: url(${image});
        opacity: 0.9;
        z-index: -1;
    }
`;

const SubContainer = styled.div`
    padding: 4em 0em;
    margin: 0em;
    width: 100%;
    height: 100%;
`;