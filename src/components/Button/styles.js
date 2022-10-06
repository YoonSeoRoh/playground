import styled, { css } from "styled-components";

const buttonStyle = css`
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
          border-radius: 6px;
        `;
      case "transparent":
        return css`
          background-color: transparent;
          color: ${({ theme }) => theme.colors.gray};
        `;
      case "logout":
        return css`
          background-color: transparent;
          color: ${({ theme }) => theme.colors.lightBlack};
          border-radius: 6px;
        `;
      case "modal":
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
        `;
      case "edit":
        return css`
          background-color: transparent;
          color: ${({ theme }) => theme.colors.primary};
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.lightGray};
          color: ${({ theme }) => theme.colors.gray};
          border-radius: 6px;
        `;
    }
  }}
`;

const textSize = css`
  ${({ textSize }) => {
    switch (textSize) {
      case "base":
        return css`
          font-size: ${({ theme }) => theme.fontSizes.base};
          font-weight: ${({ theme }) => theme.fontWeights.base};
        `;
      case "large":
        return css`
          font-size: ${({ theme }) => theme.fontSizes.lg};
          font-weight: ${({ theme }) => theme.fontWeights.lg};
        `;
      default:
        return css`
          font-size: ${({ theme }) => theme.fontSizes.sm};
          font-weight: ${({ theme }) => theme.fontWeights.sm};
        `;
    }
  }}
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px;
  ${buttonStyle}
  ${textSize}
`;
