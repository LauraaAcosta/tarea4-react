import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar /> 

            <Routes>
                
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/register" element={
                    <PublicRoute>
                        <RegisterPage />
                    </PublicRoute>
                } />

                <Route path="/" element={
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                } />

                <Route path="/*" element={
                    <Navigate to="/" />
                } />
            </Routes>
        </BrowserRouter>
    );
};