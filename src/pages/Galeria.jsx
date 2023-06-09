import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { MdNavigateBefore, MdNavigateNext, MdClose } from "react-icons/md";
import FormData from "../components/FormData";
import imagenes from "../assets/galeria";
import "./GaleriaStyle.scss";

const images = [
  { id: "1", imageName: imagenes.img1, tag: "espacios comunes" },
  { id: "2", imageName: imagenes.img2, tag: "espacios comunes" },
  { id: "3", imageName: imagenes.img3, tag: "espacios comunes" },
  { id: "4", imageName: imagenes.img4, tag: "espacios comunes" },
  { id: "5", imageName: imagenes.img5, tag: "espacios comunes" },
  { id: "6", imageName: imagenes.img6, tag: "espacios comunes" },
  { id: "7", imageName: imagenes.img7, tag: "espacios comunes" },
  { id: "8", imageName: imagenes.img8, tag: "espacios comunes" },
  { id: "9", imageName: imagenes.img9, tag: "espacios comunes" },
  { id: "10", imageName: imagenes.img10, tag: "espacios comunes" },
  { id: "11", imageName: imagenes.img11, tag: "espacios comunes" },
  { id: "12", imageName: imagenes.img12, tag: "espacios comunes" },
  { id: "13", imageName: imagenes.img13, tag: "espacios comunes" },
  { id: "14", imageName: imagenes.img14, tag: "espacios comunes" },
  { id: "15", imageName: imagenes.img15, tag: "espacios comunes" },
  { id: "16", imageName: imagenes.img16, tag: "espacios comunes" },
  { id: "17", imageName: imagenes.img17, tag: "espacios comunes" },
  { id: "18", imageName: imagenes.img18, tag: "espacios comunes" },
  { id: "19", imageName: imagenes.img19, tag: "espacios comunes" },
  { id: "20", imageName: imagenes.img20, tag: "espacios comunes" },
];

const ModalReserva = styled.div`
  position: fixed;
  bottom: 2%;
  right: 10px;
  width: 300px;
  height: 230px;
  background-color: #f2efe6;
  border-radius: 16px;
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btn-cerrar {
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: #cd9746;
    outline: none;
    svg {
      font-size: 21px;
      margin-left: 4px;
    }
  }

  .btn-modal {
    color: #fff;
    background: #cd9746;
    font-size: 17px;
    margin-top: 10px;
    padding: 11px 20px;
    border-radius: 16px;
    cursor: pointer;
  }

  h3 {
    font-size: 25px;
    font-family: "Poppins" sans-serif;
    font-style: italic;
    text-align: center;
    font-weight: 100;
    span {
      color: #cd9746;
    }
  }

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 170px;
    .btn-modal {
      font-size: 15px;
      padding: 8px 17px;
    }
    h3 {
      font-size: 17px;
      span {
        color: #cd9746;
      }
    }
  }
`;

const Galeria = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [mostrarReserva, setMostrarReserva] = useState(true);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [tag, setTag] = useState("todas");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "todas"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  const handleClickImagen = (id) => {
    const imagen = filteredImages.find((img) => img.id === id);
    setImagenSeleccionada(imagen);
  };

  const handleNextImagen = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === imagenSeleccionada.id
    );
    let nextIndex = currentIndex + 1;
    if (nextIndex === filteredImages.length) {
      nextIndex = 0;
    }
    const nextImagen = filteredImages[nextIndex];
    setImagenSeleccionada(nextImagen);
  };

  const handlePreviousImagen = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === imagenSeleccionada.id
    );
    let previousIndex = currentIndex - 1;
    if (previousIndex === -1) {
      previousIndex = filteredImages.length - 1;
    }
    const previousImagen = filteredImages[previousIndex];
    setImagenSeleccionada(previousImagen);
  };

  return (
    <>
      <FormData estado={estadoModal} cambiarEstado={cambiarEstadoModal} />
      {mostrarReserva && (
        <ModalReserva>
          <button
            className="btn-cerrar"
            onClick={() => setMostrarReserva(false)}
          >
            Cerrar <IoCloseOutline />
          </button>
          <h3>
            Reservá tu estadía <br />
            de{" "}
            <span>
              forma segura y <br />
              al mejor precio
            </span>
          </h3>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="btn-modal"
            onClick={() => cambiarEstadoModal(!estadoModal)}
          >
            Reservar
          </motion.button>
        </ModalReserva>
      )}

      {imagenSeleccionada && (
        <div className="overlay" key={imagenSeleccionada.id}>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setImagenSeleccionada(null)}
            className="btn-close-overlay"
          >
            <MdClose />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handlePreviousImagen}
            className="btn-prev-overlay"
          >
            <MdNavigateBefore />
          </motion.button>
          <img
            src={imagenSeleccionada.imageName}
            alt="hotel n26"
            className="image-overlay"
          />
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleNextImagen}
            className="btn-next-overlay"
          >
            <MdNavigateNext />
          </motion.button>
        </div>
      )}
      <motion.div
        className="center-flexbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="container" handleSetTag={setTag}>
          <div className="tags">
          </div>
          <h1 className="title">Galería</h1>
          <div className="galeria" handleSetTag={setTag}>
            {filteredImages.map((image, index) => (
              <div className="image-card" key={index}>
                <img
                  src={image.imageName}
                  alt="Hotel N26"
                  className="image"
                  onClick={() => handleClickImagen(image.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}{" "}
    </motion.button>
  );
};

export default Galeria;
