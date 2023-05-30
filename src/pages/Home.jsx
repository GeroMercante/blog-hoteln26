// React - Router - Styles
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Swiper Slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

// external components
import FormData from "../components/FormData";

// assets - banner
import imgh1 from "../assets/home/mdq.png";
import imgh2 from "../assets/home/habitacion.png";
import imgh3 from "../assets/home/desayuno.png";
import imgh4 from "../assets/home/patio.png";
import imgh5 from "../assets/home/recepcion.png";

// assets - utils
import OG from "../assets/utils/OG.svg";
import OW from "../assets/utils/OW.svg";
import OB from "../assets/utils/OB.svg";

// assets - icons
import Icon1 from "../assets/icon/Icono_1.svg";
import Icon2 from "../assets/icon/Icono_2.svg";
import Icon3 from "../assets/icon/Icono_3.svg";
import Icon4 from "../assets/icon/Icono_4.svg";
import Icon5 from "../assets/icon/Icono_5.svg";
import Icon6 from "../assets/icon/Icono_6.svg";
import Icon7 from "../assets/icon/Icono_7.svg";

// icons react
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);

  return (
    <>
      <FormData estado={estadoModal} cambiarEstado={cambiarEstadoModal} />
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 5500,
            disableOnInteraction: true,
          }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box>
              <div className="text-contain">
                <div className="text">
                  <h1>A cuadras del mar</h1>
                </div>
                <div className="img-contain">
                  <img src={OW} alt="" />
                </div>
                <div>
                  <button
                    className="btn-reservas"
                    onClick={() => cambiarEstadoModal(!estadoModal)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <div className="text-contain-2">
                <div className="text">
                  <h1>
                    Habitaciones <br /> confortables
                  </h1>
                </div>
                <div className="img-contain">
                  <img src={OW} alt="" />
                </div>
                <div>
                  <button
                    className="btn-reservas"
                    onClick={() => cambiarEstadoModal(!estadoModal)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box>
              <div className="text-contain-3">
                <div className="text">
                  <h1>
                    Desayuno <br /> continental
                  </h1>
                </div>
                <div className="img-contain">
                  <img src={OW} alt="" />
                </div>
                <div>
                  <button
                    className="btn-reservas"
                    onClick={() => cambiarEstadoModal(!estadoModal)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box>
              <div className="text-contain-4">
                <div className="text">
                  <h1>Patio interno</h1>
                </div>
                <div className="img-contain">
                  <img src={OW} alt="" />
                </div>
                <div>
                  <button
                    className="btn-reservas"
                    onClick={() => cambiarEstadoModal(!estadoModal)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box>
              <div className="text-contain-5">
                <div className="text">
                  <h1>
                    Atención <br /> personalizada
                  </h1>
                </div>
                <div className="img-contain">
                  <img src={OW} alt="" />
                </div>
                <div>
                  <button
                    className="btn-reservas"
                    onClick={() => cambiarEstadoModal(!estadoModal)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Acomodo></Acomodo>
      <Servicios>
        <div className="svg-ola-left">
          <img src={OB} alt="ola negra n26" />
        </div>
        <div className="svg-ola-right">
          <img src={OB} alt="ola negra n26" />
        </div>
        <div className="title-service">
          <h3>Servicios</h3>
          <img src={OG} alt="Ola gold Hotel N26" />
        </div>
        <div className="flex-items">
          <div className="grid-3">
            <div className="item-services">
              <img src={Icon1} alt="Icono Hotel N26" className="aire" />
              <h3>Aire acondicionado</h3>
            </div>
            <div className="item-services">
              <img src={Icon2} alt="Icono Hotel N26" />
              <h3>Caja de seguridad</h3>
            </div>
            <div className="item-services hidden">
              <img src={Icon3} alt="Icono Hotel N26" />
              <h3>TV Smart 32"</h3>
            </div>
          </div>
          <div className="grid-4">
            <div className="item-services">
              <img src={Icon4} alt="Icono Hotel N26" />
              <h3>Recepción 24hs</h3>
            </div>
            <div className="item-services">
              <img src={Icon5} alt="Icono Hotel N26" className="wifi" />
              <h3>Servicio WiFi Gratuito</h3>
            </div>
            <div className="item-services">
              <img src={Icon6} alt="Icono Hotel N26" />
              <h3>Consigna de equipaje</h3>
            </div>
            <div className="item-services">
              <img src={Icon7} alt="Icono Hotel N26" />
              <h3>Desayuno continental</h3>
            </div>
          </div>
          <Link to="/habitaciones">
            <motion.button className="btn-service" whileHover={{ scale: 1.1 }}>
              Todos nuestros servicios <IoIosArrowForward />
            </motion.button>
          </Link>
        </div>
      </Servicios>
      <Blank></Blank>
    </>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Box = styled(motion.div)`
  height: 101vh;
  width: 100%;
  border-bottom: 7px solid #cd9746;
  @media screen and (max-width: 930px) {
    height: 100vh;
  }
  @media screen and (max-width: 650px) {
    height: 100vh;
  }
  .btn-reservas {
    font-size: 27px;
    margin-top: 3.7rem;
    padding: 11px 35px;
    border: none;
    outline: none;
    color: #fff;
    background: #cd9746;
    border-radius: 999px;
    cursor: pointer;
    transition: 250ms ease-in-out;
    :hover {
      color: #cd9746;
      background: #fff;
    }
    @media screen and (max-width: 650px) {
      font-size: 20px;
      padding: 11px 22px;
    }
  }

  .img-contain {
    width: fit-content;
    @media screen and (max-width: 650px) {
      width: 200px;
    }
  }

  .text-contain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${imgh1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 8rem;
    h1 {
      font-size: 90px;
      font-weight: 900;
      text-transform: uppercase;
      color: #fff;
      font-family: "Cunia", sans-serif;
      font-style: bold;
      @media screen and (max-width: 650px) {
        font-size: 40px;
        width: 300px;
        text-shadow: 1px 2px #000;
      }
    }
  }
  .text-contain-2 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${imgh2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 8rem;
    h1 {
      font-size: 90px;
      font-weight: 900;
      text-transform: uppercase;
      color: #fff;
      font-family: "Cunia", sans-serif;
      font-style: bold;
      @media screen and (max-width: 650px) {
        font-size: 30px;
        width: 300px;
        text-shadow: 1px 2px #000;
      }
    }
  }

  .text-contain-3 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${imgh3});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 8rem;
    h1 {
      text-transform: uppercase;
      font-size: 90px;
      font-weight: 900;
      color: #fff;
      font-family: "Cunia", sans-serif;
      font-style: bold;
      @media screen and (max-width: 650px) {
        font-size: 35px;
        width: 300px;
        text-shadow: 1px 2px #000;
      }
    }
  }

  .text-contain-4 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${imgh4});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 8rem;
    h1 {
      font-size: 90px;
      font-weight: 900;
      text-transform: uppercase;
      color: #fff;
      font-family: "Cunia", sans-serif;
      font-style: bold;
      @media screen and (max-width: 650px) {
        font-size: 40px;
        width: 300px;
        text-shadow: 1px 2px #000;
      }
    }
  }

  .text-contain-5 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${imgh5});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 8rem;
    h1 {
      font-size: 90px;
      font-weight: 900;
      text-transform: uppercase;
      color: #fff;
      font-family: "Cunia", sans-serif;
      font-style: bold;
      @media screen and (max-width: 650px) {
        font-size: 30px;
        width: 300px;
        text-shadow: 1px 2px #000;
      }
    }
  }
`;

const Acomodo = styled.div`
  width: 100vw;
  height: 93vh;
  justify-content: space-between;
  display: flex;
  align-items: center;
  z-index: -1;
`;

const Servicios = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  @media screen and (max-width: 1250px) {
    height: 120vh;
  }
  @media screen and (max-width: 650px) {
    height: 950px;
  }
  .svg-ola-left {
    position: absolute;
    left: -150px;
    top: 265px;
    width: 500px;
    z-index: -1;
    transform: rotateZ(180deg);
    @media screen and (max-width: 1250px) {
      width: 300px;
    }
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  .svg-ola-right {
    position: absolute;
    right: -150px;
    bottom: 15%;
    width: 500px;
    z-index: -1;
    @media screen and (max-width: 1250px) {
      width: 300px;
    }
    @media screen and (max-width: 650px) {
      display: none;
    }
  }

  .title-service {
    position: absolute;
    top: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1250px) {
      top: 3%;
    }
    h3 {
      font-size: 45px;
      text-align: center;
    }
    img {
      width: 250px;
    }
  }

  .flex-items {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .aire {
      width: 170px;
      @media screen and (max-width: 650px) {
        width: 120px;
      }
      .wifi {
        width: 110px;
      }
    }
  }
  .grid-3 {
    margin-top: 7rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    @media screen and (max-width: 1250px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .hidden {
      @media screen and (max-width: 1250px) {
        display: none;
      }
    }
    @media screen and (max-width: 650px) {
      margin-top: 0rem;
      gap: 0rem;
    }
  }
  .grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    @media screen and (max-width: 1250px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    @media screen and (max-width: 650px) {
      gap: 0rem;
    }
  }
  .item-services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 30px;
    h3 {
      font-weight: 100;
      margin-top: 11px;
      text-align: center;
    }
    img {
      width: 120px;
      height: 120px;
    }
    @media screen and (max-width: 1250px) {
      margin: 10px 20px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    @media screen and (max-width: 650px) {
      img {
        width: 80px;
        height: 80px;
      }
      h3 {
        font-size: 17px;
        width: 120px;
      }
    }
  }

  .btn-service {
    margin-top: 4rem;
    font-size: 20px;
    font-weight: 300;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    background: transparent;
    border: 2px solid #a59e94;
    padding: 22px;
    border-radius: 16px;
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
      bottom: 0em;
    }
  }
`;

const Blank = styled.div`
  width: 100%;
  height: 15vh;
  position: relative;
  background: transparent;
  @media screen and (max-width: 930px) {
    display: none;
  }
`;

export default Home;
