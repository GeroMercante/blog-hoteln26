import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, logout } from "../redux/actions/login";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user && user.isAdmin;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Container>
        <div className="form-container">
          {!user && (
            <>
              <h1>Iniciar sesión</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <div className="line"></div>
              </form>
            </>
          )}
          {user && (
            <>
              <div className="user-login">
                <h3>Has iniciado sesión</h3>
                {isAdmin && (
                  <Link to="/admin" className="btn-admin">
                    Perfil Administrador
                  </Link>
                )}
                <button className="btn-logout" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            </>
          )}
          <p className="redirect">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/registro"
              style={{
                color: "blue",
                borderBottom: "2px solid blue",
              }}
            >
              Registrarse
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .user-login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .redirect {
    position: absolute;
    bottom: 10px;
  }

  .btn-admin {
    color: #fff;
    width: 90%;
    margin-top: 1rem;
    font-size: 18px;
    border-radius: 8px;
    padding: 11px 35px;
    border: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    background: rgba(165, 158, 148, 0.7);
    :hover {
      background: rgba(165, 158, 148, 0.2);
    }
  }

  .btn-logout {
    background: #f00;
    color: #fff;
    width: 90%;
    margin-top: 1rem;
    font-size: 21px;
    border-radius: 8px;
    padding: 11px 35px;
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
      background: #790000;
    }
  }

  .form-container {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(165, 158, 148, 0.7);
    border-radius: 16px;
    position: relative;
    padding: 11px 27px;

    h1 {
      position: absolute;
      left: 5%;
      top: 5%;
      font-size: 33px;
      text-transform: uppercase;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      text-align: left;
      width: 90%;
      gap: 1rem;
      label {
        font-size: 21px;
        text-transform: uppercase;
        text-align: left;
        font-weight: 600;
        width: 100%;
      }
      input {
        width: 100%;
        font-size: 21px;
        padding: 11px 4px;
        border: 2px solid #dcdcdc;
        border-radius: 8px;
        outline: 1px solid #777777;
        :focus {
          outline: 2px solid #777777;
        }
      }
      button {
        background: #296df4;
        color: #fff;
        width: 100%;
        font-size: 21px;
        border-radius: 8px;
        padding: 11px 35px;
        margin-top: 1rem;
        border: none;
        outline: none;
        cursor: pointer;
      }

      .line {
        height: 2px;
        width: 100%;
        background-color: #777777;
        margin-top: 20px 0;
      }
    }
  }
`;

export default Login;
