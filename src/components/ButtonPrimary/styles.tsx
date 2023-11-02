import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  padding: 13px;
  width: 100%;
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "buttonDefault" : "buttonDisabled"]};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const Text = styled.Text`
  color: ${({ theme, disabled }) => disabled ? theme.colors.textAuxiliary0 : "#fff"};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 22px;
`;

export const Spinner = styled.ActivityIndicator``;
