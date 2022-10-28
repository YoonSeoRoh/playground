import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFile } from "@fortawesome/free-regular-svg-icons";

import { logout } from "../../reducers/user";

import Button from "../Button";

import * as S from "./styles";

const Header = () => {
  const { loginDone } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/", { replace: true });
    window.location.reload();
  }, [dispatch, navigate]);

  return (
    <S.HeaderContainer>
      <Link to="/">
        <S.Title>PLAYGROUND</S.Title>
      </Link>
      {loginDone ? (
        <S.ProfileBlock>
          <S.ImageBlock>
            <Link to="/writecontent">
              <FontAwesomeIcon icon={faFile} />
            </Link>
          </S.ImageBlock>
          <S.ImageBlock>
            <Link to="/mypage">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </S.ImageBlock>
          <Button onClick={handleLogout} buttonStyle="logout" textSize="base">
            로그아웃
          </Button>
        </S.ProfileBlock>
      ) : (
        <S.ButtonBlock>
          <Link to="/login">
            <Button buttonStyle="transparent" textSize="base">
              로그인
            </Button>
          </Link>
          <Link to="/signup">
            <Button buttonStyle="primary" textSize="base">
              회원가입
            </Button>
          </Link>
        </S.ButtonBlock>
      )}
    </S.HeaderContainer>
  );
};

export default React.memo(Header);
