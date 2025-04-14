import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginWithGoogle } from "../store/slice/authSlice";

const GoogleLoginButton = () => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.auth);
  
    const handleGoogleLogin = () => {
      dispatch(loginWithGoogle());
    };
  
    return (
      <button onClick={handleGoogleLogin} disabled={status === 'loading'}>
        Iniciar Sesión con Google
      </button>
    );
  };
  
  export default GoogleLoginButton;