import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

const Card = ({ data, cardStyle = "default" }) => {
  const navigate = useNavigate();
  const { id, category, location, title } = data;
  const handleClick = () => {
    navigate(`/content/${id}`);
  };
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
