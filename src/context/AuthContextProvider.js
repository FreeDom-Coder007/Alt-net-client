import React from 'react';
import { createContext } from 'react';
import app from '../FireBase/FireBase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
export const auth = getAuth(app)

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const GoogleProvider = new GoogleAuthProvider()

    const signIn = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    },[])

    const authValues = {user, setUser, signUp, signIn, GoogleProvider, logOut}

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;