import styled from "styled-components/native";
import { View } from "react-native";
import Checkbox from 'expo-checkbox';

type WrapperProps = {
  isError?: boolean,
  isFocus?: boolean,
} & typeof View;

export const Wrapper = styled.View<WrapperProps>`
  gap: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled(Checkbox).attrs(({ theme, value }) => ({
  color: !!value ? theme.colors.buttonDisabled : theme.colors.textSecundary,
}))`
  border-radius: 1px;
  border: 1px solid red;
  padding: 10px;
`;

export const Label = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 85%;
`;
