import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBox = styled.div`
  width: 950px;
  height: auto;
  background: #9b9b9b;
  padding: 10px 20px;
  border-radius: 16px;
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 3rem;

  .input-contain-full {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .input-name {
      width: 100%;
      font-size: 21px;
      outline: none;
      border: none;
      padding: 11px;
      border-radius: 8px;
      :focus {
        outline: 1px solid #000;
      }
    }
  }

  .container-categories {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    .input-categorias {
      width: 100%;
      margin-top: 1rem;
      font-size: 21px;
      padding: 11px;
      border-radius: 8px;
      border: none;
    }
  }

  .container-upload {
    width: 95%;
    height: auto;
    min-height: 350px;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 16px;
    background: #fff;
    position: relative;

    .absolute-upload {
      position: absolute;
      left: 2%;
      top: 5%;
      padding: 17px 12px;
      border-radius: 9999px;
      background: #a0a09c;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 999;

      .div-upload {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        font-size: 40px;
        color: #fff;

        :hover {
          color: #acacac;
        }
        .text-upload {
          font-size: 11px;
          font-weight: bold;
        }
      }

      .none-upload {
        width: 0;
        height: 0;
      }
    }

    .label-upload {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .div-upload {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        font-size: 40px;
        color: #676666;

        :hover {
          color: #3e3e3e;
        }
        .text-upload {
          font-size: 17px;
        }
      }

      .none-upload {
        width: 0;
        height: 0;
      }
    }

    .relative-upload {
      width: 40%;
      padding: 1rem;
      height: 100%;
      position: relative;

      .file-upload {
        width: 100%;
        height: 100%;
        margin: 20px 0;
        object-fit: contain;
      }
      .btn-delete {
        position: absolute;
        top: 15px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 11px;
        border-radius: 50%;
        background: #f00;
        font-size: 28px;
        z-index: 99;
        color: #fff;
        cursor: pointer;
        outline: none;
        transition: 500ms;
        transition: all ease-in-out;
        &:hover {
          background-color: #660707;
        }
      }
    }
  }

  .btn-uploadfiles {
    font-size: 21px;
    margin: 20px 0;
    border: none;
    outline: none;
    background: #cd9746;
    padding: 10px 22px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    transition: 500ms;
    &:hover {
      background: #a0722c;
    }
  }

  .flex-inputs {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .grid-inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px 0;
      input {
        width: 100%;
        font-size: 21px;
        padding: 11px;
        border-radius: 8px;
        border: none;
      }
      .shor-desciption {
        min-height: 120px;
        font-size: 21px;
      }
      .long-desciption {
        min-height: 200px;
        font-size: 16px;
      }
      textarea {
        width: 100%;
        resize: none;
        padding: 11px;
        border-radius: 8px;
        border: none;
        font-family: 'Montserrat-Light', sans-serif !important;
        font-weight: 300;
      }
    }
  }

  .error-url {
    background: #f00;
    color: #fff;
    padding: 3px 11px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;
  }

  .absolute-context {
    position: absolute;
    bottom: 2%;
    right: 2%;
    color: #bb0000;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 3px;

    .advert{
      font-size: 22px;
    }
  }

  @media screen and (max-width: 1374px) {
    width: 750px;
  }

  @media screen and (max-width: 1110px) {
    width: auto;
  }
`;
