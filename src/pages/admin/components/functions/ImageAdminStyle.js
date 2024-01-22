import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageAdminContainer = styled(motion.section)`
  width: 100%;
  height: auto;
  min-height: 60vh;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  align-items: flex-start;
`;

export const ImageGalleryAdmin = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  h4 {
    font-style: italic;
    color: #3e3e3e;
    margin-bottom: 10px;
  }

  select{
    width: 100%;
    padding: 11px 10px;
    font-size: 17px;
    border-radius: 5px;
    border: 1px solid #a0722c;
    color: #a0722c;
    outline: none;
  }

  .label-upload {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .div-upload {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        font-size: 50px;
        padding: 10px 20px;
        border-radius: 10px;
        border: 1px solid #3e3e3e;
        color: #676666;

        :hover {
          color: #3e3e3e;
        }
        .text-upload {
          font-size: 22px;
        }
      }

      .none-upload {
        width: 0;
        height: 0;
      }
    }

  .upload-images_gallery{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: #cd9746;
    flex-wrap: wrap;
    padding: 10px;
    border-radius: 8px;
    gap: 40px;
  }

  .object-gallery_create{
    position: relative;
    width: 300px;
    height: 100%;
    margin: 30px 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px #000;
    display: flex;
    gap: 10px 0;
    padding: 10px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img{
      width: 250px;
      object-fit: cover;
    }
  }

  .delete-image{
    padding: 10px;
    border-radius: 50%;
    background: #dd0000;
    color: #fff;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 80px;
    right: 5px;
    cursor: pointer;
    z-index: 99;
    transition: 0.5s;
    &:hover{
      background: #800000;
    }
  }

  .btn-save_images{
    background: #cd9746;
    padding: 10px 20px;
    border-radius: 16px;
    cursor: pointer;
    font-size: 22px;
    width: max-content;
    color: #fff;
    transition: 0.5s;
    &:hover{
      background: #a0722c;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  .btn-save_images[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
