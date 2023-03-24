import React from "react";
import styled from "styled-components";
import { singleImages } from ".";
import ProductImagesSlider from "./ProductImagesSlider";

const BoxContainer = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const single = () => {
  return (
    <>
      <BoxContainer>
        <h1>Habitación Single</h1>
        <ContainerRoom>
          <ProductImagesSlider images={singleImages} />
        </ContainerRoom>
      </BoxContainer>
    </>
  );
};

export default single;
