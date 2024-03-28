/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate, RouteProps } from 'react-router-dom';
interface ProtectedRouteProps extends Omit<RouteProps, 'children'> {
  children: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('ProtectedRoute needs to be inside an AuthProvider');
  }
  const { user }: any = authContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.verified) {
      navigate('/admin/login');
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
