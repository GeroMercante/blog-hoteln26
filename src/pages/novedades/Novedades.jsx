import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { UseNovedades } from "../../hooks/UseNovedades";

import { CenterNovedad, ContainerNovedad } from "./NovedadesStyle";

const Novedades = () => {
  const { novedades } = UseNovedades();

  const navigate = useNavigate();

  const handleShowMore = (back_url) => {
    navigate(`/novedades/${encodeURIComponent(back_url)}`);
  };

  return (
    <CenterNovedad
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <ContainerNovedad>
        {novedades.length > 0 ? (
          novedades.map((novedad, index) => (
            <div
              key={novedad.back_url}
              className={index === 0 ? "destacada" : "novedades-prom"}
            >
              <div className={index === 0 && "container-image"}>
                {novedad.imageURL && novedad.imageURL.length > 0 ? (
                  <img
                    src={novedad.imageURL[0]}
                    alt={novedad.titulo}
                    className={
                      index === 0 ? "image-destacada" : "image-novedad"
                    }
                  />
                ) : (
                  <p>Imagen no disponible</p>
                )}
              </div>
              <div
                className={
                  index === 0 ? "container-destacada" : "container-novedad"
                }
              >
                <p
                  className={
                    index === 0
                      ? "fecha fecha-destacada"
                      : "fecha fecha-novedad"
                  }
                >
                  {novedad.fecha}
                </p>
                <h2
                  className={
                    index === 0 ? "titulo-destacada" : "titulo-novedad"
                  }
                >
                  {novedad.titulo.length > 25
                    ? `${novedad.titulo.slice(0, 25)}...`
                    : novedad.titulo}
                </h2>
                {index === 0 && (
                  <p className="description-destacada">
                    {novedad.descripcion.length > 190
                      ? `${novedad.descripcion.slice(0, 190)}...`
                      : novedad.descripcion}
                  </p>
                )}
                <button
                  onClick={() => handleShowMore(novedad.back_url)}
                  className={
                    index === 0 ? "btn btn-destacada" : "btn btn-novedad"
                  }
                >
                  Leer más
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="not-novedades">
            <p>No hay novedades disponibles en este momento.</p>
            <Link to="/servicios">Ver nuestros servicios</Link>
          </div>
        )}
      </ContainerNovedad>
    </CenterNovedad>
  );
};

export default Novedades;
