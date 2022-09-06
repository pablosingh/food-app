import { GoogleButton } from 'react-google-button';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const SignIn = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    };
    return (
        <div>
            <GoogleButton onClick={googleSignIn} />
        </div>)
};