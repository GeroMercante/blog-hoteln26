import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import Single from "../rooms/Single";
import Dobles from "../rooms/Dobles";
import Triples from "../rooms/Triples";
import Cuadruples from "../rooms/Cuadruples";
import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

import ADG from "../assets/utils/arrowdgold.svg";
import MDQ from "../assets/utils/mdq-mar.jpg";

const Habitaciones = () => {
  const [result, showResult] = useState(false);

  const [habitacion, setHabitacion] = useState("");
  const [room, setRoom] = useState("selectRoom");
  const [singleContentVisible, setSingleContentVisible] = useState(false);
  const [dobleContentVisible, setDobleContentVisible] = useState(false);
  const [tripleContentVisible, setTripleContentVisible] = useState(false);
  const [cuadrupleContentVisible, setCuadrupleContentVisible] = useState(false);
  const [mobileForm, setMobileForm] = useState(false);

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

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
    if (e.target.value === "single") {
      setHabitacion("habitacion_single");
    } else if (e.target.value === "dobles") {
      setHabitacion("habitacion_doble");
    } else if (e.target.value === "triple") {
      setHabitacion("habitacion_triple");
    } else if (e.target.value === "cuadruple") {
      setHabitacion("habitacion_cuadruple");
    } else {
      setHabitacion("");
    }
  };

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
    showResult(true);
    setMobileForm(false);
  };

  const handleShowModal = () => {
    setMobileForm(true);
  };

  const handleCloseModal = () => {
    setMobileForm(false);
  };

  let fechaActual = new Date();
  fechaActual = fechaActual.toISOString().split("T")[0];

  return (
    <>
      <div>{result ? <Result showResult={showResult} /> : null}</div>
      {mobileForm && (
        <MobileFormHab>
          <button onClick={handleCloseModal} className="cerrar-modal">
            <h4>
              Cerrar <AiOutlineClose />
            </h4>
          </button>
          <form onSubmit={sendEmail}>
            <div className="form-mobile">
              <h1 className="title-mobile">
                Reservá <br /> tu estadia
              </h1>
              <div className="group">
                <div className="data-form">
                  <label>Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre_del_usuario"
                    required
                  />
                </div>
                <div className="data-form">
                  <label>Apellido</label>
                  <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido_del_usuario"
                    required
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
                    minLength="8"
                    maxLength="55"
                    required
                  />
                </div>
                <div className="data-form">
                  <label>Celular</label>
                  <input
                    type="number"
                    placeholder="Celular"
                    name="celular_del_usuario"
                    min="10000000"
                    max="99999999999999999999"
                    required
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
                    placeholder="Check-in"
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
              <label for="type" className="no-visible">
                Habitación
              </label>
              <select
                name="habitaciones"
                id="type"
                value={habitacion}
                onChange={(e) => setHabitacion(e.target.value)}
                className="no-visible"
              >
                {room === "single" && (
                  <option value="habitacion_single" name="habitacion_single">
                    Single
                  </option>
                )}
                {room === "dobles" && (
                  <>
                    <option value="habitacion_doble" name="habitacion_doble">
                      Doble
                    </option>
                  </>
                )}
                {room === "triple" && (
                  <>
                    <option value="habitacion_triple" name="habitacion_triple">
                      Triple
                    </option>
                  </>
                )}
                {room === "cuadruple" && (
                  <>
                    <option
                      value="habitacion_cuadruple"
                      name="habitacion_cuadruple"
                    >
                      Cuádruple
                    </option>
                  </>
                )}
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
            <div className="marginbottom"></div>
          </form>
        </MobileFormHab>
      )}
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {!mobileForm && (
          <Button whileTap={{ scale: 0.8 }} onClick={handleShowModal}>
            R <br />
            E <br />
            S <br />
            E <br />
            R <br />
            V <br />
            A <br />
            R <br />
          </Button>
        )}

        <div className="contain-flex-70">
          <div className="grid-2">
            <div className="container">
              <div className="input-contain">
                <select
                  name="rooms"
                  id="rooms"
                  className="input-rooms"
                  value={room}
                  onChange={handleOnChange}
                >
                  <option value="selectRoom">Selecciona la habitación</option>
                  <option value="single">Single</option>
                  <option value="dobles">Dobles</option>
                  <option value="triple">Triple</option>
                  <option value="cuadruple">Cuádruple</option>
                </select>
              </div>
              {singleContentVisible && <Single />}
              {dobleContentVisible && <Dobles />}
              {tripleContentVisible && <Triples />}
              {cuadrupleContentVisible && <Cuadruples />}
            </div>
            <div className="contact-room">
              <div className="ascensor">
                <div className="container-form-hab">
                  <h2>
                    Reserva <br /> tu estadía
                  </h2>
                  {room === "selectRoom" && (
                    <p className="type-hab">Selecciona una habitación</p>
                  )}
                  {singleContentVisible && (
                    <p className="type-hab">Habitación Single</p>
                  )}
                  {dobleContentVisible && (
                    <p className="type-hab">Habitación Doble</p>
                  )}
                  {tripleContentVisible && (
                    <p className="type-hab">Habitación Triple</p>
                  )}
                  {cuadrupleContentVisible && (
                    <p className="type-hab">Habitación Cuádruple</p>
                  )}
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
                          />
                        </div>
                        <div className="data-form">
                          <label>Apellido</label>
                          <input
                            type="text"
                            placeholder="Apellido"
                            name="apellido_del_usuario"
                            required
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
                            minLength="8"
                            maxLength="55"
                            required
                          />
                        </div>
                        <div className="data-form">
                          <label>Celular</label>
                          <input
                            type="number"
                            placeholder="Celular"
                            name="celular_del_usuario"
                            min="10000000"
                            max="99999999999999999999"
                            required
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
                            placeholder="Check-in"
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
                      <label for="type" className="no-visible">
                        Habitación
                      </label>
                      <select
                        name="habitaciones"
                        id="type"
                        value={habitacion}
                        onChange={(e) => setHabitacion(e.target.value)}
                        className="no-visible"
                      >
                        {room === "single" && (
                          <option
                            value="habitacion_single"
                            name="habitacion_single"
                          >
                            Single
                          </option>
                        )}
                        {room === "dobles" && (
                          <>
                            <option
                              value="habitacion_doble"
                              name="habitacion_doble"
                            >
                              Doble
                            </option>
                          </>
                        )}
                        {room === "triple" && (
                          <>
                            <option
                              value="habitacion_triple"
                              name="habitacion_triple"
                            >
                              Triple
                            </option>
                          </>
                        )}
                        {room === "cuadruple" && (
                          <>
                            <option
                              value="habitacion_cuadruple"
                              name="habitacion_cuadruple"
                            >
                              Cuádruple
                            </option>
                          </>
                        )}
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
                    <div className="marginbottom"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

const MobileFormHab = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${MDQ});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .cerrar-modal {
    position: absolute;
    right: 5%;
    top: 5%;
    background: transparent;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
      font-size: 22px;
      color: #cd9746;
    }
  }

  .no-visible {
    display: none;
  }

  .form-mobile {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    padding: 50px 18px;
    border-radius: 16px;
    width: 365px;
    position: relative;
  }

  .group {
    display: flex;
    gap: 7px;
    margin-top: 11px;
  }
  .data-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      width: 100%;
      margin-top: 7px;
      margin-bottom: 7px;
      color: #cd9746;
      font-size: 15px;
      outline: none;
      border: none;
      padding: 10px 20px;
      ::placeholder {
        font-size: 15px;
      }
    }
  }
  .arrow {
    display: none;
  }
  label {
    font-size: 17px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    color: #000;
  }
  select {
    padding: 8px 17px;
    margin-top: 7px;
    color: #cd9746;
    border-radius: 8px;
    font-size: 15px;
  }
  .submitButton {
    position: absolute;
    right: 5%;
    bottom: 1%;
    font-size: 20px;
    padding: 8px 18px;
    border: #f2efe6;
    background: #cd9746;
    color: #fff;
    border-radius: 16px;
  }
