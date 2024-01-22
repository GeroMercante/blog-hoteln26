import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Vistas y funciones de Admin
import { CreadorComponent, GetPublicaciones, ImageAdmin, ImagesList, UserListComponent } from './components'

// icons
import { BrackOutBtn } from "../../components/icons/IconsApp";

// styles
import { ContainerAdmin, InputPanel } from "./AdminStyle";


const Admin = () => {
  const user = useSelector((state) => state.auth.user);
  const userName = user && user.displayName;
  const [creator, setCreator] = useState(false);
  const [dataInfo, setDataInfo] = useState(true);
  const [imageCreator, setImageCreator] = useState(false);
  const [listImage, setListImage] = useState(false);
  const [userList, setUserList] = useState(false);

  const handleCreator = (e) => {
    e.preventDefault();
    setCreator(true);
    setImageCreator(false);
    setDataInfo(false);
    setListImage(false);
    setUserList(false)
  };

  const handleData = (e) => {
    e.preventDefault();
    setDataInfo(true);
    setImageCreator(false);
    setCreator(false);
    setListImage(false);
    setUserList(false)
  };

  const handleImage = (e) => {
    e.preventDefault();
    setImageCreator(true);
    setDataInfo(false);
    setCreator(false);
    setListImage(false);
    setUserList(false)
  };

  const handleImageList = (e) => {
    e.preventDefault();
    setListImage(true);
    setImageCreator(false);
    setDataInfo(false);
    setCreator(false);
    setUserList(false)
  };

  const handleViewUserList = (e) => {
    e.preventDefault();
    setUserList(true)
    setListImage(false);
    setImageCreator(false);
    setDataInfo(false);
    setCreator(false);
  }

  return (
    <ContainerAdmin>
      <h3 className="title-name">
        Perfil Administrador de <span>{userName}</span>
      </h3>
      <InputPanel className="input-contain">
        <h3 onClick={handleCreator} className={creator ? "active" : ''}>
          Crear publicación
        </h3>
        <h3 onClick={handleData} className={dataInfo ? "active" : ''}>
          Mis publicaciones
        </h3>
        <h3 onClick={handleImage} className={imageCreator ? "active" : ''}>
          Publicar imagenes
        </h3>
        <h3 onClick={handleImageList} className={listImage ? "active" : ''}>
          Listado de imagenes
        </h3>
        <h3 onClick={handleViewUserList} className={userList ? "active" : ''}>
          Listado de usuarios
        </h3>
        <Link to="/login">
          <BrackOutBtn />
          Volver al login
        </Link>
      </InputPanel>
      <div className="container">
        {creator && <CreadorComponent />}
        {dataInfo && <GetPublicaciones />}
        {imageCreator && <ImageAdmin />}
        {listImage && <ImagesList />}
        {userList && <UserListComponent />}
      </div>
    </ContainerAdmin>
  );
};

export default Admin;
