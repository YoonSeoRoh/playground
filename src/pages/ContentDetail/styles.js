import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0 20px 0;
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

export const CommentBlock = styled.div`
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.lighterGray};
`;
