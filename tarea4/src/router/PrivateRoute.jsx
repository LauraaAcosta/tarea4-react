import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

    const isLogged = localStorage.getItem('isLogged') === 'true';    return isLogged 
        ? children 
        : <Navigate to="/login" />;
}