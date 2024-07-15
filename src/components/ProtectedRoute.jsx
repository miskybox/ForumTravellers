//ProtectedRoute.jsx
/*
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  // Implementa la lógica real de autenticación
  const isAuthenticated = localStorage.getItem('userToken') !== null;
  const user = JSON.parse(localStorage.getItem('user')) || null;
  return { isAuthenticated, user };
};

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to={redirectPath} replace />;
  }

  // Si el usuario está autenticado, renderiza el contenido protegido
  return <Outlet />;
};

export default ProtectedRoute;
*/
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/UseAuth';

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

