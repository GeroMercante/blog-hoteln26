import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

// Bases de datos
import { db } from "../../firebase/firebase.config";
import { query, collection, where, getDocs } from "firebase/firestore";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";

// Mixins
import useNovedades from "../../mixims/GetNovedades";

// estilos
import {
  BodyNovedad,
  ContainerDesc,
  ContainerId,
  LoadingId,
  NewNovedades,
} from "./NovedadesIdStyle";
import { Loader } from "../../assets/utils/UtilsSvg";

import EnlaceIcon from "../../assets/novedades/copiar_enlace.svg";
import Email from "../../assets/novedades/email.svg";

const NovedadesId = () => {
  const { back_url } = useParams();
  const [novedad, setNovedad] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  const { novedades: relatedNovedades } = useNovedades(back_url);

  const fetchNovedad = useCallback(async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(
        query(collection(db, "novedades"), where("back_url", "==", back_url))
      );
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setNovedad(docData);
      } else {
        const intervalId = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        setTimeout(() => {
          clearInterval(intervalId);
          navigate('/');
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [back_url, navigate]);

  useEffect(() => {
    fetchNovedad();
  }, [fetchNovedad]);

  const handleShareClick = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Error al copiar link:", error);
      });
  };

  setTimeout(() => {
    setCopied(false);
  }, 5600);

  return (
    <>
      {isLoading ? (
        <LoadingId>
          <Loader />
        </LoadingId>
      ) : !novedad ? (
        <LoadingId>
          <h3>
            La novedad no existe o se ha borrado. <br />
            Serás redirigido a la pantalla de inicio en {countdown}s.
          </h3>
        </LoadingId>
        ) : (
          <>
          <Helmet>
            <meta charset="UTF-8" />
            <title>HN26 - {novedad.titulo}</title>
          </Helmet>
          <ContainerId>
            <BodyNovedad>
              <div className="container_novid">
                <div className="swiper_img-nov">
                  <Swiper
                    spaceBetween={50}
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                  >
                    {novedad.imageURL.map((imageUrl, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={imageUrl}
                          alt={novedad.titulo}
                          className="novedad-img"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="data_nov">
                  <h2 className="title-novid">{novedad.titulo}</h2>
                  <h3 className="description">{novedad.descripcion}</h3>
                  <div className="card_details">
                    <p className="date-description">{novedad.fecha}</p>
                    <div className="share_links">
                      {copied && <p className="shared_link">¡Enlace copiado!</p>}
                      <a
                        href="mailto:Asociacionunificada@gmail.com"
                        title="Enviar mail"
                      >
                        <img src={Email} alt="Email" />
                      </a>
                      <button onClick={handleShareClick}>
                        <img src={EnlaceIcon} alt="Enlace enlace" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ContainerDesc>
                <div>
                <h4 className="desc_italic">{novedad.descripcion}</h4>
                <p className="desc_long">{novedad.description_long}</p>
                </div>
                <div className="flex-end_nov">
                  <p>{novedad.fecha}</p>
                  <div className="share_links">
                    {copied && <p className="shared_link">¡Enlace copiado!</p>}
                    <a
                      href="mailto:Asociacionunificada@gmail.com"
                      title="Enviar mail"
                    >
                      <img src={Email} alt="Email" />
                    </a>
                    <button onClick={handleShareClick}>
                      <img src={EnlaceIcon} alt="Enlace enlace" />
                    </button>
                  </div>
                </div>
              </ContainerDesc>
              {relatedNovedades.length > 0 && (
                <NewNovedades>
                  {relatedNovedades.map((novedadRelacionada) => (
                    <div key={novedadRelacionada.id} className="card_add">
                      <Link to={`/novedades/${novedadRelacionada.back_url}`}>
                        <div className="contain_add-nov">
                          <div className="description_add">
                            <h2 className="related-nov-title">
                              {novedadRelacionada.titulo}
                            </h2>
                            <p>{novedadRelacionada.fecha}</p>
                          </div>
                          <div>
                            {Array.isArray(novedadRelacionada.imageURL) ? (
                              <img
                                src={novedadRelacionada.imageURL[0]}
                                alt={novedadRelacionada.titulo}
                              />
                            ) : (
                              <img
                                src={novedadRelacionada.imageURL}
                                alt={novedadRelacionada.titulo}
                              />
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </NewNovedades>
              )}
            </BodyNovedad>
          </ContainerId>
        </>
      )}
    </>
  );
};

export default NovedadesId;
