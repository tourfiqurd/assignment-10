import React, { createContext } from 'react';
import useFirebage from './../hooks/useFiebage';





export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const allContexts = useFirebage()

    return (
        <AuthContext.Provider value={allContexts}>
            {children}


        </AuthContext.Provider>
    );
};

export default AuthProvider;