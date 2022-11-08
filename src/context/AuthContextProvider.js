import React from 'react';
import { createContext } from 'react';
import app from '../FireBase/FireBase.config';
import {getAuth} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthContextProvider = ({children}) => {

    const authValues = {}

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;