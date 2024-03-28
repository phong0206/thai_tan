/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate, RouteProps } from 'react-router-dom';
interface GuestRouteProps extends Omit<RouteProps, 'children'> {
  children: React.ReactNode;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('GuestRoute needs to be inside an AuthProvider');
  }
  const { user }: any = authContext;

  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.verified) {
      // Kiểm tra user trước khi truy cập thuộc tính verified
      navigate('/admin/post');
    }
  }, [user, navigate]);

  return <>{children}</>; // Sử dụng Fragment một cách không dư thừa
};

export default GuestRoute;
