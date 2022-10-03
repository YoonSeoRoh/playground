import styled from "styled-components";

export const Container = styled.p`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.red};
`;
