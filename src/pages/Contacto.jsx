import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";

// imagenes
import Header from "../assets/home/mdq.png";
import OlasGold from "../assets/utils/OG.svg";
import PruebaIma from "../assets/galeria/05.jpg";
import OB from "../assets/utils/OB2l.svg";
import Mailsvg from "../assets/utils/email.svg";

// iconos
import { AiOutlineClose } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";


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

const Contacto = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9brj6r7",
        "template_sh95oyh",
        e.target,
        "ijDU1olCVDaRAQsKH"
      )
      .then((respone) => console.log(respone))
      .catch((error) => console.log(error));
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      <div>{result ? <Result showResult={showResult} /> : null}</div>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <img src={OB} alt="Ola N26" className="ola-right" />
        <img src={OB} alt="Ola N26" className="ola-left" />
        <div className="header-image">
          <img src={Header} alt="" />
        </div>
        <div className="title">
          <h3>Contacto</h3>
          <img src={OlasGold} alt="olas" />
        </div>
        <div className="flex-box">
          <div className="grid-2">
            <div className="data-contact">
              <h2>Hotel N26</h2>
              <div className="data">
                <IoLocationSharp className="location-relative" />
                <h3 className="op-text">
                  <span>Güemes 3041</span> entre las calles <br />
                  Alvarado y Avellaneda
                </h3>
              </div>
              <div className="data">
                <BsTelephoneFill />
                <h3>
                  <span>(+ 54) 2234-491720</span>
                </h3>
              </div>
              <div className="data">
                <img src={Mailsvg} alt="mail" className="mail-log" />
                <h3>
                  <span className="op-text">
                    <a href="mailto:info@hoteln26.com">info@hoteln26.com</a>
                  </span>
                </h3>
              </div>
              <div className="data">
                <h3 className="data-text-j">
                  <span>
                    <a href="mailto:info@hoteln26.com">
                      Si queres ser parte de nuestro equipo <br />
                    </a>
                  </span>
                  de trabajo envianos tu CV a nuestro mail. En el asunto
                  contanos al puesto que te queres postular.
                </h3>
              </div>
              <a href="mailto:info@hoteln26.com">
                <motion.button
                  className="btn-service"
                  whileHover={{ scale: 1.1 }}
                >
                  Trabajá con nosotros <IoIosArrowForward />
                </motion.button>
              </a>
              <img src={PruebaIma} alt="foto galeria" className="img-finish" />
            </div>
            <div className="data-form">
              <h1 className="form-title">Formulario de Contacto</h1>
              <form onSubmit={sendEmail}>
                <div className="flex-form">
                  <label>Introduzca sus datos:</label>
                  <input
                    type="text"
                    name="nombre_del_usuario"
                    required
                    placeholder="Nombre"
                    className="responsive"
                    minLength="3"
                    maxLength="55"
                  />
                  <input
                    type="email"
                    name="email_del_usuario"
                    required
                    placeholder="Email"
                    className="responsive"
                    minLength="8"
                    maxLength="55"
                  />
                  <input
                    type="number"
                    name="telefono_del_usuario"
                    required
                    placeholder="Teléfono"
                    className="responsive"
                    min="10000000"
                    max="99999999999999999999"
                  />
                </div>
                <div className="flex-form-area">
                  <label>Comentarios/Constultas:</label>
                  <textarea
                    name="consulta_del_usuario"
                    cols="30"
                    rows="10"
                    placeholder="Comentario/Consultas"
                    className="responsive-textarea"
                  ></textarea>
                </div>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  className="btn-smt"
                >
                  Enviar
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

