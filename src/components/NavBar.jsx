import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase.config";
import { motion } from "framer-motion";

import Logo from "../assets/log/n26.png";
import OWl1 from "../assets/utils/OW-1line.svg";
import OWl from "../assets/utils/OB2l.svg";

import {
  // AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

const Container = styled.div`
  .ola-border {
    height: 20px;
    position: relative;
  }
  .header {
    width: 100%;
    height: 75px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(165, 158, 148, 0.7);
    backdrop-filter: blur(1px);
    padding: 0rem 0;
    padding-bottom: 1rem;
    transition: 10s ease-in-out;
    z-index: 20;

    .social-media {
      width: 100%;
      text-align: center;
      display: flex;
      padding: 0.3rem 3rem;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 893px) {
        justify-content: center;
      }
    }
    .data-contain {
      margin: 0 17px;
      margin-left: 130px;
      color: #fff;
      font-family: "Poppins", sans-serif;
      transition: 150ms ease-in-out;
      span a {
        padding: 0 1rem;
        :hover {
          color: #ffe4a0;
        }
      }
    }
    .social-contain {
      margin: 0 17px;
      margin-right: 140px;
      color: black;
      color: #fff;
      span a {
        padding: 0 0.3rem;
        font-size: 30px;
        transition: 150ms;
        :hover {
          color: #ffe4a0;
        }
      }
      @media screen and (max-width: 893px) {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 893px) {
    .header section:nth-child(1) {
      display: none;
    }
  }
  #header {
    position: fixed;
    top: 2.8rem;
    width: 100%;
    transition: 0.5s ease-in-out;
    z-index: 20;
    @media screen and (max-width: 1230px) {
      top: 3rem;
    }
  }
  .headerOut {
    top: 0%;
    transition: 0.5s ease-in-out;
  }
  .topnav {
    position: relative;
    z-index: 20;
    background-color: #a59e94;
    border-radius: 10px;
    height: 90px;
    width: 80%;
    margin: auto;
    box-shadow: 0px 6px 16px -6px rgba(1, 1, 1, 0.4);
    transition: 0.5s ease-in-out;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3rem;
    border-bottom: 4px solid #fff;
    @media screen and (max-width: 1330px) {
      height: 75px;
    }
  }
  .logo-container {
    width: 150px;
    height: 150px;
    position: absolute;
    z-index: 20;
    left: 15px;
    top: 0px;
    @media screen and (max-width: 1250px) {
      width: 110px;
      height: 110px;
    }
    @media screen and (max-width: 1150px) {
      transform: translate(-50%, -50%);
      width: 110px;
      height: 110px;
      left: 50%;
      top: 75px;
    }
  }
  .logo-container img {
    width: 100%;
    height: 100%;
    z-index: 20;
    cursor: pointer;
    @media screen and (max-width: 1330px) {
      display: block !important;
    }
  }
  .svg-contain {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 5%;
    gap: 0.5rem;
    padding: 6px 12px;
    border-radius: 50px;
    background: #ffe4a0;
  }
  .widthMax {
    width: 100%;
    position: fixed;
    border-radius: 0px;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.5s ease-in-out;
  }
  .topnav a {
    color: #000;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    top: 10px;
    transition: 150ms ease-in-out;
    text-transform: uppercase;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    width: fit-content;
    :hover {
      color: #fff;
      font-weight: bold;
    }
    @media screen and (max-width: 1330px) {
      font-size: 17px;
    }
  }

  .topnav li a {
    @media screen and (max-width: 1150px) {
      display: none;
    }
  }

  .resize-navbar {
    margin-right: 6rem;
  }
  .border-b {
    color: #fff !important;
    position: relative;
    @media screen and (max-width: 939px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  #icon {
    float: right;
  }
  #active {
    display: flex;
  }
  #active img {
    width: 130px;
  }
  #active:hover {
    color: #fff;
  }
  .topnav .icon {
    display: none;
  }

  .navbar-responsive {
    display: none;
    @media screen and (max-width: 1150px) {
      display: block;
    }
  }

  .btn-nav {
    font-size: 22px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 21px;
    svg {
      color: #fff;
      font-size: 30px;
      margin-right: 2rem;
    }
  }
  .box-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #a59e94;

    .ola-l-nav {
      position: absolute;
      bottom: 20px;
      width: 450px;
      height: 100px;
      right: -200px;
      z-index: 2;
    }
    .ola-r-nav {
      position: absolute;
      top: 20px;
      width: 450px;
      height: 100px;
      left: -100px;
      z-index: 2;
    }

    .close-navbar {
      position: absolute;
      top: 5%;
      right: 5%;
      background: transparent;
      color: #000;
      font-size: 35px;
      z-index: 999;
    }
    li {
      font-size: 30px;
      text-align: center;
      z-index: 9999;
      a {
        z-index: 9999;
      }
    }
  }
`;

const NavBar = () => {
  const novedades = useSelector((state) => state.novedades);
  const [verNovedades, setVerNovedades] = useState(false);
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const novedadesRef = db.collection("novedades");
    novedadesRef
      .where("habilitado", "==", true)
      .get()
      .then((querySnapshot) => {
        setVerNovedades(!querySnapshot.empty);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, [novedades]);

  const changePosition = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changePosition);

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <Container>
      {responsiveNav && (
        <motion.div
          className="box-nav"
          initial={{ top: "-1000px" }}
          animate={{ top: "0" }}
          exit={{ top: "-400px" }}
          transition={{ duration: 0.8 }}
        >
          <img src={OWl} alt="ola n26" className="ola-l-nav" />
          <img src={OWl} alt="ola n26" className="ola-r-nav" />
          <ul className="nav-responsive">
            <button
              className="close-navbar"
              onClick={() => setResponsiveNav(false)}
            >
              <AiOutlineClose />
            </button>
            <li>
              <Link
                to="/"
                className={`${pathMathRoute("/") ? "border-b" : ''}`}
                onClick={() => setResponsiveNav(false)}
              >
                Inicio
                {pathMathRoute("/") ? (
                  <img
                    src={OWl1}
                    alt="ola w"
                    className="ola-border"
                    style={{ width: "90px", objectFit: "cover" }}
                  />
                ) : (
                  ""
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/quienes-somos"
                className={`${pathMathRoute("/quienes-somos") ? "border-b" : ''}`}
                onClick={() => setResponsiveNav(false)}
              >
                ¿Quiénes somos?
                {pathMathRoute("/quienes-somos") ? (
                  <img
                    src={OWl1}
                    alt="ola w"
                    className="ola-border"
                    style={{ width: "178px", objectFit: "cover" }}
                  />
                ) : (
                  ""
                )}
              </Link>
            </li>
            {verNovedades && (
              <li>
                <Link
                  to="/novedades"
                  className={`${pathMathRoute("/novedades") ? "border-b" : ''}`}
                  onClick={() => setResponsiveNav(false)}
                >
                  Novedades
                  {pathMathRoute("/novedades") ? (
                    <img
                      src={OWl1}
                      alt="ola w"
                      className="ola-border"
                      style={{ width: "108px", objectFit: "cover" }}
                    />
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/galeria"
                className={`${pathMathRoute("/galeria") ? "border-b" : ''}`}
                onClick={() => setResponsiveNav(false)}
              >
                Galería
                {pathMathRoute("/galeria") ? (
                  <img
                    src={OWl1}
                    alt="ola w"
                    className="ola-border"
                    style={{ width: "108px", objectFit: "cover" }}
                  />
                ) : (
                  ""
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/habitaciones"
                className={`${pathMathRoute("/habitaciones") ? "border-b" : ''}`}
                onClick={() => setResponsiveNav(false)}
              >
                Habitaciones
                {pathMathRoute("/habitaciones") ? (
                  <img
                    src={OWl1}
                    alt="ola w"
                    className="ola-border"
                    style={{ width: "140px", objectFit: "cover" }}
                  />
                ) : (
                  ""
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`${pathMathRoute("/contacto") ? "border-b" : ''}`}
                onClick={() => setResponsiveNav(false)}
              >
                Contacto
                {pathMathRoute("/contacto") ? (
                  <img
                    src={OWl1}
                    alt="ola w"
                    className="ola-border"
                    style={{ width: "115px", objectFit: "cover" }}
                  />
                ) : (
                  ""
                )}
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
      <header className="header">
        <div className="social-media">
          <section className="data-contain">
            <span>
              <i>
                <a href="mailto:info@hoteln26.com">info@hoteln26.com</a>
              </i>
            </span>
            <span>
              <i>
                <a href="tel:+5402236260043">+54 (0223)-6260043</a>
              </i>
            </span>
          </section>
          <section className="social-contain">
            <span>
              <a
                href="https://www.facebook.com/hoteln26"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineFacebook />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/hoteln26/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram />
              </a>
            </span>
            {/* <span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <AiOutlineLinkedin />
              </a>
            </span> */}
          </section>
        </div>
      </header>
      <nav id={navbar ? "headerOut" : "header"}>
        <div className={navbar ? "topnav widthMax" : "topnav"} id="myTopnav">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} alt="Hotel N26" />
            </Link>
          </div>
          <li>
            <Link to="/" className={`${pathMathRoute("/") ? "border-b" : ''}`}>
              Inicio
              {pathMathRoute("/") ? (
                <img
                  src={OWl1}
                  alt="ola w"
                  className="ola-border"
                  style={{ width: "90px", objectFit: "cover" }}
                />
              ) : (
                ""
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/quienes-somos"
              className={`${pathMathRoute("/quienes-somos") ? "border-b" : ''}`}
            >
              ¿Quiénes somos?
              {pathMathRoute("/quienes-somos") ? (
                <img
                  src={OWl1}
                  alt="ola w"
                  className="ola-border"
                  style={{ width: "178px", objectFit: "cover" }}
                />
              ) : (
                ""
              )}
            </Link>
          </li>
          {verNovedades && (
            <li>
              <Link
                to="/novedades"
                className={`${pathMathRoute("/novedades") ? "border-b" : ''}`}
                onClick={() => setResponsiveNav(false)}
              >
                Novedades
                {pathMathRoute("/novedades") ? (
                  <img
                    src={OWl1}
                    alt="ola w"
                    className="ola-border"
                    style={{ width: "118px", objectFit: "cover" }}
                  />
                ) : (
                  ""
                )}
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/galeria"
              className={`${pathMathRoute("/galeria") ? "border-b" : ''}`}
            >
              Galería
              {pathMathRoute("/galeria") ? (
                <img
                  src={OWl1}
                  alt="ola w"
                  className="ola-border"
                  style={{ width: "108px", objectFit: "cover" }}
                />
              ) : (
                ""
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/habitaciones"
              className={`${pathMathRoute("/habitaciones") ? "border-b" : ''}`}
            >
              Habitaciones
              {pathMathRoute("/habitaciones") ? (
                <img
                  src={OWl1}
                  alt="ola w"
                  className="ola-border"
                  style={{ width: "140px", objectFit: "cover" }}
                />
              ) : (
                ""
              )}
            </Link>
          </li>
          <li className="resize-navbar">
            <Link
              to="/contacto"
              className={`${pathMathRoute("/contacto") ? "border-b" : ''}`}
            >
              Contacto
              {pathMathRoute("/contacto") ? (
                <img
                  src={OWl1}
                  alt="ola w"
                  className="ola-border"
                  style={{ width: "115px", objectFit: "cover" }}
                />
              ) : (
                ""
              )}
            </Link>
          </li>
          <div className="navbar-responsive">
            <button
              className="btn-nav"
              onClick={() => setResponsiveNav(true)}
            >
              <HiBars3 />
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
