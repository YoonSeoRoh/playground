import styled from "styled-components";

export const WriteContainer = styled.section`
  padding: 80px 20px 20px 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.base}
  font-weight:${({ theme }) => theme.fontWeights.base}
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const ButtonBlock = styled.div`
  padding: 0 10px;
`;
