import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signupValidation } from "../../libs/validations/signupValidation";
import { signupThunk } from "../../actions/user";

import Button from "../../components/Button";
import Input from "../../components/Input";
import ValidationMessage from "../../components/ValidationMessage";
import ModalAlert from "../../components/ModalAlert";

import * as S from "./styles";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { signupData } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(signupValidation),
  });

  const handleChange = ({ name, value }) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleSignup = useCallback(() => {
    dispatch(
      signupThunk({
        nickname: getValues("nickname"),
        email: getValues("email"),
        password: getValues("password"),
      })
    );
    reset();
  }, [dispatch, getValues, reset]);

  const handleModal = useCallback(() => {
    setModal(!modal);
    navigate("/login");
  }, [modal, navigate]);

  useEffect(() => {
    if (signupData) {
      setModal(true);
      setMsg("회원가입이 완료되었습니다.");
    }
  }, [navigate, signupData]);

  return (
    <>
      <S.SignupContainer>
        <S.Title>회원가입</S.Title>
        <S.Form>
          <S.Label>닉네임</S.Label>
          <Input
            type="email"
            placeholder="닉네임을 입력하세요."
            {...register("nickname")}
            onChange={handleChange}
          />
          <ValidationMessage>{errors.nickname?.message}</ValidationMessage>
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
          <S.Label>비밀번호 확인</S.Label>
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
            {...register("passwordConfirm")}
            onChange={handleChange}
          />
          <ValidationMessage>
            {errors.passwordConfirm?.message}
          </ValidationMessage>
          <S.ButtonContainer>
            <S.ButtonBlock>
              <Button
                type="submit"
                buttonStyle="primary"
                textSize="large"
                disabled={!isValid}
                onClick={handleSignup}
              >
                회원가입
              </Button>
            </S.ButtonBlock>
            <S.ButtonBlock>
              <Link to="/login">
                <Button buttonStyle="transparent" textSize="large">
                  로그인
                </Button>
              </Link>
            </S.ButtonBlock>
          </S.ButtonContainer>
        </S.Form>
      </S.SignupContainer>
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="로그인하기"
        onClick={handleModal}
      />
    </>
  );
}
