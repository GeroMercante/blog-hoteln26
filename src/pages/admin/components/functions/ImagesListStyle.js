import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageListContainer = styled(motion.section)`
  width: 100%;
  height: auto;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px 0;

  h1 {
    margin-top: 1rem;
    text-align: center;
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    font-style: italic;
    color: #3e3e3e;
  }
`;

export const ImageGalleryList = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  gap: 20px 90px;

  .image-card{
    display: flex;
    position: relative;
    width: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 10px 0;
    padding: 10px;
    border: 1px solid #cd9746;

    span{
      font-weight: bold;
      text-transform: capitalize;
    }

    img{
      width: 100%;
      object-fit: contain;
    }

    .card-contain_btn{
      position: absolute;
      left: 0;
      right: 0;
      bottom: -100%;
      height: 100%;
      transition: 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.7);

      button{
        color: #fff;
        background: #ce0000;
        font-size: 42px;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    &:hover .card-contain_btn{
      bottom: 0;
    }
  }
`;
