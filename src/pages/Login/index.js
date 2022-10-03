import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginValidation } from "../../libs/validations/loginValidation";
import { loginThunk } from "../../actions/user";

import Button from "../../components/Button";
import Input from "../../components/Input";
import ValidationMessage from "../../components/ValidationMessage";
import ModalAlert from "../../components/ModalAlert";

import * as S from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginDone, loginData } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const handleChange = ({ name, value }) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleLogin = () => {
    //api 연결
    dispatch(
      loginThunk({ email: getValues("email"), password: getValues("password") })
    );
    reset();
  };

  useEffect(() => {
    if (loginDone) {
      if (loginData.user) {
        navigate("/");
      } else {
        setModal(true);
        setMsg(loginData);
      }
    }
  }, [loginDone, loginData, navigate]);

  return (
    <S.LoginContainer>
      <S.Title>로그인</S.Title>
      <S.Form>
        <S.Label>이메일</S.Label>
        <Input
          type="email"
          placeholder="이메일을 입력하세요."
          {...register("email")}
          onChange={handleChange}
        />
        <ValidationMessage>{errors.email?.message}</ValidationMessage>
        <S.Label>비밀번호</S.Label>
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요."
          {...register("password")}
          onChange={handleChange}
        />
        <ValidationMessage>{errors.password?.message}</ValidationMessage>
        <S.ButtonContainer>
          <S.ButtonBlock>
            <Button
              type="submit"
              buttonStyle="primary"
              textSize="large"
              disabled={!isValid}
              onClick={handleLogin}
            >
              로그인
            </Button>
          </S.ButtonBlock>
          <S.ButtonBlock>
            <Button
              onClick={() => navigate("/signup")}
              buttonStyle="transparent"
              textSize="large"
            >
              회원가입
            </Button>
          </S.ButtonBlock>
        </S.ButtonContainer>
      </S.Form>
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="확인"
        onClick={() => {
          setModal(!modal);
          navigate("/login");
        }}
      />
    </S.LoginContainer>
  );
};

export default React.memo(Login);
