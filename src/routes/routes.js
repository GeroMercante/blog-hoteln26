import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop, Footer, Navbar } from "../components";
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
} from "../pages";
import { LOGIN } from "../redux/types";
import GlobalStyles from "../styles/GlobalStyles";
import AdminRoute from "./AdminRoute";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth) {
      dispatch({
        type: LOGIN,
        payload: storedAuth,
      });
    }
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
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

export default AppRoutes;
