import React from "react";
import * as S from "./styles";

const ValidationMessage = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default React.memo(ValidationMessage);
