import styled from "styled-components/native";

export const Wrapper = styled.View`
  gap: 13px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 17px;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.auxiliary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  line-height: 18px;
  margin-top: -10px;
`;
