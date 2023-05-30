import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/log/LogoW.svg";
import OW from "../assets/utils/OW-1line.svg";

const FooterContain = styled.footer`
  width: 100vw;
  height: 30vh;
  background: #a59e94;
  display: block;

  @media screen and (max-width: 950px) {
    height: 600px;
  }
`;

const Flex = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
  }
`;

const Box = styled.div`
  margin-bottom: 4rem;
  @media screen and (max-width: 950px) {
    margin-bottom: 1rem;
  }
  div {
    color: #fff;
    @media screen and (max-width: 950px) {
      display: flex;
      flex-direction: column;
    }
  }
  .mt {
    @media screen and (max-width: 950px) {
      width: 275px;
    }
  }
  .italic {
    font-weight: 300;
    font-style: italic;
  }
  .flex-contain {
    display: flex;
    gap: 1.5rem;
    @media screen and (max-width: 950px) {
      gap: 0;
    }
  }
  .contact-link {
    position: relative;
    transition: 0.3s;
    /* margin-bottom: .3rem; */
  }
  article {
    width: 175px;
    height: 175px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 950px) {
    article {
      width: 105px;
      height: 105px;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContain>
        <Flex>
          <Box>
            <Link to="/">
              <article>
                <img src={Logo} alt="Hotel N26" />
              </article>
            </Link>
          </Box>
          <Box>
            <div>
              <Link to="/contacto">
                <h2 className="contact-link">Información de contacto</h2>
                <img src={OW} alt="Ola White by jtineo" />
              </Link>
              <br />
              <div className="flex-contain">
                <h3>Email</h3>
                <h3 className="italic">
                  <a href="mailto:info@hoteln26.com">info@hoteln26.com</a>
                </h3>
              </div>
              <div className="flex-contain">
                <h3>Teléfono </h3>
                <h3 className="italic">(+54) 2234-491720</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="mt">
              <h3>Ubicación</h3>
              <h3 className="italic">
                Güemes 3041 e/ Alvarado y Avellaneda, Mar del Plata, BsAs, Arg.
              </h3>
            </div>
          </Box>
        </Flex>
      </FooterContain>
    </>
  );
};

export default Footer;
