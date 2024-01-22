import React from "react";
import OB from "../../assets/utils/OB.svg";

import { ContainModal, SectionError } from './ErrorStyle'

const Error404 = () => {
  return (
    <SectionError>
      <img src={OB} alt="" className="ola-left" />
      <img src={OB} alt="" className="ola-right" />
      <ContainModal>
        <h1>Error 404</h1>
        <h3>
          Lo sentimos, <br /> página no encontrada. <br />
          Vuelve al inicio
        </h3>
        <a href="http://hoteln26mardelplata.com/">
          <button>Volver al inicio</button>
        </a>
      </ContainModal>
    </SectionError>
  );
};

export default Error404;
