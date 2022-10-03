import React from "react";
import * as S from "./styles";

const NoContent = () => {
  return (
    <S.Container>
      <S.Title>등록된 글이 없습니다.</S.Title>
    </S.Container>
  );
};

export default React.memo(NoContent);
