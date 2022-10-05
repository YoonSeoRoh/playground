import styled from "styled-components";

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const EditButtonWrapper = styled.div`
  position: absolute;
  right: 85px;
  width: 60px;
`;

export const DeleteButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  width: 60px;
`;

export const Content = styled.div`
  span {
    display: inline-block;
    padding-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.sm};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Edit = styled.div`
  width: 100%;
`;
