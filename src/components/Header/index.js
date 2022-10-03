import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFile } from "@fortawesome/free-regular-svg-icons";

import { logout } from "../../reducers/user";

import Button from "../Button";

import * as S from "./styles";

const Header = () => {
  const { loginDone } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <S.HeaderContainer>
      <S.Title onClick={() => navigate("/")}>PLAYGROUND</S.Title>
      {loginDone ? (
        <S.ProfileBlock>
          <S.ImageBlock onClick={() => navigate("/writecontent")}>
            <FontAwesomeIcon icon={faFile} />
          </S.ImageBlock>
          <S.ImageBlock onClick={() => navigate("/mypage")}>
            <FontAwesomeIcon icon={faUser} />
          </S.ImageBlock>
          <Button onClick={handleLogout} buttonStyle="logout" textSize="base">
            로그아웃
          </Button>
        </S.ProfileBlock>
      ) : (
        <S.ButtonBlock>
          <Button
            onClick={() => navigate("/login")}
            buttonStyle="transparent"
            textSize="base"
          >
            로그인
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            buttonStyle="primary"
            textSize="base"
          >
            회원가입
          </Button>
        </S.ButtonBlock>
      )}
    </S.HeaderContainer>
  );
};

export default React.memo(Header);
