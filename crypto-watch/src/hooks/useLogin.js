import { useState } from "react";
import { useUserContext } from "./useUserContext";

export const useLogin = () => {
    const [loginError, setLoginError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useUserContext();

    const login = async (email, password, name) => {
        setIsLoading(true);
        setLoginError(null);

        const response = await fetch('http://localhost:3005/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setLoginError(json.error);
            console.log(json.error);

            return false;
        }

        if (response.ok) {
            
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);

            return true;
        }

    }

    return { login, loginError, isLoading }
}