import React from "react";
import styled, { css } from "styled-components";

const buttonStyle = css`
  ${(props) =>
    props.buttonStyle === "default" &&
    css`
      background-color: ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.darkGray};
    `}
  ${(props) =>
    props.buttonStyle === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    `}
    ${(props) =>
    props.buttonStyle === "transparent" &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray};
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

const StyledButton = styled.button`
  width: 100%;
  border-radius: 6px;
  text-align: center;
  padding: 10px;
  ${buttonStyle}
  ${textSize}
`;

const Button = ({
  children,
  type = "button",
  disabled,
  onClick,
  buttonStyle,
  textSize,
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      buttonStyle={buttonStyle}
      textSize={textSize}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default React.memo(Button);
