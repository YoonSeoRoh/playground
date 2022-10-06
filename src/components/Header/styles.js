import styled from "styled-components";

export const HeaderContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 58px;
  position: fixed;
  top: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  z-index: 999;
`;

export const Title = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.title};
`;

export const ButtonBlock = styled.div`
  display: flex;
`;

export const ProfileBlock = styled.div`
  display: flex;
  width: 150px;
`;

export const ImageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.title};
  a {
    color: ${({ theme }) => theme.colors.lightBlack};
  }
`;