`;

const Box = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 130px;
  margin-top: 130px;

  .contain-flex-70 {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-2 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 70px;
    height: 100%;
    .contact-room {
      height: 100%;
      position: relative;
      .type-hab {
        margin-top: 3rem;
        padding-left: 30px;
        font-size: 22px;
        font-weight: bold;
      }
      .ascensor {
        position: sticky;
        top: 100px;
      }
      .container-form-hab {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        background: #f2efe6;
        border-radius: 16px;
        padding: 40px 0px;
        width: 520px;
        h2 {
          text-align: left;
          padding-left: 30px;
          font-size: 44px;
          color: #000;
          line-height: 45px;
        }
      }
      .padding-aling-form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin-top: 2rem;
        padding-left: 30px;
        text-align: left;
        .group {
          display: flex;
          gap: 1rem;
          input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(89%) sepia(70%) saturate(705%) hue-rotate(300deg)
              brightness(95%) contrast(99%);
            padding-right: 10px;
          }
        }
        .data-form {
          display: flex;
          flex-direction: column;
          input {
            border: 2px solid #cd9746;
            padding: 8px 1px;
            margin-top: 7px;
            margin-bottom: 17px;
            color: #cd9746;
            font-size: 17px;
            background: #f2efe6;
            width: 155px;
            ::placeholder {
              color: #cd9746;
              padding-left: 11px;
              font-size: 17px;
              font-weight: 100;
            }
          }
        }
        .arrow {
          width: 45px;
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
        font-size: 19px;
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
        background: #f2efe6;
      }
      .submitButton {
        position: absolute;
        right: 17%;
        bottom: 5%;
        font-size: 24px;
        padding: 11px 30px;
        border-radius: 999px;
        color: #fff;
        background: #cd9746;
        cursor: pointer;
      }

      h1 {
        position: sticky;
        top: 0;
        height: 100%;
      }
    }
  }
  .marginbottom {
    margin-bottom: 4rem;
  }
  .input-contain {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .input-rooms {
      width: 100%;
      padding: 11px 50px;
      font-size: 19px;
      outline: none;
      border: 3px solid #cd9746;
      background-color: #fff;
      color: #cd9746;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: url(${ADG}) 97% / 0% no-repeat;
      background-size: 20px;
      @media screen and (max-width: 800px) {
        width: 75%;
        padding: 11px 1px;
        font-size: 14px;
      }
    }
  }
  .no-visible {
    display: none;
  }
  .container {
    width: 800px;
    height: auto;
    background-color: #fff;
    padding: 20px;
    min-height: 200px;
  }

  @media screen and (max-width: 1150px) {
    .grid-2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .contact-room {
      display: none;
    }
    .input-contain {
      justify-content: center;
    }
  }
`;

const Button = styled(motion.button)`
  display: none;

  @media screen and (max-width: 1150px) {
    display: block;
    position: fixed;
    left: 0;
    top: 30%;
    background: #cd9746;
    color: #fff;
    padding: 8px 17px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }

  @media screen and (max-width: 550px) {
    padding: 5px 11px;
    font-size: 17px;
  }
`;

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
`;

export default Habitaciones;
