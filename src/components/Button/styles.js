import styled, { css } from "styled-components";

const buttonStyle = css`
  ${(props) =>
    props.buttonStyle === "default" &&
    css`
      background-color: ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.gray};
      border-radius: 6px;
    `}
  ${(props) =>
    props.buttonStyle === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 6px;
    `}
  ${(props) =>
    props.buttonStyle === "transparent" &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray};
    `}
  ${(props) =>
    props.buttonStyle === "logout" &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.lightBlack};
      border-radius: 6px;
    `}
    ${(props) =>
    props.buttonStyle === "modal" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    `}
`;

const textSize = css`
  ${(props) =>
    props.textSize === "sm" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.sm};
      font-weight: ${({ theme }) => theme.fontWeights.sm};
    `}
  ${(props) =>
    props.textSize === "base" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.base};
      font-weight: ${({ theme }) => theme.fontWeights.base};
    `} 
        ${(props) =>
    props.textSize === "large" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.lg};
      font-weight: ${({ theme }) => theme.fontWeights.lg};
    `}
`;

export const StyledButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 10px;
  ${buttonStyle}
  ${textSize}
`;
