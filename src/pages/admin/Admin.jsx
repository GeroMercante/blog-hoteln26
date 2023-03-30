import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CreadorComponent, DataContain } from "./components/";

const Admin = () => {
  const user = useSelector((state) => state.auth.user);
  const userName = user && user.displayName;
  const [creator, setCreator] = useState(false);
  const [dataInfo, setDataInfo] = useState(true);

  const handleCreator = (e) => {
    e.preventDefault();
    setCreator(true);
    setDataInfo(false);
  };

  const handleData = (e) => {
    e.preventDefault();
    setDataInfo(true);
    setCreator(false);
  };

  return (
    <>
      <Container>
        <h3 className="title-name">
          Perfil Administrador de <span>{userName}</span>
        </h3>
        <div className="input-contain">
          <h3 onClick={handleData}>Mis publicaciones</h3>
          <h3 onClick={handleCreator}>Crear publicación</h3>
          <Link to="/login">Volver al login</Link>
        </div>
        <div className="container">
          {creator && <CreadorComponent />}
          {dataInfo && <DataContain />}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: auto;
  width: 100vw;
  background: rgba(165, 158, 148, 0.3);

  min-height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;

  .title-name {
    position: absolute;
    top: 150px;
    span {
      color: #059209;
    }
  }

  .input-contain {
    position: fixed;
    left: 0px;
    background: rgba(165, 158, 148, 0.7);
    backdrop-filter: blur(1px);
    height: 200px;
    width: 200px;
    border-radius: 0px 16px 16px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid #fff;
    z-index: 10;
    h3 {
      margin: 20px 0;
      cursor: pointer;
      :hover {
        color: #fff;
      }
    }
  }

  .container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Admin;
