import React from "react";
import LoginForm from "./components/loginEmail";
import GoogleLoginButton from "./components/loginGoogle";
import LogoutButton from "./components/logout";
import { useSelector } from "react-redux";


function App() {
  
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {!user ? (
        <>
          <LoginForm />
          <GoogleLoginButton />
        </>
      ) : (
        <>
          <h2>Bienvenido, {user.email}</h2>
          <LogoutButton />
        </>
      )}
    </div>
  );
}

export default App;