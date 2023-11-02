import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background0};
  flex: 1;
  gap: 34px;
  justify-content: space-between;
`;

export const Body = styled.View`
  flex: 1;
  gap: 14px;
  padding: 0 20px;
`;

export const Footer = styled.View`
  padding: 0 20px;
`;
