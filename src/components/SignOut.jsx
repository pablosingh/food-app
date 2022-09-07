import { auth } from '../firebase/firebaseConfig';
import { Btn } from '../styles/btn'

export const SignOut = () => {
    return (
        <div>
            <Btn onClick={() => auth.signOut()} >
                Logout
            </Btn>
        </div>
)};