import React from "react";
import styled from "styled-components";
import { singleImages } from ".";
import ProductImagesSlider from "./ProductImagesSlider";

import OG from "../assets/utils/OG.svg";

import AA from "../assets/icon/Icono_1.svg";
import CS from "../assets/icon/Icono_2.svg";
import TV from "../assets/icon/Icono_3.svg";
import CU from "../assets/icon/Icono_8.svg";

import SP from "../assets/icon/Icono_9.svg";
import PL from "../assets/icon/Icono_10.svg";
import WF from "../assets/icon/Icono_5.svg";
import DC from "../assets/icon/Icono_7.svg";

const BoxContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;

  .title-box {
    position: relative;
    margin: 40px 0;
    width: 100%;

    h1 {
      font-weight: bold;
    }
    img {
      position: absolute;
      left: 0;
      width: 150px;
      height: 20px;
      object-fit: cover;
    }
  }

  .description-room {
    width: 100%;
    text-align: left;
    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 27px;
    }
    .desc {
      margin-top: 1rem;
      color: #727272;
      width: 530px;
      font-size: 19px;
    }

    .services-g {
      margin-top: 2rem;
    }

    .flex {
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #60a363;
      padding: 22px;
      margin-top: 2rem;

      .grid-4 {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px 0;

        .list-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          gap: 7px;

          img {
            width: 80px;
            height: auto;
            margin-bottom: 2rem;
          }
          .secador {
            width: 65px;
          }
          .wifi {
            width: 75px;
            @media screen and (max-width: 1150px) {
              width: 60px;
            }
          }
          .aac {
            margin-top: 7px;
            width: 125px;
            height: auto;
          }
          .plancha {
            width: 65px;
          }
          p {
            width: fit-content;
            position: absolute;
            bottom: 0;
            font-size: 14px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .description-room .desc {
      color: #727272;
      font-size: 19px;
    }
    .description-room h2 {
      margin-top: 2rem;
      text-align: center;
    }
    .description-room .flex .grid-4 .list-item p {
      font-size: 11px;
    }
    .description-room .flex .grid-4 .list-item .secador {
      width: 55px;
    }
    .description-room .flex .grid-4 .list-item .aac {
      width: 100px;
    }
    .description-room .flex .grid-4 .list-item .plancha {
      width: 55px;
    }
    .description-room .flex .grid-4 .list-item .wifi {
      width: 65px;
    }
    .description-room .flex .grid-4 .list-item img {
      width: 65px;
    }
  }

  @media screen and (max-width: 1150px) {
    .description-room .flex .grid-4 {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 10px;
    }
    .title-box {
      position: relative;
      margin: 40px 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-weight: bold;
        text-align: center;
      }
      img {
        position: absolute;
        width: 270px;
        height: 20px;
        object-fit: contain;
        left: 50%;
        transform: translate(-50%, -50%);
        bottom: -35px;
      }
    }
    .description-room .desc {
      color: #727272;
      width: 350px;
      font-size: 15px;
    }
    .description-room h2 {
      margin-top: 2rem;
      text-align: center;
    }
    .description-room .flex .grid-4 .list-item p {
      font-size: 13px;
    }
    .description-room .flex .grid-4 .list-item .secador {
      width: 45px;
    }
    .description-room .flex .grid-4 .list-item .aac {
      width: 100px;
    }
    .description-room .flex .grid-4 .list-item .plancha {
      width: 45px;
    }
    .description-room .flex .grid-4 .list-item img {
      width: 65px;
    }
  }
`;

const ContainerRoom = styled.div`
  width: 100%;
  height: 700px;

  @media screen and (max-width: 1500px) {
    width: 500px;
    height: 450px;
    padding: 10px;
  }

  @media screen and (max-width: 800px) {
    width: 350px;
    height: 300px;
    padding: 10px;
  }
`;

const single = () => {
  return (
    <BoxContainer>
      <div className="title-box">
        <h1>Habitación Single</h1>
        <img src={OG} alt="" />
      </div>
      <ContainerRoom>
        <ProductImagesSlider images={singleImages} />
      </ContainerRoom>
      <div className="description-room">
        <h2>Detalle de la habitación</h2>
        <p className="desc">
          Con camas singles o matrimoniales con vista exterior, Wi Fi, TV LED
          32" fútbol codificado, aire acondicionado, minirefrigerador y
          calefacción por radiador.
        </p>
        <div className="services-g">
          <h2>Servicios generales</h2>
          <div className="flex">
            <div className="grid-4">

              <div className="list-item">
                <img src={AA} alt="Aire acondicionado" className="aac" />
                <p>Aire acondicionado</p>
              </div>

              <div className="list-item">
                <img src={CS} alt="Caja de seguridad" />
                <p>Caja de seguridad</p>
              </div>

              <div className="list-item">
                <img src={TV} alt="Smart TV 32" />
                <p>Smart TV 32"</p>
              </div>

              <div className="list-item">
                <img src={CU} alt="Cuna" />
                <p>Cuna</p>
              </div>

              <div className="list-item">
                <img src={SP} alt="Secador de pelo" class="secador" />
                <p>Secador de pelo</p>
              </div>

              <div className="list-item">
                <img src={PL} alt="Plancha" className="plancha" />
                <p>Plancha</p>
              </div>

              <div className="list-item">
                <img src={WF} alt="Servicio WiFi Gratuito" className="wifi" />
                <p>Servicio WiFi</p>
              </div>

              <div className="list-item">
                <img src={DC} alt="Desayuno continental" />
                <p>Desayuno continental</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </BoxContainer>
  );
};

export default single;
