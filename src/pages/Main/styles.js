import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 80px 20px 20px 20px;
`;

export const IntroBlock = styled.div`
  position: relative;
  height: 100vh;
  padding: 30px;
`;

export const Title = styled.div`
  position: absolute;
  text-align: right;
  top: 30%;
  left: 45%;
  h1 {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.fontSizes.icon};
    font-weight: ${({ theme }) => theme.fontWeights.icon};
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    padding-top: 10px;
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.sm};
  }
`;

export const MainBlock = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap 10px 10px;
`;
