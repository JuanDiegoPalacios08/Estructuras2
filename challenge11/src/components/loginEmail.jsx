import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginWithEmail } from "../store/slice/authSlice";

const LoginForm = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth);
  
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loginWithEmail(formData));
    };
  
    return (
      <div>
        <h2>Login con Email y Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br/>
          <input 
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br/>
          <button type="submit" disabled={status === 'loading'}>
            Iniciar Sesión
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
    );
  };
  
  export default LoginForm;