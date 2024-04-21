import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div onClick={logouthandler} className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">LOGOUT</div>
  )    
}

export default LogoutBtn;
