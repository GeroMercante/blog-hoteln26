import React, { useEffect } from 'react';
import { Container } from './ModalConfirmStyle';

const ModalConfirm = ({ isOpen, onCancel, onConfirm, isLoading }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-hidden');
    } else {
      document.body.classList.remove('body-hidden');
    }
    return () => {
      document.body.classList.remove('body-hidden');
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <div className="modal-content">
        <p>¿Estás seguro que desea borrar este elemento?</p>
        <div className="modal-buttons">
          <button onClick={onCancel} className='btn btn-cancel' disabled={isLoading}>Cancelar</button>
          <button onClick={onConfirm} className='btn btn-accept' disabled={isLoading}>Aceptar</button>
        </div>
      </div>
    </Container>
  );
};

export default ModalConfirm;
