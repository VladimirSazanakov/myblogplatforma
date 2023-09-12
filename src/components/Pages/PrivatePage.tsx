import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reducer";

export const PrivatePages = () => {
  const state = useAppSelector(state => state.user);
  const isLogin = state.isLogin;

  return (
    isLogin ? <Outlet /> : <Navigate to='/sign-in' replace />
  )
}