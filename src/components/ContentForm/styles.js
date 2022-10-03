import styled from "styled-components";

export const StyledForm = styled.textarea`
  background-color: transparent;
  width: 100%;
  height: 40vh;
  padding: 10px;
  resize: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
