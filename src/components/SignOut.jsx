import {auth} from '../firebase/firebaseConfig';

export const SignOut = () => {
    return (
        <div>
            <button onClick={() => auth.signOut()} >
                Logout
            </button>
        </div>
)};