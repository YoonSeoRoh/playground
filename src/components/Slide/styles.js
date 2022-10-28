import styled from "styled-components";

export const SlideContainer = styled.section`
  overflow: hidden;
  .slick-slide {
    display: inline-block;
  }
  .slick-list {
    margin: 0 -5px;
  }
`;

export const Slide = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  img {
    display: inline-block;
    width: 480px;
    height: 400px;
  }
`;
