import { useState } from "react";
import { useUserContext } from "./useUserContext";

export const useSignup = () => {
    const [signUpError, setSignUpError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useUserContext();

    const signup = async (email, password, name) => {
        setIsLoading(true);
        setSignUpError(null);

        const response = await fetch('https://crypto-watch-server.vercel.app/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setSignUpError(json.error);
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

    return { signup, signUpError, isLoading }
}