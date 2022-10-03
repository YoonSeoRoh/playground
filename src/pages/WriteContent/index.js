import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { tabList } from "../../libs/data/tabList";
import { cityList } from "../../libs/data/cityList";
import { writeValidation } from "../../libs/validations/writeValidation";
import { addContentThunk } from "../../actions/content";

import DropDownMenu from "../../components/DropDownMenu";
import Input from "../../components/Input";
import ContentForm from "../../components/ContentForm";
import Button from "../../components/Button";
import ModalAlert from "../../components/ModalAlert";

import * as S from "./styles";

export default function WriteContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginData } = useSelector((state) => state.user);
  const { addContent } = useSelector((state) => state.content);

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

  const getCategory = (name) => {
    setCategory(name);
  };

  const getCity = (name) => {
    setCity(name);
  };

  const handleChange = ({ name, value }) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleSubmit = () => {
    //api 연결
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
          join: 0,
          joined: 0,
        })
      );
    }
    reset();
  };

  useEffect(() => {
    if (!loginData) {
      navigate("/");
    }
  });

  useEffect(() => {
    if (addContent) {
      navigate(`/content/${addContent.id}`);
    }
  });

  return (
    <S.WriteContainer>
      <DropDownMenu data={tabList} getData={getCategory} />
      <DropDownMenu data={cityList} getData={getCity} />
      <form>
        <S.Label>제목</S.Label>
        <Input
          placeholder="제목을 입력하세요."
          inputStyle="border"
          {...register("title")}
          onChange={handleChange}
        />
        <S.Label>내용</S.Label>
        <ContentForm
          placeholder="모임에 대한 소개를 해주세요.(목적, 일시 등)"
          {...register("content")}
          onChange={handleChange}
        />
        <S.ButtonContainer>
          <S.ButtonBlock>
            <Button
              buttonStyle="transparent"
              textSize="large"
              onClick={() => navigate("/")}
            >
              홈으로
            </Button>
          </S.ButtonBlock>
          <S.ButtonBlock>
            <Button
              type="submit"
              onClick={handleSubmit}
              buttonStyle="primary"
              textSize="large"
            >
              모임 열기
            </Button>
          </S.ButtonBlock>
        </S.ButtonContainer>
      </form>
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="확인"
        onClick={() => {
          setModal(!modal);
        }}
      />
    </S.WriteContainer>
  );
}
