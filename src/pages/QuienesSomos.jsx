import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import Header from "../assets/home/mdq.png";
import OlasGold from "../assets/utils/OG.svg";
import PruebaIma from "../assets/galeria/07.jpg";
import OB from "../assets/utils/OB2l.svg";
import FormData from "../components/FormData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const Box = styled(motion.div)`
  position: relative;
  top: -80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20vh;
    position: relative;
    h1 {
      font-size: 47px;
      font-family: "Poppins", sans-serif;
      font-weight: bolder;
    }
    img {
      position: absolute;
      width: 220px;
      bottom: -45px;
      object-fit: contain;
    }
    @media screen and (max-width: 960px) {
      width: 100%;
      display: flex;
      text-align: center;
      justify-content: center;
      h1 {
        font-size: 37px;
        color: #000;
      }
      img {
        left: 50%;
        transform: translate(-50%, -50%);
        top: 120px;
      }
    }
  }
  .quienes-home {
    width: 70%;
    height: 50vh;
    position: relative;
    display: flex;
    align-items: flex-start;
    text-align: left;
    justify-content: first baseline;
    gap: 7rem;

    .swiper-contain-about {
      img {
        width: 500px;
        height: 410px;
        @media screen and (max-width: 960px) {
          width: 300px;
          height: 300px;
        }
      }
    }
    .title-qs {
      h3 {
        font-size: 40px;
        font-family: "Poppins", sans-serif;
        font-style: italic;
        font-weight: 100;
      }
      p {
        margin: 30px 0;
        font-size: 20px;
        font-weight: 100;
        color: #64646a;
        width: 700px;
      }
      @media screen and (max-width: 650px) {
        h3 {
          text-align: center;
          font-size: 37px;
        }
        p {
          margin: 20px 0;
          text-align: center;
        }
      }
      @media screen and (max-width: 500px) {
        h3 {
          text-align: center;
          font-size: 40px;
        }
        p {
          width: 320px;
          font-size: 20px;
          margin: 20px 0;
          text-align: center;
        }
      }
    }
    @media screen and (max-width: 1420px) {
      width: 100%;
      height: 90vh;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin-top: 3rem;
    }
  }
  .mision {
    margin-top: 10rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 110vh;
    @media screen and (max-width: 500px) {
      justify-content: flex-end;
      gap: 5rem;
      margin-top: 12rem;
      height: 150vh;
      margin-bottom: 8rem;
    }
    .subtitle {
      h2 {
        color: #cd9746;
        font-size: 44px;
        font-family: "Poppins", sans-serif;
        font-style: italic;
        margin-bottom: 1.7rem;
        font-weight: 100;
      }
      p {
        font-size: 23px;
        margin-left: 11px;
        margin-right: 11px;
        color: #64646a;
      }
      @media screen and (max-width: 500px) {
        h2 {
          font-size: 30px;
        }
        p {
          font-size: 20px;
          width: 335px;
        }
      }
    }
  }
  .ola-right {
    position: absolute;
    width: 500px;
    right: -140px;
    top: -600px;
    z-index: -1;
    @media screen and (max-width: 1420px) {
      display: none;
    }
  }
  .ola-left {
    position: absolute;
    width: 500px;
    left: -160px;
    z-index: -1;
    top: 40px;
    transform: rotateY(180deg);
    @media screen and (max-width: 1420px) {
      display: none;
    }
  }

  .swiper {
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-mision {
    height: 30vh;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 24px;
      letter-spacing: 1px;
    }

    p {
      font-size: 20px;
      width: 575px;
      text-align: center;
    }
    @media screen and (max-width: 1080px) {
      display: none;
    }
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev:after {
    color: #cd9746 !important;
    padding: 11px;
    border-radius: 999px;
    border: 1px solid #c1c1c6;
  }
  .swiper-button-next:after {
    color: #cd9746 !important;
    padding: 11px;
    border-radius: 999px;
    border: 1px solid #c1c1c6;
  }

  @media screen and (max-width: 1080px) {
    .swiper-title {
      display: none;
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
    font-family: "Poppins", sans-serif;
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

const QuienesSomos = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [mostrarReserva, setMostrarReserva] = useState(true);

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
        <img src={OB} alt="Olas N26" className="ola-right" />
        <img src={OB} alt="Olas N26" className="ola-left" />

        <div className="header-image">
          <img src={Header} alt="" />
        </div>
        <div className="title">
          <h1>¿Quiénes somos?</h1>
          <img src={OlasGold} alt="Olas Gold N26" />
        </div>
        <div className="quienes-home">
          <div className="swiper-contain-about">
            <img src={PruebaIma} alt="" />
          </div>
          <div className="title-qs">
            <h3>Nuestro Hotel</h3>
            <p>
              El hotel N26 es un ícono de Mar del Plata, que sin perder <br />{" "}
              su estilo clásico, asombra con su moderna renovación <br />y con
              un fuerte compromiso con la cultura.
            </p>
            <p>
              Sus inslataciones reciben al visitante con elegancia y <br />{" "}
              confort propios de un hotel con estilo e historia. La puesta{" "}
              <br /> en valor de sus instalaciones originales permite disfrutar{" "}
              <br /> de servicios de calidad en un ambiente con carácter.
            </p>
            <p>
              Viva todo el año la experiencia de un hotel único, con <br />{" "}
              historia, moderno y elegante.
            </p>
          </div>
        </div>
        <div className="mision">
          <div className="subtitle">
            <h2>Nuestra Misión</h2>
            <p>
              Ofrecer un servicio de calidad y confort, mediante la Mejora
              Continua de Procesos, alineados a nuestros valores, <br /> creando
              con ello la satifacción de afiliados y clientes. Darnos a conocer
              por nuestros servicios y atención <br /> única en nuestra
            </p>
          </div>
          <div className="subtitle">
            <h2>Nuestra Visión</h2>
            <p>
              Ser reconocidos, elegidos y destacados en el rubro hotelero por
              nuestro compromiso en ofrecer un servicio <br /> excepcional,
              cálido y genuino manteniendo relaciones de confianza con afiliados
              y clientes que prosperan en <br /> el tiempo.
            </p>
          </div>
          <div className="subtitle swiper-title">
            <h2>Nuestos Valores</h2>
          </div>
          <div className="swiper-mision">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              autoplay={{
                delay: 5500,
                disableOnInteraction: true,
              }}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <h3>Compromiso</h3>
                <p>
                  Nuestro compromiso como valor más destacado, nuestro
                  compromiso con nuestro afiliado, con nuestros clientes y
                  pares.{" "}
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Excelencia</h3>
                <p>
                  La excelencia como sinónimo de calidad, nos esmeramos en cada
                  uno de los procesos de trabajo para poder entregar a nuestro
                  cliente un servicio de excelencia, optimizando los recursos
                  materiales y enfocándonos en la Mejora Continua.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Respeto</h3>
                <p>
                  El respeto por nuestros colegas, nuestros superiores y nuestro
                  personal a cargo. El respeto por quien está en proceso de
                  aprendizaje. El respeto a nuestro cliente y proveedor. El
                  respeto a la comunidad en donde vivimos, el respeto al
                  medioambiente.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Integridad</h3>
                <p>
                  Actuar con transparencia y honestidad cada día de nuestras
                  vidas. Honestidad y transparencia con nuestro compañero de
                  trabajo, con nuestros superiores, con nuestro empleador, con
                  nuestro cliente y con nuestra propia familia.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Box>
    </>
  );
};

export default QuienesSomos;
