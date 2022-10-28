import styled, { css } from "styled-components";

const menuShow = css`
  ${({ menuShow }) => {
    switch (menuShow) {
      case true:
        return css`
          display: block;
        `;
      case false:
        return css`
          display: none;
        `;
      default:
        return;
    }
  }}
`;

export const Display = styled.div`
  ${menuShow}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 6px;
  padding: 0 10px;
  width: 100%;
`;

export const Block = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;
`;
