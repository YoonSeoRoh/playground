import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getContentsThunk } from "../../actions/content";

import Slide from "../../components/Slide";
import Card from "../../components/Card";
import NoContent from "../../components/NoContent";
import Loading from "../../components/Loading";

import * as S from "./styles";

export default function Main() {
  const dispatch = useDispatch();

  const { contentsData, contentsLoading } = useSelector(
    (state) => state.content
  );

  useEffect(() => {
    dispatch(getContentsThunk());
  }, [dispatch]);

  return (
    <S.Container>
      {contentsLoading ? (
        <Loading />
      ) : (
        <>
          <S.IntroBlock>
            <Slide />
            <S.Title>
              <h1>
                FIND YOUR <span>PLAYGROUND</span>
              </h1>
              <p>다양한 사람들과 함께 경험해보세요.</p>
            </S.Title>
          </S.IntroBlock>
          <>
            {contentsData && contentsData.length !== 0 ? (
              <S.MainBlock>
                {contentsData?.map((item, index) => (
                  <Card key={index} data={item} />
                ))}
              </S.MainBlock>
            ) : (
              <NoContent
                title="등록된 모임이 없습니다."
                titleSize="large"
                iconSize="large"
              />
            )}
          </>
        </>
      )}
    </S.Container>
  );
}
