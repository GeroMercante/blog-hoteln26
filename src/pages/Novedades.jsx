import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getNovedades } from "../firebase/firebaseFunctions";
import { BiMessageError } from "react-icons/bi";

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    async function fetchNovedades() {
      const novedadesData = await getNovedades();
      setNovedades(novedadesData);
    }
    fetchNovedades();
  }, []);

  const novedadesHabilitadas = novedades.filter(
    (novedad) => novedad.habilitado
  );

  return (
    <>
      <Container>
        {novedadesHabilitadas.length > 0 ? (
          novedadesHabilitadas.map((novedad) => (
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
          ))
        ) : (
          <NotAvailable>
            <div>
              <div className="not-available">
                <BiMessageError />
              </div>
              <h3>Lo sentimos, no hay publicaciones recientes</h3>
              <Link to="/" className="btn-not">
                Volver al inicio
              </Link>
            </div>
          </NotAvailable>
        )}
      </Container>
    </>
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

const NotAvailable = styled.div`
  width: 100vw;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .not-available {
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: #cd9746;
    transition: 0.3s;
    font-weight: bold;
    width: fit-content;
    border-radius: 50%;
    padding: 17px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
      margin-top: 2px;
      padding-top: 2px;
    }
  }
  h3 {
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
  .btn-not {
    cursor: pointer;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-style: italic;
    background: #cd9746;
    font-size: 20px;
    padding: 7px 25px;
    border-radius: 24px;
    letter-spacing: 1.3px;
    transition: 0.3s;
    font-weight: bold;
    :hover {
      color: #cd9746;
      background-color: #fff;
      border: 1px solid #cd9746;
    }
  }
`;

export default Novedades;
