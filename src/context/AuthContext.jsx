import { createContext, useContext, useEffect, useState } from "react"
import {
     onAuthStateChanged,
     singInWithEmailAndPassword,
     singOut
} from 'firebase/auth';
import { auth } from '../firebase/config'

const AuthContext = createContext();

export const UseAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error ("UseAuth debe usarse dentro de AuthPovider");
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(AuthContext, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return unSubscribe
    }, []);

    const login = (email, password) => {
        return singInWithEmailAndPassword(auth, email, password)
    };

    const logout = async () => {
        try {
            await singOut(auth);
        } catch (error) {
            console.error("Error al cerrar sesiín", error)
        }
    };

  return (
    <>
      <AuthContext.Provider value={{user, loading, login, logout}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}