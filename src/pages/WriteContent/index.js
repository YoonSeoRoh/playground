import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { tabList } from "../../libs/data/tabList";
import { cityList } from "../../libs/data/cityList";
import { writeValidation } from "../../libs/validations/writeValidation";
import { getContentThunk, addContentThunk } from "../../actions/content";

import DropDownMenu from "../../components/DropDownMenu";
import Input from "../../components/Input";
import ContentForm from "../../components/ContentForm";
import Button from "../../components/Button";
import ModalAlert from "../../components/ModalAlert";

import * as S from "./styles";

export default function WriteContent() {
  const { state } = useLocation();
  const paramsId = parseInt(state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginData } = useSelector((state) => state.user);
  const { contentData, addContent } = useSelector((state) => state.content);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");

  const [category, setCategory] = useState("스터디");
  const [city, setCity] = useState("서울");

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(writeValidation),
  });

  const getCategory = useCallback((name) => {
    setCategory(name);
  }, []);

  const getCity = useCallback((name) => {
    setCity(name);
  }, []);

  const handleChange = ({ name, value }) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleSubmit = useCallback(() => {
    if (!isValid) {
      setModal(true);
      setMsg("제목 및 내용을 입력해주세요.");
    } else {
      dispatch(
        addContentThunk({
          category: category,
          email: loginData.user.email,
          nickname: loginData.user.nickname,
          location: city,
          title: getValues("title"),
          content: getValues("content"),
          join: parseInt(getValues("join")),
          joined: 0,
        })
      );
    }
    reset();
  }, [category, city, dispatch, getValues, isValid, loginData, reset]);

  const handleModal = useCallback(() => {
    setModal(!modal);
    navigate("/login");
  }, [modal, navigate]);

  useEffect(() => {
    if (paramsId) {
      dispatch(getContentThunk(parseInt(paramsId)));
    }
  }, [contentData, dispatch, paramsId]);

  // useEffect(() => {
  //   if (!loginData) {
  //     navigate("/");
  //   }
  // });

  useEffect(() => {
    if (addContent) {
      navigate(`/content/${addContent.id}`);
    }
  });

  return (
    <S.WriteContainer>
      <DropDownMenu
        data={tabList}
        getData={getCategory}
        defaultValue={contentData && contentData.category}
      />
      <DropDownMenu
        data={cityList}
        getData={getCity}
        defaultValue={contentData && contentData.location}
      />
      <form>
        <S.Label>모집 인원</S.Label>
        <Input
          defaultValue={contentData && contentData.join}
          placeholder="모집 인원을 숫자로 입력하세요."
          inputStyle="border"
          {...register("join")}
          onChange={handleChange}
        />
        <S.Label>제목</S.Label>
        <Input
          defaultValue={contentData && contentData.title}
          placeholder="제목을 입력하세요."
          inputStyle="border"
          {...register("title")}
          onChange={handleChange}
        />
        <S.Label>내용</S.Label>
        <ContentForm
          defaultValue={contentData && contentData.content}
          placeholder="모임에 대한 소개를 해주세요.(목적, 일시 등)"
          {...register("content")}
          onChange={handleChange}
        />
        <S.ButtonContainer>
          <S.ButtonBlock>
            <Link to="/">
              <Button buttonStyle="transparent" textSize="large">
                홈으로
              </Button>
            </Link>
          </S.ButtonBlock>
          <S.ButtonBlock>
            <Button
              type="submit"
              onClick={handleSubmit}
              buttonStyle="primary"
              textSize="large"
            >
              {contentData ? "수정하기" : "모임 열기"}
            </Button>
          </S.ButtonBlock>
        </S.ButtonContainer>
      </form>
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="확인"
        onClick={handleModal}
      />
    </S.WriteContainer>
  );
}
