import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const WhatsappButton = () => {
  const handleClick = () => {
    const phoneNumber = "2234491720";
    const message =
      "Hola, visité el sitio del Hotel N26 y quisiera contactarme con uds.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <ButtonWsp onClick={handleClick}>
      <FaWhatsapp />
    </ButtonWsp>
  );
};

const ButtonWsp = styled.button`
  position: fixed;
  left: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 9999px;
  background: #60a363;
  z-index: 9999;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 30px;
  color: #fff;

  @media screen and (max-width: 700px) {
    left: 10px;
    bottom: 10px;
    z-index: 99;
    width: 40px;
    height: 40px;
    padding: 25px;
  }
`;

export default WhatsappButton;
