import React from "react";
import styled from "styled-components";

import Button from "../Button";

const HeaderContainer = styled.section`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.title};
`;

const ButtonBlock = styled.div`
  display: flex;
  width: 15%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>PLAYGROUND</Title>
      <ButtonBlock>
        <Button buttonStyle="transparent" textSize="base">
          로그인
        </Button>
        <Button buttonStyle="primary" textSize="base">
          회원가입
        </Button>
      </ButtonBlock>
    </HeaderContainer>
  );
};

export default React.memo(Header);
