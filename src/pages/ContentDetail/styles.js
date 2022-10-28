import styled, { css } from "styled-components";

export const Container = styled.section`
  padding: 80px 0 20px 0;
`;

export const InnerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuBlock = styled.section`
  position: relative;
`;

export const Menu = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    cursor: pointer;
    display: inline-block;
    width: 30px;
    height: 30px;
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.sm};
  img {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  ${(props) =>
    props.delete &&
    css`
      color: ${({ theme }) => theme.colors.red};
      border-top: 1px solid ${({ theme }) => theme.colors.lighterGray};
    `}
`;

export const ModalWrpper = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
  width: 150px;
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
