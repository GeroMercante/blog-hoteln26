import React from "react";
import styled from "styled-components";
import { cuadruImages } from ".";
import ProductImagesSlider from "./ProductImagesSlider";

const BoxContainer = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 27px;
    }
  }
`;

const ContainerRoom = styled.div`
  width: 800px;
  height: 700px;
  padding: 20px;

  @media screen and (max-width: 800px) {
    width: 350px;
    height: 300px;
    padding: 10px;
  }
`;

const Cuadruples = () => {
  return (
    <>
      <BoxContainer>
        <h1>Habitación Cuadruple</h1>
        <ContainerRoom>
          <ProductImagesSlider images={cuadruImages} />
        </ContainerRoom>
      </BoxContainer>
    </>
  );
};

export default Cuadruples;
