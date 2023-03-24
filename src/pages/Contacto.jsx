import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../assets/home/slide01.jpg";
import { TbMail } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import OlasGold from "../assets/utils/OG.svg";
import PruebaIma from "../assets/galeria/5.jpg";
import OB from "../assets/utils/OB2l.svg";
import { MdDone } from "react-icons/md";

const Box = styled(motion.section)`
  position: relative;
  top: -80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;

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
    height: 110vh;
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
          font-family: "Playfair Display";
          margin-bottom: 1rem;
        }
        .data {
          display: flex;
          margin-top: 1rem;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          svg {
            color: green;
            font-size: 25px;
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
          font-family: "Playfair Display";
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
      bottom: 150px;
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
      height: 205vh;
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
    bottom: -50px;
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
  width: 400px;
  height: 700px;
  background: #fff;
  z-index: 22;
  display: flex;
  justify-content: center;
  align-items: center;
  .container-modal-done {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
      font-family: "Playfair Display";
      color: #000;
      font-size: 74px;
      line-height: 74px;
      font-weight: 100;
      text-align: center;
      margin-top: 1.2rem;
    }
    h4 {
      text-align: center;
      font-family: "Poppins";
      font-weight: 100;
      margin-top: 1.2rem;
    }
  }
`;

const Result = () => {
  return (
    <BoxOk>
      <OkMsg>
        <div className="container-modal-done">
          <div className="logo">
            <MdDone />
          </div>
          <h1>
            Mensaje <br />
            enviado
          </h1>
          <h4>
            Tu mensaje ha sido enviado con éxito. <br /> Rebibirás una respuesta
            en breve. <br />
            ¡Muchas gracias!
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

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <>
      <div>{result ? <Result /> : null}</div>
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
                <IoLocationSharp />
                <h3>
                  <span>Güemes 3041</span> entre las calles <br />
                  Alvarado y Avellaneda
                </h3>
              </div>
              <div className="data">
                <BsTelephoneFill />
                <h3>
                  <span>(+ 54) 2345-222222</span>
                </h3>
              </div>
              <div className="data">
                <TbMail />
                <h3>
                  <span>
                    <a href="mailto:info@hoteln26.com">info@hoteln26.com</a>
                  </span>
                </h3>
              </div>
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
                  />
                  <input
                    type="email"
                    name="email_del_usuario"
                    required
                    placeholder="Email"
                    className="responsive"
                  />
                  <input
                    type="number"
                    name="telefono_del_usuario"
                    required
                    placeholder="Teléfono"
                    className="responsive"
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

export default Contacto;
