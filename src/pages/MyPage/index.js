import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { getMyContentsThunk, getMyCommentsThunk } from "../../actions/user";

import Comment from "../../components/Comment";
import Card from "../../components/Card";
import NoContent from "../../components/NoContent";

import * as S from "./styles";

export default function MyPage() {
  const dispatch = useDispatch();
  const { loginData, commentData, contentData } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getMyContentsThunk(loginData.user.email));
    dispatch(getMyCommentsThunk(loginData.user.email));
  }, [dispatch, loginData.user.email]);

  return (
    <S.MyPageContainer>
      <S.ProfileBlock>
        <S.Image>
          <FontAwesomeIcon icon={faUser} />
        </S.Image>
        <S.NickName>환영합니다, {loginData?.user.nickname}님</S.NickName>
        <S.Email>{loginData?.user.email}</S.Email>
      </S.ProfileBlock>
      <S.Title>내가 남긴 댓글</S.Title>
      <S.Block>
        {commentData.length !== 0 ? (
          commentData?.map((item) => <Comment key={item.id} data={item} />)
        ) : (
          <NoContent title="댓글이 없습니다." />
        )}
      </S.Block>
      <S.Title>내가 주최한 모임</S.Title>
      <S.Block>
        {contentData.length !== 0 ? (
          contentData?.map((item) => (
            <Card key={item.id} data={item} cardStyle="mypage" />
          ))
        ) : (
          <NoContent title="모임이 없습니다." />
        )}
      </S.Block>
      <S.Title>내가 참여한 모임</S.Title>
      <S.Block>
        {contentData.length !== 0 ? (
          contentData?.map((item) => (
            <Card key={item.id} data={item} cardStyle="mypage" />
          ))
        ) : (
          <NoContent title="모임이 없습니다." />
        )}
      </S.Block>
    </S.MyPageContainer>
  );
}
