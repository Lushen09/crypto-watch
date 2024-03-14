import { useUserContext } from "./useUserContext";

export const useLogout = () => {

    const { dispatch } = useUserContext();

    const logout = () => {

        localStorage.removeItem('user');
        window.location.reload();

        dispatch({ type: 'LOGOUT' });
    }

    return { logout }
}