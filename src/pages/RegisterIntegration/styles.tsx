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

export const TextLink = styled.Text`
  color: ${({ theme }) => theme.colors.buttonDisabled};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 14px;
  text-align: right;
  padding: 8px;
`;
