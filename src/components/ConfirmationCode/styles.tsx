import { ViewProps } from "react-native";
import { Cursor } from "react-native-confirmation-code-field";
import styled from "styled-components/native";

type ITextCodeComp = {
  isFocusedComp?: boolean;
} & ViewProps;

export const ItemCode = styled.View<ITextCodeComp>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  min-width: 45px;
  border: 1px solid ${({ theme, isFocusedComp }) => theme.colors[isFocusedComp ? "buttonDisabled" : "textAuxiliary1"]};
  border-radius: 12px;
`;

export const ItemTextCode = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const TextSeparator = styled.Text`
  color: ${({ theme }) => theme.colors.textAuxiliary1};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const CursorCode = styled(Cursor)`
  color: ${({ theme }) => theme.colors.buttonDisabled};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

