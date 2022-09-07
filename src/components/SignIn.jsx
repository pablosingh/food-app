import styled from 'styled-components';
import { GoogleButton } from 'react-google-button';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const SignIn = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    };
    return (
        <Container>
            <GoogleButton onClick={googleSignIn} />
        </Container>)
};

const Container = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 0em;
`;