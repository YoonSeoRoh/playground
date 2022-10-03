import React from "react";
import * as S from "./styles";

export default function Loading() {
  return (
    <S.LoadingContainer>
      <S.LoadingText>잠시만 기다려주세요...</S.LoadingText>
      <img src="/assets/spinner.gif" alt="로딩중" width="10%" />
    </S.LoadingContainer>
  );
}
