import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getNovedades } from "../firebase/firebaseFunctions";

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    async function fetchNovedades() {
      const novedadesData = await getNovedades();
      setNovedades(novedadesData);
    }
    fetchNovedades();
  }, []);

  console.log(novedades);

  return (
    <Container>
      {novedades.map((novedad) => (
        <div key={novedad.id} className="novedad">
          <div className="banner">
            <h3>{novedad.titulo}</h3>
            <img src={novedad.imageURL} alt="" />
            <p className="paragraph">{novedad.fecha}...</p>
            <Category category={novedad.categoria}>
              {novedad.categoria}
            </Category>
          </div>
          <p className="description">{novedad.descripcion}</p>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 40px;
  position: relative;

  .novedad {
    .banner {
      position: relative;
      img {
        width: 600px;
        position: relative;
        height: 350px;
        border-radius: 8px;
        object-fit: cover;
      }
      h3 {
        top: 10px;
        color: #fff;
        z-index: 10;
        font-size: 27px;
        text-shadow: 1px 1px #000;
        position: absolute;
        margin-left: 11px;
        bottom: 0px;
      }
      .paragraph {
        bottom: 10px;
        color: #fff;
        z-index: 10;
        font-size: 27px;
        text-shadow: 1px 1px 1px #000;
        position: absolute;
        left: 10px;
      }
    }
  }
  .description {
    width: 500px;
  }
`;

const Category = styled.p`
  background-color: ${({ category }) => {
    switch (category) {
      case "Turismo":
        return "yellow";
      case "Descuento":
        return "lightblue";
      case "Shows":
        return "burlywood";
      case "Especiales":
        return "green";
      case "Otro":
        return "red";
      default:
        return "gray";
    }
  }};
  position: absolute;
  color: white;
  width: fit-content;
  right: 0;
  bottom: 10px;
  padding: 5px;
  height: fit-content;
  border-radius: 5px;
  margin: 5px;
`;

export default Novedades;
