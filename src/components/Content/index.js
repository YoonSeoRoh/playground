import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";

import {
  deleteContentThunk,
  addJoinThunk,
  deleteJoinThunk,
} from "../../actions/content";
import { editJoinedThunk } from "../../actions/user";

import Button from "../../components/Button";
import ModalAlert from "../../components/ModalAlert";

import * as S from "./styles";
import Example from "../../assets/example.jpg";

const Content = ({ data, paramsId }) => {
  const dispatch = useDispatch();
  const { category, title, join, joined, nickname, location, content, email } =
    data;
  const { loginData } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [userJoin, setUserJoin] = useState(false);

  const userEmail = loginData?.user.email;

  const handleJoinList = useCallback(
    (index, type) => {
      let list = [];
      if (type === "DELETE") {
        console.log(list);
        list = loginData.user.joined.filter((i) => i !== index);
        console.log(list);
      }
      if (type === "PUT") {
        list = loginData.user.joined.push(index);
      }
      return list;
    },
    [loginData]
  );

  const handleJoin = useCallback(() => {
    let list = [];
    let message = "";
    if (!loginData) {
      message = "로그인이 필요합니다.";
    } else if (email !== userEmail) {
      if (userJoin) {
        list = handleJoinList(paramsId, "DELETE");
        dispatch(
          editJoinedThunk({
            id: loginData.user.id,
            joined: list,
          })
        );
        dispatch(
          deleteJoinThunk({ id: paramsId, joined: parseInt(joined) - 1 })
        );
        message = "참가 신청을 취소하였습니다.";
      } else if (
        parseInt(joined) !== 0 &&
        parseInt(joined) === parseInt(join)
      ) {
        message = "인원 초과입니다.";
      } else {
        list = handleJoinList(paramsId, "PUT");
        dispatch(
          editJoinedThunk({
            id: loginData.user.id,
            joined: list,
          })
        );
        dispatch(addJoinThunk({ id: paramsId, joined: parseInt(joined) + 1 }));
        message = "참여 신청이 완료되었습니다.";
      }
    }
    setModal(true);
    setMsg(message);
  }, [
    dispatch,
    email,
    handleJoinList,
    join,
    joined,
    loginData,
    paramsId,
    userEmail,
    userJoin,
  ]);

  const handleDelete = useCallback(() => {
    dispatch(deleteContentThunk(paramsId));
    setModal(true);
    setMsg("삭제되었습니다.");
  }, [dispatch, paramsId]);

  const handleShare = useCallback(() => {
    let shareLink = `http://localhost:3000/content/${paramsId}`;
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "PLAYGROUND",
          description: "모임을 찾아보세요!",
          imageUrl: "",
          link: {
            webUrl: shareLink,
          },
        },
        buttons: [
          {
            title: "모임 보기",
            link: {
              webUrl: shareLink,
            },
          },
        ],
      });
    }
  }, [paramsId]);

  const handleModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  useEffect(() => {
    if (loginData) {
      setUserJoin(loginData.user.joined.includes(paramsId));
    }
  }, [loginData, paramsId]);

  return (
    <>
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
      <S.InfoBlock>
        <S.ImageWrapper>
          <img src={Example} alt="샘플" />
        </S.ImageWrapper>
        <S.DetailBlock>
          <p>모집 인원</p>
          <h2>{join}</h2>
          <p>참가 인원</p>
          <h2>{joined}</h2>
          <S.DetailWrapper>
            <S.FlexWrapper>
              <h3>작성자 </h3>
              <span>{nickname}</span>
            </S.FlexWrapper>
            <S.FlexWrapper>
              <h3>지역 </h3>
              <span>{location}</span>
            </S.FlexWrapper>
          </S.DetailWrapper>
          <S.FlexWrapper>
            <S.IconWrapper onClick={handleShare}>
              <FontAwesomeIcon icon={faShareSquare} />
            </S.IconWrapper>
            {email === userEmail ? (
              <Button
                buttonStyle="primary"
                textSize="large"
                onClick={handleDelete}
              >
                모임 삭제하기
              </Button>
            ) : (
              <Button
                buttonStyle="primary"
                textSize="large"
                onClick={handleJoin}
              >
                {userJoin ? "모임 불참하기" : "모임 참가하기"}
              </Button>
            )}
          </S.FlexWrapper>
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
        onClick={handleModal}
      />
    </>
  );
};

export default React.memo(Content);
