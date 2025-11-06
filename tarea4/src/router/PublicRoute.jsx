import { Navigate } from "react-router-dom";

export const PublicRoutes = () => {
    const isLogged = localStorage.getItem("isLogged");

    return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};