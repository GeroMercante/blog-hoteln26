import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";

// imagen
import ADG from "../assets/utils/arrowdgold.svg";

// iconos
import { IoCloseOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdDone } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Result = ({ showResult }) => {
  return (
    <BoxOk>
      <OkMsg>
        <div className="container-modal-done">
          <div className="logo-close">
            <h5 onClick={() => showResult(false)}>
              Cerrar <AiOutlineClose className="icon-close" />
            </h5>
          </div>
          <div className="logo">
            <MdDone />
          </div>
          <h1>
            Reserva <br />
            <span>exitosa</span>
          </h1>
          <h4>
            Tu reserva ha sido realizada con éxito. <br /> Rebibirás una
            respuesta en breve. <br />
            Muchas gracias
          </h4>
        </div>
      </OkMsg>
    </BoxOk>
  );
};

const FormData = ({ children, estado, cambiarEstado }) => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b32xe8s",
        "template_9u3w5ot",
        e.target,
        "XJohwDrinL6V5Qaty"
      )
      .then((respone) => console.log(respone))
      .catch((error) => console.log(error));
    e.target.reset();
    cambiarEstado(false);
    showResult(true);
  };

  let fechaActual = new Date();
  fechaActual = fechaActual.toISOString().split("T")[0];

  return (
    <>
      <div>{result ? <Result showResult={showResult} /> : null}</div>
      {estado && (
        <BoxModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContainModal>
            <div className="title">
              <div>
                <h3>
                  Reserva <br /> tu estadía
                </h3>
              </div>
              <div>
                <button onClick={() => cambiarEstado(false)}>
                  Cerrar <IoCloseOutline />
                </button>
              </div>
            </div>
            <form onSubmit={sendEmail}>
              <div className="padding-aling-form">
                <div className="group">
                  <div className="data-form">
                    <label>Nombre</label>
                    <input
                      type="text"
                      placeholder="Nombre"
                      name="nombre_del_usuario"
                      required
                      minLength="3"
                      maxLength="55"
                    />
                  </div>
                  <div className="data-form">
                    <label>Apellido</label>
                    <input
                      type="text"
                      placeholder="Apellido"
                      name="apellido_del_usuario"
                      required
                      minLength="3"
                      maxLength="55"
                    />
                  </div>
                </div>
                <div className="group">
                  <div className="data-form">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email_del_usuario"
                      required
                      minLength="8"
                      maxLength="55"
                    />
                  </div>
                  <div className="data-form">
                    <label>Celular</label>
                    <input
                      type="number"
                      placeholder="Celular"
                      name="celular_del_usuario"
                      required
                      min="10000000"
                      max="99999999999999999999"
                    />
                  </div>
                </div>
                <div className="group">
                  <div className="data-form">
                    <label>Fecha de ingreso</label>
                    <input
                      type="date"
                      name="fecha_ingreso"
                      min={fechaActual}
                      required
                    />
                  </div>
                  <div className="arrow">
                    <HiArrowLongRight />
                  </div>
                  <div className="data-form">
                    <label>Fecha de salida</label>
                    <input
                      type="date"
                      name="fecha_salida"
                      min={fechaActual}
                      required
                    />
                  </div>
                </div>
                <label htmlFor="type">Habitación</label>
                <select
                  name="habitaciones"
                  id="type"
                  className="select-custom"
                  required
                >
                  <option value="Habitación Single" name="habitacion_doble">
                    Single
                  </option>
                  <option value="Habitación Doble" name="habitacion_triple">
                    Doble
                  </option>
                  <option value="Habitación Triple" name="habitacion_cuadruple">
                    Triple
                  </option>
                  <option
                    value="Habitación Cuadruple"
                    name="habitacion_cuadruple"
                  >
                    Cuádruple
                  </option>
                </select>
                <motion.button
                  type="submit"
                  className="submitButton"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                >
                  Reservar
                </motion.button>
              </div>
            </form>
          </ContainModal>
          {children}
        </BoxModal>
      )}
    </>
  );
};

const BoxModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 22;
`;

const ContainModal = styled.div`
  width: 600px;
  height: 90vh;
  background: #f2efe6;
  position: relative;
  border-radius: 16px;
  z-index: 9999;
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(89%) sepia(70%) saturate(705%) hue-rotate(300deg)
      brightness(95%) contrast(99%);
  }
  .select-custom {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${ADG}) 90% / 9% no-repeat;
    background-size: 18px;
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3 {
      padding-left: 4rem;
      text-align: left;
      margin-top: 7rem;
      line-height: 55px;
      color: #000;
      font-size: 60px;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
    }
    button {
      padding-right: 3rem;
      padding-top: 1.5rem;
      color: #cd9746;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      svg {
        background: transparent;
        margin-left: 7px;
        color: #cd9746;
        font-size: 40px;
        transition: 150ms;
        :hover {
          font-size: 44px;
        }
      }
    }
  }
  .padding-aling-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2rem;
    padding-left: 4rem;
    text-align: left;
    .group {
      display: flex;
      gap: 1rem;
    }
    .data-form {
      display: flex;
      flex-direction: column;
      input {
        border: 2px solid #cd9746;
        padding: 11px 1px;
        margin-top: 7px;
        margin-bottom: 17px;
        color: #cd9746;
        font-size: 20px;
        ::placeholder {
          color: #cd9746;
          padding-left: 11px;
          font-size: 20px;
          font-weight: 100;
        }
      }
    }
    .arrow {
      width: 53px;
      position: relative;
      bottom: -40px;
      svg {
        width: 100%;
        font-size: 40px;
        color: #cd9746;
      }
    }
  }
  label {
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
  select {
    border: 2px solid #cd9746;
    padding: 11px 31px;
    margin-top: 7px;
    color: #cd9746;
    border-radius: 8px;
    font-size: 20px;
  }
  .submitButton {
    position: absolute;
    right: 8%;
    bottom: 5%;
    font-size: 24px;
    padding: 11px 22px;
    border-radius: 999px;
    color: #fff;
    background: #cd9746;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    width: 340px;
    height: 70vh;
    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      h3 {
        padding-left: 1rem;
        text-align: left;
        margin-top: 1rem;
        line-height: 25px;
        font-size: 30px;
      }
      button {
        padding-right: 1rem;
        padding-top: 0.5rem;
        cursor: pointer;
      }
    }
    .padding-aling-form {
      width: 100%;
      display: flex;
      justify-content: center !important;
      align-items: center !important;
      flex-direction: column !important;
      margin-top: 2rem;
      padding: 0px;
      .group {
        display: flex;
        gap: 7px;
      }
      .data-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input {
          width: 120px !important;
          padding: 8px 0px;
          margin-top: 7px;
          margin-bottom: 7px;
          color: #cd9746;
          font-size: 15px;
          ::placeholder {
            font-size: 15px;
          }
        }
      }
      .arrow {
        display: none;
      }
    }
    label {
      font-size: 17px;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
    }
    select {
      padding: 8px 17px;
      margin-top: 7px;
      color: #cd9746;
      border-radius: 8px;
      font-size: 15px;
    }
    .submitButton {
      font-size: 20px;
      padding: 8px 18px;
    }
  }
`;
const BoxOk = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 22;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OkMsg = styled.div`
  width: 500px;
  height: 650px;
  background: #f2efe6;
  z-index: 22;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .container-modal-done {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .logo-close {
      position: absolute;
      right: 5%;
      top: 3%;
      color: #cd9746;
      h5 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        gap: 5px;
        cursor: pointer;
        .icon-close {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
    .logo {
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      border: 7px solid #cd9746;
      svg {
        width: 100%;
        height: 100%;
        color: #cd9746;
      }
    }
    h1 {
      font-family: "Poppins", sans-serif;
      color: #000;
      font-size: 74px;
      line-height: 74px;
      font-weight: bold;
      text-align: center;
      margin-top: 1.2rem;
      span {
        font-size: 84px;
      }
    }
    h4 {
      text-align: center;
      font-family: "Poppins";
      font-weight: 100;
      margin-top: 1.2rem;
    }
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export default FormData;
