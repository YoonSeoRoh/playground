import React, { useCallback } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { editCommentThunk } from "../../actions/content";
import { commentValidation } from "../../libs/validations/commentValidation";

import Input from "../Input";
import Button from "../Button";
import ValidationMessage from "../ValidationMessage";

import * as S from "./styles";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    top: "auto",
    left: "50%",
    right: "auto",
    bottom: 0,
    width: "100%",
    height: 80,
    padding: "0 10px 0 10px",
    transform: "translate(-50%)",
    border: 0,
    position: "fixed",
    borderRadius: 0,
  },
};

const ModalComment = ({ isOpen, onClose, defaultValue, id }) => {
  const dispatch = useDispatch();

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(commentValidation),
  });

  const handleChange = ({ name, value }) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleClick = useCallback(() => {
    dispatch(editCommentThunk({ id: id, comment: getValues("comment") }));
    reset();
  }, [dispatch, getValues, id, reset]);

  return (
    <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
      <S.Container>
        <S.InputBlock>
          <Input
            inputStyle="border"
            defaultValue={defaultValue}
            {...register("comment")}
            onChange={handleChange}
          />
        </S.InputBlock>
        <S.ButtonBlock>
          <Button onClick={onClose} buttonStyle="transparent" textSize="sm">
            닫기
          </Button>
          <Button
            onClick={handleClick}
            buttonStyle="primary"
            textSize="sm"
            disabled={!isValid}
          >
            확인
          </Button>
        </S.ButtonBlock>
      </S.Container>
      <ValidationMessage>{errors.comment?.message}</ValidationMessage>
    </Modal>
  );
};

export default React.memo(ModalComment);
