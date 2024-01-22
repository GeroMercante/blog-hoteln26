import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// imagenes
import Header from "../../assets/home/mdq.png";
import OlasGold from "../../assets/utils/OG.svg";
import PruebaIma from "../../assets/galeria/05.jpg";
import OB from "../../assets/utils/OB2l.svg";
import Mailsvg from "../../assets/utils/email.svg";

// iconos
import { AiOutlineClose } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Box, BoxOk, OkMsg } from "./ContactoStyle";

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
                  <span>
                    <a href="tel:+5402236260043">+54 (0223)-6260043</a>
                  </span>
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

export default Contacto;
