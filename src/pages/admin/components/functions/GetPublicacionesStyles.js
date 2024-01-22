import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10rem;

  .logo {
    position: relative;
    margin: 35px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 11px;
    border-radius: 0 0 8px 8px;
    h2 {
      font-size: 20px;
      text-align: left;
      left: 2%;
    }
    img {
      width: 250px;
      height: 200px;
      object-fit: cover;
    }
    .btn-delete {
      color: #fff;
      background: #f00;
      padding: 7px 11px;
      display: flex;
      margin-top: 1rem;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      font-size: 17px;
      border: 1px solid #000;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

export const DataBase = styled.div`
  width: 80%;
  height: auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  .alter-v {
    margin-top: 11px;
  }

  .habilitado {
    width: 170px;
    padding: 4px 7px;
    font-size: 19px;
  }

  label {
    color: #fff;
  }

  .novedadV {
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 11px;
    border-radius: 8px 8px 0 0;
    font-size: 15px;
  }

  .visible {
    background: green;
  }

  .novisible {
    background: grey;
  }
`;
