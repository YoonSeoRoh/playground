import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

const Card = ({ data, cardStyle }) => {
  const navigate = useNavigate();
  const { id, category, location, title } = data;

  const handleClick = useCallback(() => {
    navigate(`/content/${id}`);
  }, [id, navigate]);

  return (
    <S.Container onClick={handleClick} cardStyle={cardStyle}>
      <S.Detail>
        <S.Category>{category}</S.Category>
        <S.Location>{location}</S.Location>
      </S.Detail>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default React.memo(Card);
