import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverLay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlay-root');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
