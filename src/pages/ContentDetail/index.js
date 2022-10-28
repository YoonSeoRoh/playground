import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { commentValidation } from "../../libs/validations/commentValidation";

import {
  getContentThunk,
  getCommentsThunk,
  addCommentThunk,
  deleteContentThunk,
} from "../../actions/content";

import Loading from "../../components/Loading";
import Button from "../../components/Button";
import Content from "../../components/Content";
import Comment from "../../components/Comment";
import Input from "../../components/Input";
import ModalAlert from "../../components/ModalAlert";
import ModalDropDown from "../../components/ModalDropDown";

import * as S from "./styles";
import More from "../../assets/ic_more.png";
import Write from "../../assets/ic_write.png";
import Delete from "../../assets/ic_delete.png";

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

  const [menu, setMenu] = useState(false);

  const handleChange = ({ name, value }) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleWrite = useCallback(() => {
    let message = "";
    if (!loginData) {
      message = "로그인이 필요합니다.";
    } else if (!isValid) {
      message = "댓글을 입력해주세요.";
    } else {
      dispatch(
        addCommentThunk({
          contentId: paramsId,
          email: loginData.user.email,
          nickname: loginData.user.nickname,
          comment: getValues("comment"),
        })
      );
      message = "등록되었습니다.";
    }
    setModal(true);
    setMsg(message);
    reset();
  }, [dispatch, getValues, isValid, loginData, paramsId, reset]);

  const handleEdit = useCallback(() => {
    navigate("/writecontent", {
      state: paramsId,
    });
  }, [navigate, paramsId]);

  const handleDelete = useCallback(() => {
    setMenu(!menu);
    dispatch(deleteContentThunk(paramsId));
    setModal(true);
    setMsg("삭제되었습니다.");
  }, [dispatch, menu, paramsId]);

  const handleModal = useCallback(() => {
    setModal(!modal);
    navigate("/");
  }, [modal, navigate]);

  const handleMenu = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  useEffect(() => {
    dispatch(getContentThunk(parseInt(paramsId)));
    dispatch(getCommentsThunk(parseInt(paramsId)));
  }, [dispatch, paramsId]);

  useEffect(() => {
    if (contentData && Object.keys(contentData).length === 0) {
      setModal(true);
      setMsg("존재하지 않는 게시물입니다.");
    }
  }, [contentData]);

  return (
    <S.Container>
      {contentData && (
        <>
          <S.MenuBlock>
            <S.Menu>
              <img src={More} alt="메뉴" onClick={handleMenu} />
              <S.ModalWrpper>
                <ModalDropDown menuShow={menu}>
                  <S.MenuItem onClick={handleEdit}>
                    수정하기
                    <img src={Write} alt="수정" />
                  </S.MenuItem>
                  <S.MenuItem delete onClick={handleDelete}>
                    삭제하기
                    <img src={Delete} alt="삭제" />
                  </S.MenuItem>
                </ModalDropDown>
              </S.ModalWrpper>
            </S.Menu>
          </S.MenuBlock>
          <S.InnerContainer>
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
          </S.InnerContainer>
        </>
      )}
      {contentLoading && <Loading />}
      <ModalAlert
        isOpen={modal}
        title={msg}
        buttonTitle="확인"
        onClick={handleModal}
      />
    </S.Container>
  );
};

export default React.memo(ContentDetail);
