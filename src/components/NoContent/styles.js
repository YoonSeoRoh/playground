import styled, { css } from "styled-components";

const titleSize = css`
  ${({ titleSize }) => {
    switch (titleSize) {
      case "large":
        return css`
          font-size: ${({ theme }) => theme.fontSizes.title};
          font-weight: ${({ theme }) => theme.fontWeights.title};
        `;
      default:
        return css`
          font-size: ${({ theme }) => theme.fontSizes.base};
          font-weight: ${({ theme }) => theme.fontWeights.base};
        `;
    }
  }}
`;

const iconSize = css`
  ${({ iconSize }) => {
    switch (iconSize) {
      case "large":
        return css`
          font-size: ${({ theme }) => theme.fontSizes.icon};
        `;
      default:
        return css`
          font-size: ${({ theme }) => theme.fontSizes.title};
        `;
    }
  }}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkGray};
  ${titleSize}
`;

export const IconWrapper = styled.div`
  padding: 10px 0;
  ${iconSize}
`;
