import styled from "styled-components";

export const ContainerId = styled.section`
  min-height: 90vh;
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyNovedad = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 11px 27px;
  margin: 2rem 0;

  .container_novid {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 0 30px;
    height: 450px;

    .swiper_img-nov {
      width: 540px;
      height: 80%;

      .novedad-img {
        width: 650px;
        height: 450px;
        object-fit: cover;
      }
    }

    .data_nov {
      display: flex;
      height: 80%;
      max-width: 600px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .title-novid {
        font-size: 30px;
        width: 100%;
        text-align: left;
      }

      .description {
        font-weight: 100;
        font-family: "Montserrat-Light";
      }

      .card_details {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 11px;
        border-radius: 16px;
        box-shadow: 1px 1px 11px 9px #ececec;
        border-bottom: 2px solid #c6c6c4;

        p {
          font-weight: bold;
          font-family: "Montserrat-Bold";
        }

        .share_links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0 10px;
          padding: 7px 0;
          position: relative;
          button {
            background: transparent;
            cursor: pointer;
          }

          .shared_link {
            position: absolute;
            top: -30px;
            right: 0;
            background: #e96500;
            color: #fff;
            width: max-content;
            padding: 2px 10px;
            border-radius: 8px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1330px) {
    .container_novid {
      .swiper_img-nov {
        width: 400px;
        height: 80%;
      }
    }
  }

  @media screen and (max-width: 990px) {
    width: 90%;
    .container_novid {
      flex-direction: column;
      height: auto;
      .swiper_img-nov {
        width: 355px;
        height: auto;
        .novedad-img {
          width: 100%;
          height: 230px;
          object-fit: cover;
        }
      }
    }
    .data_nov {
      display: flex;
      height: 80%;
      max-width: 600px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 20px;

      .title-novid {
        font-size: 22px;
        width: 100%;
        text-align: left;
      }

      .description {
        font-size: 15px;
      }
    }
  }
`;

// extra de la novedad.
export const ContainerDesc = styled.article`
  width: 60%;
  height: auto;
  display: flex;
  align-items: center;
  margin: 6rem 0;
  border-bottom: 2px solid #c6c6c4;
  flex-direction: column;
  position: relative;

  .desc_italic {
    font-weight: 500;
    font-family: "Montserrat-Regular";
    font-style: italic;
  }

  .desc_long{
    margin: 20px 0;
  }

  .flex-end_nov {
    display: flex;
    width: 100%;
    bottom: 20px;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 4rem;
    margin-bottom: 20px;
    p{
      color: #999995;
    }
    .share_links {
      display: flex;
      gap: 10px;
      position: relative;

      button{
        cursor: pointer;
        background: transparent;
      }
    }
    .shared_link {
      position: absolute;
      top: -30px;
      right: 0;
      background: #e96500;
      color: #fff;
      width: max-content;
      padding: 2px 10px;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 990px) {
    width: 90%;
  }
`;

// novedades relacionadas
export const NewNovedades = styled.div`
  width: 60%;
  height: auto;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .card_add {
    width: 100%;
  }

  .contain_add-nov {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #c6c6c4;
    position: relative;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }

    .description_add {
      height: 150px;
      width: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      h2 {
        font-size: 22px;
        font-weight: bold;
        font-family: "Montserrat-Bold";
      }
      p {
        color: #999995;
      }
    }
  }

  @media screen and (max-width: 990px) {
    width: 90%;

    .contain_add-nov {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 2px solid #c6c6c4;
      position: relative;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }

      .description_add {
        height: 100px;
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        h2 {
          font-size: 17px;
          font-weight: bold;
          font-family: "Montserrat-Bold";
        }
        p {
          font-size: 14px;
          color: #999995;
        }
      }
    }
  }
`;

export const LoadingId = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