const Box = styled(motion.section)`
  position: relative;
  top: -80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;

  .btn-service {
    margin-top: 18px;
    font-size: 17px;
    font-weight: 300;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    background: transparent;
    border: 2px solid #a59e94;
    padding: 9px 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      color: #fff;
      border: #cd9746;
      background: #cd9746;
    }
    @media screen and (max-width: 650px) {
      position: relative;
      font-size: 16px;
      bottom: -2rem;
      margin-top: 0;
    }
  }

  .header-image {
    height: 35vh;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    width: 70%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h3 {
      font-size: 47px;
      font-family: "Poppins", sans-serif;
      font-weight: bolder;
    }
    img {
      width: 220px;
      object-fit: cover;
      height: fit-content;
    }
    @media screen and (max-width: 1468px) {
      h3 {
        color: #000;
      }
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
  .flex-box {
    width: 70%;
    height: 115vh;
    display: flex;
    align-items: flex-start;
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10rem;

      .data-contact {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        @media screen and (max-width: 1468px) {
          justify-content: center;
          align-items: center;
        }
        h2 {
          font-weight: 100;
          font-size: 40px;
          font-family: "Poppins" sans-serif;
          margin-bottom: 1rem;
        }
        .data {
          display: flex;
          margin-top: 1rem;
          justify-content: center;
          align-items: center;
          gap: 9px;
          .mail-log {
            width: 38px;
            height: 38px;
            position: relative;
            left: -5px;
          }
          .op-text {
            position: relative;
            left: -5px;
          }
          .data-text-j {
            color: #a6a6a4;
            width: 371px;
            font-size: 17px;
            span {
              color: #000;
            }
          }
          .location-relative {
            position: relative;
            top: -10px;
            left: -5px;
            font-size: 32px;
          }
          svg {
            color: #67b066;
            font-size: 25px;
            position: relative;
          }
          h3 {
            font-size: 20px;
            font-weight: 100;
            font-family: "Poppins", sans-serif;
            span {
              font-weight: bold;
            }
          }
        }
      }
      .img-finish {
        margin-top: 3rem;
        width: 450px;
        height: 450px;
      }
      .data-form {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        position: relative;
        min-width: 500px;
        .form-title {
          font-weight: 100;
          font-size: 40px;
          font-family: "Poppins" sans-serif;
          @media screen and (max-width: 650px) {
            font-size: 30px;
          }
        }
        .flex-form {
          display: flex;
          flex-direction: column;
          label {
            margin: 1rem 0;
            font-size: 15px;
            font-family: "Poppins";
          }
          input {
            width: 500px;
            margin: 0.4rem 0;
            padding: 10px 0;
            border: none;
            outline: none;
            color: #cd9746;
            border: 2px solid #cd9746;
            font-size: 17px;
            padding-left: 10px;
            ::placeholder {
              padding-left: 10px;
              color: #cd9746;
              font-size: 17px;
            }
          }
        }
        .flex-form-area {
          display: flex;
          flex-direction: column;
          label {
            margin: 1rem 0;
          }
          textarea {
            min-height: 100px;
            min-width: 500px;
            max-width: 500px;
            max-height: 170px;
            border: none;
            outline: none;
            border: 2px solid #cd9746;
            font-size: 17px;
            padding-left: 11px;
            padding-top: 8px;
            ::placeholder {
              color: #cd9746;
            }
          }
        }
        @media screen and (max-width: 1468px) {
          justify-content: center;
          align-items: center;
          input {
            width: 300px;
            margin: 0rem 0;
            padding: 10px 0;
            font-size: 15px;
            ::placeholder {
              font-size: 15px;
            }
          }
        }
      }
      @media screen and (max-width: 1468px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    .btn-smt {
      background: #cd9746;
      color: #fff;
      position: absolute;
      bottom: 330px;
      left: 0;
      padding: 8px 43px;
      cursor: pointer;
      border-radius: 999px;
      font-size: 23px;
      letter-spacing: 1px;
      font-weight: bold;
      transition: 150ms;
      :hover {
        color: #cd9746;
        background: #fff;
        border: 2px solid #cd9746;
      }
    }
    @media screen and (max-width: 1468px) {
      height: 1550px;
      width: 100%;
      justify-content: center;
      align-items: flex-start;
      text-align: center;
    }
  }

  @media screen and (max-width: 1468px) {
    .data-form {
      justify-content: center !important;
      align-items: center !important;
      min-width: auto !important;
    }
    .responsive {
      width: 300px !important;
    }
    .responsive-textarea {
      min-width: 300px !important;
    }
    .img-finish {
      width: 300px !important;
      height: 300px !important;
    }
    .btn-smt {
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      bottom: -100px !important;
    }
  }

  .ola-right {
    position: absolute;
    z-index: -2;
    top: 20%;
    width: 550px;
    height: 300px;
    right: -200px;
    @media screen and (max-width: 1468px) {
      display: none;
    }
  }
  .ola-left {
    position: absolute;
    z-index: -2;
    bottom: -170px;
    width: 550px;
    height: 300px;
    left: -200px;
    @media screen and (max-width: 1468px) {
      display: none;
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

export default Contacto;
