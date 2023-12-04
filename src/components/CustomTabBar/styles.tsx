import { TextProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
  isFocused?: boolean;
} & TouchableOpacityProps;

type LabelProps = {
  isFocused?: boolean;
} & TextProps;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0 solid ${({ theme }) => theme.colors.background2};
  border-top-color: ${({ theme, isFocused }) => theme.colors[isFocused ? "buttonHover" : "background2"]};
  border-top-width: 2px;
  padding: 14px 0 28px;
`;

export const Label = styled.Text<LabelProps>`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, isFocused }) => theme.colors[isFocused ? "buttonHover" : "textAuxiliary0"]};
`;
