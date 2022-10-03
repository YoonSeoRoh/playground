import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getContentsThunk } from "../../actions/content";

import Card from "../../components/Card";
import NoContent from "../../components/NoContent";
import Loading from "../../components/Loading";

import * as S from "./styles";

export default function Main() {
  const dispatch = useDispatch();

  const { contentsData, contentsLoading, contentsDone } = useSelector(
    (state) => state.content
  );

  useEffect(() => {
    if (!contentsDone) {
      dispatch(getContentsThunk());
    }
  });

  const handleClick = () => {};

  return (
    <>
      {contentsData && contentsData.length !== 0 ? (
        <S.Container onClick={handleClick}>
          {contentsData?.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </S.Container>
      ) : (
        <NoContent />
      )}
      {contentsLoading && <Loading />}
    </>
  );
}
