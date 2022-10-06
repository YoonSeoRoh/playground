import styled, { css } from "styled-components";

const cardStyle = css`
  ${({ cardStyle }) => {
    switch (cardStyle) {
      case "mypage":
        return css`
          border: 1px solid ${({ theme }) => theme.colors.lighterGray};
          justify-content: center;
        `;
      default:
        return css`
          border-radius: 6px;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        `;
    }
  }}
`;

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
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
