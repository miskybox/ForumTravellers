//ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Simulación de un hook de autenticación
const useAuth = () => {
 // Aquí puedes implementar la lógica real de autenticación
 // Por ejemplo, verificar un token de usuario en el almacenamiento local
 const isAuthenticated = localStorage.getItem('userToken') !== null;
 return { isAuthenticated };
};

const ProtectedRoute = ({ redirectPath = '/sign-in' }) => {
 const { isAuthenticated } = useAuth();

 if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to={redirectPath} replace />;
 }

 // Si el usuario está autenticado, renderiza el contenido protegido
 return <Outlet />;
};

export default ProtectedRoute;
