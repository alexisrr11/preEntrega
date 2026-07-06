import { Navigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
    const [user, loading] = UseAuth();
    if(!loading) return <p>Loading...</p>
    if(!user) return <Navigate to="/admin/login"/>
    return children
};
