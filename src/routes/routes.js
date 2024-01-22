import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop, Footer, Navbar } from "../components";
import { getNovedades } from "../firebase/firebaseFunctions";
import {
  Error404,
  Admin,
  Contacto,
  Galeria,
  Habitaciones,
  Home,
  QuienesSomos,
  Login,
  Registro,
  Novedades,
  NovedadesId
} from "../pages";

import {
  LOGIN,
  REFRESH_PUBLICACIONES,
  REFRESH_PUBLICACIONES_FAIL,
} from "../redux/types";

import GlobalStyles from "../styles/GlobalStyles";
import AdminRoute from "./AdminRoute";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import WhatsappButton from "../components/WhatsAppButton";
import { motion } from "framer-motion";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const [novedades, setNovedades] = useState([]);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    async function fetchNovedades() {
      const novedadesData = await getNovedades();
      setNovedades(novedadesData);
    }
    fetchNovedades();
  }, []);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth) {
      dispatch({
        type: LOGIN,
        payload: storedAuth,
      });
    }
  }, [dispatch]);

  const novedadesHabilitadas = novedades.filter(
    (novedad) => novedad.habilitado
  );

  if (novedadesHabilitadas.length > 0) {
    dispatch({ type: REFRESH_PUBLICACIONES });
  } else {
    dispatch({ type: REFRESH_PUBLICACIONES_FAIL });
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 450) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <WhatsappButton />
        {showScrollTopButton && (
          <BotonSubir
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AiOutlineArrowUp />
          </BotonSubir>
        )}
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route index element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/novedades/:back_url" element={<NovedadesId />} />
          {/* Rutas protegidas */}
          <Route path="/admin" element={<AdminRoute />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

const BotonSubir = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #cd9746;
  color: #fff;
  border: none;
  font-size: 22px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 9999;
`;

export default AppRoutes;
