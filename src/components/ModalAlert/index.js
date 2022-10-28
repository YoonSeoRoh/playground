import React from "react";
import Modal from "react-modal";

import Button from "../Button";

import * as S from "./styles";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: 300,
    padding: 0,
    transform: "translate(-50%, -50%)",
    border: 0,
    position: "fixed",
    borderRadius: "10px",
  },
};

const ModalAlert = ({ isOpen, title, buttonTitle, onClick }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
      <S.Title>{title}</S.Title>
      <div>
        <Button onClick={onClick} buttonStyle="modal" textSize="base">
          {buttonTitle}
        </Button>
      </div>
    </Modal>
  );
};

export default React.memo(ModalAlert);
