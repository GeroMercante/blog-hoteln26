import styled from "styled-components";

export const TableUserContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 2rem 0;
  min-height: 40vh;

  table {
    thead {
      tr {
        th {
          padding: 11px 0;
          width: 100%;
          text-align: left;
          font-size: 22px;
        }
      }
    }

    tbody{
      tr{
        td{
          padding: 10px 7px;
          border-radius: 4px;
          a{
            color: #e96500;
            font-weight: bold;
          }
        }
        .is_admin{
          color: green;
          font-size: 30px;
        }
        .not_admin{
          color: red;
          font-size: 30px;
        }
      }
    }

    .bg-ccc {
      background-color: #ccc;
    }

    .bg-fff {
      background-color: #fff;
    }
  }

  @media screen and (max-width: 600px) {
    table {
    thead {
      tr {
        th {
          padding: 7px 0;
          width: 80%;
          font-size: 16px;
        }
      }
    }

    tbody{
      tr{
        td{
          padding: 8px 3px;
          font-size: 12px;
          a{
            color: #e96500;
            font-weight: bold;
          }
        }
        .is_admin{
          color: green;
          font-size: 30px;
        }
        .not_admin{
          color: red;
          font-size: 30px;
        }
      }
    }

    .bg-ccc {
      background-color: #ccc;
    }

    .bg-fff {
      background-color: #fff;
    }
  }
  }
`;
