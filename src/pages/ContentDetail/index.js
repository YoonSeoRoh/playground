import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { commentValidation } from "../../libs/validations/commentValidation";

import {
  getContentThunk,
  getCommentsThunk,
  addCommentThunk,
} from "../../actions/content";

import Loading from "../../components/Loading";
import Button from "../../components/Button";
import Content from "../../components/Content";
import Comment from "../../components/Comment";
import Input from "../../components/Input";
import ModalAlert from "../../components/ModalAlert";

import * as S from "./styles";

const ContentDetail = () => {
  const params = useParams();
  const paramsId = parseInt(params.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(commentValidation),
  });

  const { contentData, contentLoading, commentsData } = useSelector(
    (state) => state.content
  );
  const { loginData } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = ({ name, value }) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleWrite = () => {
    if (!loginData) {
      setModal(true);
      setMsg("로그인이 필요합니다.");
    } else if (!isValid) {
      setModal(true);
      setMsg("댓글을 입력해주세요.");
    } else {
      dispatch(
        addCommentThunk({
          contentId: paramsId,
          email: loginData.user.email,
          nickname: loginData.user.nickname,
          comment: getValues("comment"),
        })
      );
      setModal(true);
      setMsg("등록되었습니다.");
    }
    reset();
  };

  useEffect(() => {
    dispatch(getContentThunk(parseInt(paramsId)));
    dispatch(getCommentsThunk(parseInt(paramsId)));
  }, [dispatch, paramsId]);

  return (
    <>
      {contentData && (
        <S.Container>
          <Content data={contentData} paramsId={paramsId} />
          <S.CommentBlock>
            {commentsData?.map((item) => (
              <Comment key={item.id} data={item} />
            ))}
          </S.CommentBlock>
          <S.WriteBlock>
            <Input
              inputStyle="border"
              placeholder="댓글을 입력하세요."
              {...register("comment")}
              onChange={handleChange}
            />
            <S.WriteButtonWrapper>
              <Button onClick={handleWrite} buttonStyle="primary">
                댓글 작성
              </Button>
            </S.WriteButtonWrapper>
          </S.WriteBlock>
        </S.Container>
      )}
      {contentLoading && <Loading />}
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="확인"
        onClick={() => {
          setModal(!modal);
          navigate("/");
        }}
      />
    </>
  );
};

export default React.memo(ContentDetail);
