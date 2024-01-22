import styled from "styled-components";
import { motion } from "framer-motion";

export const CenterNovedad = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 90vh;
  padding: 2rem 0;
`;

export const ContainerNovedad = styled.div`
  width: 85%;
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: auto;

  .home_subtitle{
    font-size: 50px;
    padding-bottom: 1rem;
  }

  /* Destacada */
  .destacada {
    grid-column: 1 / span 2;
    display: flex;
    background: #ececec;
    height: 375px;
    position: relative;

    .container-image {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .container-destacada {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    width: 100%;

    .titulo-destacada {
      font-size: 27px;
    }
  }

  .description-destacada {
    font-size: 19px;
    font-weight: 100;
    width: 550px;
    letter-spacing: 1px;
  }

  .fecha-destacada {
    position: absolute;
    top: 0;
    left: 0;
  }

  .btn-destacada {
    position: absolute;
    right: 5%;
    bottom: 10%;
  }

  /* Novedades RESTO */
  .novedades-prom {
    position: relative;
    background: #ececec;
  }

  .container-novedad {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
  }
  .image-novedad {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .fecha-novedad {
    position: absolute;
    left: 0;
    top: 0;
  }
  /* GLOBALES */
  /* Fecha */
  .fecha {
    background: #e96500;
    color: #fff;
    padding: 5px 27px;
    width: fit-content;
  }

  /* Boton */
  .btn {
    color: #000a63;
    background: transparent;
    border: 2px solid #000a63;
    padding: 7px 30px;
    font-size: 17px;
    border-radius: 16px;
    text-transform: uppercase;
    transition: 400ms;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: #e96500;
      border: 2px solid #e96500;
      color: #fff;
    }
  }

  .not-novedades {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 22px;
      font-weight: bold;
      margin: 20px 0;
    }

    .caballo {
      transform: rotateZ(96deg);
    }

    a {
      color: #000a63;
      background: transparent;
      border: 2px solid #000a63;
      padding: 7px 30px;
      font-size: 17px;
      border-radius: 16px;
      text-transform: uppercase;
      transition: 400ms;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background: #e96500;
        border: 2px solid #e96500;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 1220px) {
    display: flex;
    flex-direction: column;
    width: 80%;

    /* destacada */
    .destacada {
      display: flex;
      flex-direction: column;
      height: auto;
      border-radius: 16px;
      .description-destacada {
        width: auto;
        font-size: 14px;
      }
      .container-destacada {
        height: 100%;
        gap: 15px 0;
        padding: 10px;
        margin-bottom: 10px;
        align-items: flex-start;
        .fecha-destacada {
          position: relative;
        }
        .btn-destacada {
          position: relative;
          right: 0;
        }
      }
    }
    .novedades-prom{
      border-radius: 16px;
    }
    .container-novedad {
      flex-direction: column;
      gap: 15px;
      align-items: flex-start;

      h2{
        font-size: 22px;
      }
    }
  }
`;
