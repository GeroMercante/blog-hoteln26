import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;

  .modal-content {
    background-color: #f2efe6;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .modal-buttons {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
      margin-top: 1rem;

      .btn {
        padding: 10px;
        font-size: 17px;
        outline: none;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }

      .btn[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .btn-cancel {
        background: #cd9746;
      }
      .btn-accept {
        background: #a60000;
      }
    }
  }
`;
