import { React } from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { Rooms } = useSelector((store) => {
    return store.rooms;
  });

  if (Rooms.length === 0) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
