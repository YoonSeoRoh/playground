import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";

import { deleteContentThunk, addJoinThunk } from "../../actions/content";

import Button from "../../components/Button";
import ModalAlert from "../../components/ModalAlert";

import * as S from "./styles";

const Content = ({ data, paramsId }) => {
  const dispatch = useDispatch();
  const {
    id,
    category,
    title,
    join,
    joined,
    nickname,
    location,
    content,
    email,
  } = data;
  const { loginData } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");

  const handleClick = () => {
    const index = parseInt(joined);
    if (email === loginData?.user.email) {
      dispatch(deleteContentThunk(paramsId));
      setModal(true);
      setMsg("삭제되었습니다.");
    } else if (
      email !== loginData?.user.email &&
      id === loginData?.user.joined
    ) {
    } else if (index === parseInt(join)) {
      setModal(true);
      setMsg("인원 초과입니다.");
    } else {
      dispatch(addJoinThunk(paramsId, { joined: index + 1 }));
    }
  };

  return (
    <>
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
      <S.InfoBlock>
        <S.ImageWrapper>
          <img src="/assets/example.jpg" alt="샘플" />
        </S.ImageWrapper>
        <S.DetailBlock>
          <p>모집 인원</p>
          <h2>{join}</h2>
          <p>참가 인원</p>
          <h2>{joined}</h2>
          <S.DetailWrapper>
            <S.DetailInnerWrapper>
              <h3>작성자 </h3>
              <span>{nickname}</span>
            </S.DetailInnerWrapper>
            <S.DetailInnerWrapper>
              <h3>지역 </h3>
              <span>{location}</span>
            </S.DetailInnerWrapper>
          </S.DetailWrapper>
          <S.ButtonWrapper>
            <S.IconWrapper>
              <FontAwesomeIcon icon={faShareSquare} />
            </S.IconWrapper>
            <Button
              buttonStyle="primary"
              textSize="large"
              onClick={handleClick}
            >
              {email === loginData?.user.email
                ? "모임 삭제하기"
                : "모임 참가하기"}
            </Button>
          </S.ButtonWrapper>
        </S.DetailBlock>
      </S.InfoBlock>
      <S.ContentBlock>
        <h2>모임 소개</h2>
        {content}
      </S.ContentBlock>
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="확인"
        onClick={() => {
          setModal(!modal);
        }}
      />
    </>
  );
};

export default React.memo(Content);
