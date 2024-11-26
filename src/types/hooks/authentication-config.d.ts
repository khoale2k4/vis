declare type AuthenticationState = 'login' | 'register' | 'reset';

declare type AuthenticationStateContext = {
    authenticationState: AuthenticationState;
    setAuthenticationState: React.Dispatch<React.SetStateAction<AuthenticationState>>;
}