import React from "react";
import * as S from "./styles";

const ValidationMessage = ({ children }) => {
  console.log("메세지 렌더링 됨");
  return <S.Container>{children}</S.Container>;
};

export default React.memo(ValidationMessage);
