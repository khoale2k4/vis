'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

const AuthenticationContext = createContext<AuthenticationStateContext | undefined>(undefined);

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
    const [authenticationState, setAuthenticationState] = useState<AuthenticationState>('login');

    return (
        <AuthenticationContext.Provider value={{ authenticationState, setAuthenticationState }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthentication = () => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuthentication must be used within an AuthenticationProvider');
    }
    return context;
};