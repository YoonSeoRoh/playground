import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { deleteCommentThunk } from "../../actions/content";

import ModalAlert from "../ModalAlert";
import Button from "../Button";

import * as S from "./styles";

const Comment = ({ data }) => {
  const { id, email, nickname, comment } = data;
  const { loginData } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteCommentThunk(id));
    setModal(true);
    setMsg("삭제되었습니다.");
  };

  return (
    <S.CommentContainer>
      <S.Icon>
        <FontAwesomeIcon icon={faUser} />
      </S.Icon>
      <S.Content>
        <span>{nickname}</span>
        <p>{comment}</p>
      </S.Content>
      {loginData?.user.email === email && (
        <S.ButtonWrapper>
          <Button onClick={handleClick} buttonStyle="default" textSize="sm">
            삭제
          </Button>
        </S.ButtonWrapper>
      )}
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="확인"
        onClick={() => {
          setModal(!modal);
        }}
      />
    </S.CommentContainer>
  );
};

export default React.memo(Comment);
