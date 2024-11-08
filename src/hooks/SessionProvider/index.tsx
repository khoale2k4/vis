"use client";
import { usePathname } from 'next/navigation';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
interface SessionContextType {
    status: 'loading' | 'authenticated' | 'unauthenticated';
    session: null | any;
    setSession: Dispatch<SetStateAction<null | any>>;
}
const SessionContext = createContext<SessionContextType>({
    status: 'loading', // Có thể là 'loading', 'authenticated', 'unauthenticated'
    session: null,
    setSession: () => {},
});
export function SessionProvider({ children }: { children: ReactNode }) {
    const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>("loading");
    const [session, setSession] = useState(null);
    const pathName = usePathname();
    // const router =useRouter();

    useEffect(() => {
        const fetchData = async () => {

            //somelogic
            setSession(session);
            setStatus('authenticated');
        };
        fetchData();
    }, [pathName]);
    useEffect(() => {

            const intervalId = setInterval(() => {
                //refreshToken here
            }, 15 * 60 * 1000 ); // 15 phút = 15 * 60 * 1000 milliseconds refreshToken 1 lần
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