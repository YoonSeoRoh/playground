import React from "react";

import * as S from "./styles";
import Spinner from "../../assets/spinner.gif";

const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.LoadingText>잠시만 기다려주세요...</S.LoadingText>
      <img src={Spinner} alt="로딩중" width="10%" />
    </S.LoadingContainer>
  );
};

export default React.memo(Loading);
