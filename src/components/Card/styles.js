import styled, { css } from "styled-components";

const cardStyle = css`
  ${(props) =>
    props.cardStyle === "default" &&
    css`
      border-radius: 6px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    `}
  ${(props) =>
    props.cardStyle === "mypage" &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.lighterGray};
      justify-content: center;
    `}
`;

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${cardStyle}
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const Category = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.base};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Location = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 150%;
`;
