import styled from "styled-components";

export const LoginContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.title};
`;

export const Label = styled.label`
  display: block;
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fontSizes.base}
  font-weight:${({ theme }) => theme.fontWeights.base}
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 42%;
  margin: 0 auto;
  padding-top: 30px;
`;

export const ButtonContainer = styled.div`
  padding: 40px 0;
`;

export const ButtonBlock = styled.div`
  padding: 5px 0;
`;
