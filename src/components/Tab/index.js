import React, { useState } from "react";
import styled, { css } from "styled-components";

import { tabList } from "../../libs/data/tabList";

const listStyle = css`
  ${(props) =>
    props.listStyle === "default" &&
    css`
      color: ${({ theme }) => theme.colors.gray};
    `}
  ${(props) =>
    props.listStyle === "selected" &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`;

const TabContainer = styled.section`
  width: 100%;
  height: 58px;
  position: fixed;
  top: 60px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const TabTitle = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TabList = styled.li`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.base};
  ${listStyle}
`;

const PanelContainer = styled.section``;

const Panel = ({ children, isSelected }) => {
  return (
    <PanelContainer style={isSelected ? "block" : "none"}>
      {children}
    </PanelContainer>
  );
};

const Tab = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };
  return (
    <TabContainer>
      <TabTitle>
        {tabList.map((item) => {
          return (
            <TabList
              key={item.id}
              onClick={() => tabClickHandler(item.id)}
              listStyle={
                activeIndex === parseInt(item.id) ? "selected" : "default"
              }
            >
              {item.title}
            </TabList>
          );
        })}
      </TabTitle>
      {React.children.map((item) => (
        <Panel>{children}</Panel>
      ))}
    </TabContainer>
  );
};

Tab.Panel = Panel;

export default Tab;
