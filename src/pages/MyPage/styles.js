import styled from "styled-components";

export const MyPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 80px 20px 20px 20px;
  background-color: ${({ theme }) => theme.colors.lighterGray};
`;

export const ProfileBlock = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 0;
`;

export const Image = styled.div`
  padding-left: 10px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.icon};
`;

export const NickName = styled.h1`
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.lightBlack};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.sm};
`;

export const Email = styled.h2`
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.sm};
`;

export const Block = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.p`
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.base};
`;
