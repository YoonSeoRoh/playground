import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.section`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.title};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>PLAYGROUND</Title>
    </HeaderContainer>
  );
};

export default React.memo(Header);
