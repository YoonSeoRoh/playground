import styled from "styled-components";

export const Title = styled.div`
color:  ${({ theme }) => theme.colors.gray};
font-size: ${({ theme }) => theme.fontSizes.xl};
font-weight:  font-weight: ${({ theme }) => theme.fontWeights.lg};
line-height: 130%;
padding: 30px 0;
white-space: pre-wrap;
text-align: center;
`;
