import styled from "styled-components/native";

export const Wrapper = styled.View`
  gap: 24px;
  padding: 0 20px;
`;

export const Infos = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 24px;
  line-height: 29px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 14px;
  line-height: 17px;
`;
