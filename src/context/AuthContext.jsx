import React, { createContext, useState } from 'react';

export const UserProvider = createContext(null)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState('No user')


    const sendValue = {
        user, setUser
    }

    return (
        <UserProvider.Provider value={sendValue}>
            {children}
        </UserProvider.Provider>
    );
};

export default AuthContext;