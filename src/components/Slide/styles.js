import styled from "styled-components";

export const SlideContainer = styled.section`
  overflow: hidden;
  .slick-slide {
    display: inline-block;
  }
`;

export const Slide = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  img {
    display: inline-block;
    width: 460px;
    height: 400px;
  }
`;
