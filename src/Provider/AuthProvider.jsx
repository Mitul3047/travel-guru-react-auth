
import { GoogleAuthProvider, getAuth} from 'firebase/auth'
import { createContext } from 'react';
export AuthContext = createContext(AuthProvider)
const AuthProvider = () => {
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const googleSignIn = ()=>{
    

}
    
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;