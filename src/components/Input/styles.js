import styled, { css } from "styled-components";

export const inputStyle = css`
  ${(props) =>
    props.inputStyle === "borderNone" &&
    css`
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    `}
  ${(props) =>
    props.inputStyle === "border" &&
    css`
      padding-left: 10px;
      border: 1px solid ${({ theme }) => theme.colors.lightGray};
    `}
`;

export const StyledInput = styled.input`
  background-color: transparent;
  width: 100%;
  padding: 10px 0;
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  ${inputStyle}
`;
