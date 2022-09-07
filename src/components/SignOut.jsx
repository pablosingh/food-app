import { auth } from '../firebase/firebaseConfig';
import { Btn } from '../styles/btn'

export const SignOut = () => {
    return (
        <Btn onClick={() => auth.signOut()} >
            Logout
        </Btn>
)};
