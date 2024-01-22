import styled from "styled-components";

export const ContainerAdmin = styled.section`
  min-height: 50vh;
  height: auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  margin-bottom: 4rem;

  .title-name {
    margin-top: 1rem;
    span {
      color: #cd9746;
      font-weight: bold;
      font-family: "Montserrat-Bold";
      border-bottom: 1px solid #cd9746;
    }
  }

  .container {
    width: 100%;
  }

  @media screen and (max-width: 1220px) {
    .title-name {
      text-align: center;
      margin: 0;
      padding: 15px 0;
    }
  }
`;

export const InputPanel = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateX(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 999;
  color: #000;

  background: #a59e94;
  padding: 17px 9px;
  border-radius: 0 10px 10px 0;
  border: 2px solid #cd9746;

  h3 {
    cursor: pointer;
  }

  a {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 2px;
  }

  .active {
    color: #fff;
    background: transparent !important;
    border: none;
    border-bottom: 1px solid #fff;
  }

  @media screen and (max-width: 932px) {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 7;
    color: #000;
    background: #cd9746;
    padding: 7px 17px;
    border-radius: 10px;
    margin-bottom: 25px;

    h3 {
      cursor: pointer;
      font-size: 15px;
    }

    a {
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 2px;
      font-size: 11px;
    }
  }
`;
