"use client";
import { usePathname } from 'next/navigation';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';


interface SessionContextType {
    status: 'loading' | 'authenticated' | 'unauthenticated';
    session: sessionData | null;
    setSession: Dispatch<SetStateAction<sessionData | null>>;
}

const SessionContext = createContext<SessionContextType>({
    status: 'loading',
    session: null,
    setSession: () => {},
});

export function SessionProvider({ children }: { children: ReactNode }) {
    const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>("loading");
    const [session, setSession] = useState<sessionData | null>(null);
    const pathName = usePathname();

    useEffect(() => {
        const fetchData = async () => {
            // Some logic here
            setSession((prevSession) => prevSession); // Functional update
            setStatus('authenticated');
        };
        fetchData();
    }, [pathName]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // refreshToken logic here
        }, 15 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <SessionContext.Provider value={{ status, session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    const { status, session, setSession } = useContext(SessionContext);
    return { status, session, setSession };
}