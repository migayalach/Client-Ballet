import React from "react";
import { useAuth } from "@/context/authContext";
import Link from "next/link";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <h1>Loaging...</h1>;
  if (!user) return <Link href="/" />;
  return <>{children}</>;
}

export default ProtectedRoute;
