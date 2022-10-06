import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

import * as S from "./styles";

const NoContent = ({ title, titleSize, iconSize }) => {
  return (
    <S.Container>
      <S.Title titleSize={titleSize}>{title}</S.Title>
      <S.IconWrapper iconSize={iconSize}>
        <FontAwesomeIcon icon={faFolderOpen} />
      </S.IconWrapper>
    </S.Container>
  );
};

export default React.memo(NoContent);
