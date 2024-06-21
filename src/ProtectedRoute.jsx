// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './context/UseAuth'; 

function ProtectedRoute({ element, ...rest }) {
 const isAuthenticated = useAuth(); 

 return (
    <Route {...rest} element={isAuthenticated ? element : <Navigate to="/registro" replace />} />
 );
}

export default ProtectedRoute;