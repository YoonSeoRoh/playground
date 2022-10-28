import React from "react";
import * as S from "./styles";

const ModalDropDown = ({ menuShow, children }) => {
  return (
    <S.Display menuShow={menuShow}>
      <S.Container>
        <S.Block>{children}</S.Block>
      </S.Container>
    </S.Display>
  );
};

export default React.memo(ModalDropDown);
