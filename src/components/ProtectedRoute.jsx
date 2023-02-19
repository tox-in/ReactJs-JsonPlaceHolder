import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-zinc-100">
      <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
      <p className="text-[#494949]">Loading...</p>
    </div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
