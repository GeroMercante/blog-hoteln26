import React, { useEffect, useState } from "react";
import "./GaleriaStyle.scss";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import img1 from "../assets/galeria/1.jpg";
import img2 from "../assets/galeria/2.jpg";
import img3 from "../assets/galeria/3.jpg";
import img4 from "../assets/galeria/4.jpg";
import img5 from "../assets/galeria/5.jpg";
import img6 from "../assets/galeria/6.jpg";
import img7 from "../assets/galeria/7.jpg";
import img8 from "../assets/galeria/8.jpg";
import img9 from "../assets/galeria/9.jpg";
import img10 from "../assets/galeria/10.jpg";
import img11 from "../assets/galeria/11.jpg";
import img12 from "../assets/galeria/12.jpg";
import { MdNavigateBefore, MdNavigateNext, MdClose } from "react-icons/md";
import styled from "styled-components";
import FormData from "../components/FormData";

const images = [
  { id: "1", imageName: img1, tag: "habitaciones" },
  { id: "2", imageName: img2, tag: "habitaciones" },
  { id: "3", imageName: img3, tag: "habitaciones" },
  { id: "4", imageName: img4, tag: "habitaciones" },
  { id: "5", imageName: img5, tag: "exteriores" },
  { id: "6", imageName: img6, tag: "exteriores" },
  { id: "7", imageName: img7, tag: "exteriores" },
  { id: "8", imageName: img8, tag: "exteriores" },
  { id: "9", imageName: img9, tag: "servicios" },
  { id: "10", imageName: img10, tag: "servicios" },
  { id: "11", imageName: img11, tag: "servicios" },
  { id: "12", imageName: img12, tag: "servicios" },
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
    font-family: "Playfair Display";
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

  const [tag, setTag] = useState("todas");
  const [filteredImages, setFilteredImages] = useState([]);
  const [data, setData] = useState({ image: "", index: 0 });

  useEffect(() => {
    tag === "todas"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  const viewImage = (image, index) => {
    setData({ image, index });
    console.log(image);
  };
  const imgAction = (action) => {
    let i = data.index;
    if (action === "next-image") {
      setData({ image: images[i + 1], index: i + 1 });
      console.log(data.index);
    }
    if (action === "previus-img") {
      setData({ image: images[i - 1], index: i - 1 });
    }
    if (!action) {
      setData({ image: "", index: 0 });
    }
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
      {data.image && (
        <div className="overlay" key={data.index}>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => imgAction()}
            className="btn-close-overlay"
          >
            <MdClose />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => imgAction("previus-img")}
            className="btn-prev-overlay"
          >
            <MdNavigateBefore />
          </motion.button>
          <img
            src={data.image.imageName}
            alt="hotel n26"
            className="image-overlay"
          />
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => imgAction("next-image")}
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
            <TagButton
              name="todas"
              handleSetTag={setTag}
              tagActive={tag === "todas" ? true : false}
            />
            <TagButton
              name="habitaciones"
              handleSetTag={setTag}
              tagActive={tag === "habitaciones" ? true : false}
            />
            <TagButton
              name="exteriores"
              handleSetTag={setTag}
              tagActive={tag === "exteriores" ? true : false}
            />
            <TagButton
              name="servicios"
              handleSetTag={setTag}
              tagActive={tag === "servicios" ? true : false}
            />
          </div>
          <h1 className="title">Galería</h1>
          <div className="galeria" handleSetTag={setTag}>
            {filteredImages.map((image, index) => (
              <div className="image-card">
                <img
                  src={image.imageName}
                  alt="Hotel N26"
                  className="image"
                  key={index}
                  onClick={() => viewImage(image, index)}
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
