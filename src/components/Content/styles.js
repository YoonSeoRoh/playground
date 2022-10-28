import styled from "styled-components";

export const Category = styled.h2`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.base};
`;

export const Title = styled.h1`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.base};
`;

export const ImageWrapper = styled.div`
  img {
    width: 300px;
    height: 300px;
    background-size: fill;
    border-radius: 6px;
  }
`;

export const InfoBlock = styled.div`
  padding: 20px 0;
  display: flex;
`;

export const DetailBlock = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  line-height: 150%;
  flex-direction: column;
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.base};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.sm};
    color: ${({ theme }) => theme.colors.darkgray};
    padding-right: 5px;
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.xs};
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const DetailWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lighterGray};
  padding-top: 10px;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const WriteBlock = styled.div`
  width: 100%;
  padding: 20px 20px 0 20px;
  display: flex;
`;

export const WriteButtonWrapper = styled.div`
  padding-left: 10px;
  width: 10%;
`;

export const ContentBlock = styled.div`
  padding: 20px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  h2 {
    padding-bottom: 30px;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.base};
    color: ${({ theme }) => theme.colors.gray};
  }
`;
