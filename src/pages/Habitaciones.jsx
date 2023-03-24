import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { IoCloseOutline } from "react-icons/io5";
import Single from "../rooms/Single";
import Dobles from "../rooms/Dobles";
import Triples from "../rooms/Triples";
import Cuadruples from "../rooms/Cuadruples";
import styled from "styled-components";
import FormData from "../components/FormData";

const Box = styled(motion.div)`
  margin-top: 130px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; // cuando este el texto, poner propiedad flex-start

  .input-contain {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .input-rooms {
      width: 30%;
      padding: 11px 50px;
      font-size: 19px;
      outline: none;
      border: 3px solid #cd9746;
      background-color: #fff;
      color: #cd9746;
      @media screen and (max-width: 800px) {
        width: 75%;
        padding: 11px 1px;
        font-size: 14px;
      }
    }
  }
  .container {
    width: 800px;
    height: 700px;
    background-color: #fff;
    padding: 20px;

    @media screen and (max-width: 800px) {
      width: 340px;
      height: 500px;
    }
  }
`;

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

const Habitaciones = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [mostrarReserva, setMostrarReserva] = useState(true);

  const [room, setRoom] = useState("selectRoom");

  const [singleContentVisible, setSingleContentVisible] = useState(false);
  const [dobleContentVisible, setDobleContentVisible] = useState(false);
  const [tripleContentVisible, setTripleContentVisible] = useState(false);
  const [cuadrupleContentVisible, setCuadrupleContentVisible] = useState(false);

  useEffect(() => {
    room === "single"
      ? setSingleContentVisible(true)
      : setSingleContentVisible(false);
    room === "dobles"
      ? setDobleContentVisible(true)
      : setDobleContentVisible(false);
    room === "triple"
      ? setTripleContentVisible(true)
      : setTripleContentVisible(false);
    room === "cuadruple"
      ? setCuadrupleContentVisible(true)
      : setCuadrupleContentVisible(false);
  }, [room]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setRoom(e.target.value);
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
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="input-contain">
          <select
            name="rooms"
            id="rooms"
            className="input-rooms"
            value={room}
            onChange={handleOnChange}
          >
            <option value="selectRoom">
              Selecciona la habitación que buscas
            </option>
            <option value="single">Single</option>
            <option value="dobles">Dobles</option>
            <option value="triple">Triple</option>
            <option value="cuadruple">Cuádruple</option>
          </select>
        </div>
        <div className="container">
          {singleContentVisible && <Single />}
          {dobleContentVisible && <Dobles />}
          {tripleContentVisible && <Triples />}
          {cuadrupleContentVisible && <Cuadruples />}
        </div>
      </Box>
    </>
  );
};

export default Habitaciones;
