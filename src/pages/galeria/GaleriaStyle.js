import styled  from "styled-components";
import { motion } from "framer-motion";

import BannerGallery from "../../assets/home/mdq.png";

export const GaleriaContainer = styled(motion.section)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: #fff;
  padding-bottom: 4rem;
  position: relative;
  top: -80px;

  .banner-gallery {
    width: 100%;
    height: 35vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BannerGallery});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .btn-close {
    position: absolute;
    right: 2%;
    top: 2%;
    padding: 10px;
    border-radius: 9999px;
    background: #cd9746;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }

  .btn-container {
    width: 85%;
    display: flex;
    gap: 5px;
    justify-content: flex-end;

    .btn_gallery {
      font-size: 22px;
      border-radius: 50%;
      padding: 10px;
      margin: 0 10px;
      border: 2px solid #acacac;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background: #acacac;
        color: #000;
      }

      &:disabled {
        opacity: 0.6;
        pointer-events: none;
      }
    }
  }
  .ascensor {
    width: 100%;
    position: sticky;
    top: 90px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6;
    padding: 0 0.875rem;
    height: 40px;

    .order_grid-gallery {
      display: block;
      position: absolute;
      right: 8%;
      bottom: 5px;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      .inactive {
        color: #99999989;
        cursor: pointer;
      }
      .active {
        color: #000;
      }
    }
  }

  @media screen and (max-width: 1330px) {
    .ascensor {
      top: 75px;
    }
  }
`;

export const ContainerGallery = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .main-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    height: 100%;
  }

  .card-gallery {
    width: 450px;
    height: 310px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .grid-1 {
    display: flex;
    flex-direction: column;
    gap: 20px 0;

    .card-gallery {
      width: auto;
      height: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .main-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .card-gallery {
      width: auto;
      height: auto;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
