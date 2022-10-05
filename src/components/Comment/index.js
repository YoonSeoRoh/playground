import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { deleteCommentThunk } from "../../actions/content";

import Button from "../Button";
import ModalComment from "../ModalComment";
import ModalAlert from "../ModalAlert";

import * as S from "./styles";

const Comment = ({ data }) => {
  console.log("코멘트 렌더링");
  const dispatch = useDispatch();
  const { id, email, nickname, comment } = data;
  const { loginData } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [block, setBlock] = useState(false);

  const handleModalComment = useCallback(() => {
    setBlock(!block);
  }, [block]);

  const handleModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const handleDelete = useCallback(() => {
    dispatch(deleteCommentThunk(id));
    setModal(true);
    setMsg("삭제되었습니다.");
  }, [dispatch, id]);

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
        <>
          <S.EditButtonWrapper>
            <Button
              onClick={handleModalComment}
              buttonStyle="edit"
              textSize="sm"
            >
              수정
            </Button>
          </S.EditButtonWrapper>
          <S.DeleteButtonWrapper>
            <Button onClick={handleDelete}>삭제</Button>
          </S.DeleteButtonWrapper>
        </>
      )}
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="확인"
        onClick={handleModal}
      />
      <ModalComment
        id={id}
        isOpen={block}
        defaultValue={comment}
        onClose={handleModalComment}
      />
    </S.CommentContainer>
  );
};

export default React.memo(Comment);
