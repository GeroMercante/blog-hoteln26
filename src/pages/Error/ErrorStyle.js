import styled from "styled-components";

export const SectionError = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ola-left {
    position: absolute;
    left: -240px;
    width: 700px;
    height: 100px;
    bottom: 5%;
    transform: rotateZ(180deg);
  }

  .ola-right {
    position: absolute;
    right: -240px;
    width: 700px;
    height: 100px;
    top: 25%;
  }
`;

export const ContainModal = styled.div`
  height: 400px;
  width: 350px;
  background: #f2efe6;
  display: flex;
  box-shadow: 0px 0px 40px 1px rgba(0, 0, 0, 0.6);
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  align-items: center;
  text-align: center;

  h1 {
    font-family: "Playfair Display";
    font-size: 68px;
    font-weight: 100;
    width: 180px;
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 40px;
    margin-bottom: 30px;
  }
  h3 {
    font-weight: 300;
    font-size: 17px;
    margin: 20px 0;
  }
  a {
    text-decoration: none;
    margin-top: 10px;
    cursor: pointer;
  }
  button {
    cursor: pointer;
    color: #fff;
    font-family: "Playfair Display";
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
