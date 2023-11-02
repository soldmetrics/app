import styled from "styled-components/native";
import { Image } from "expo-image";
import { View } from "react-native";

type WrapperProps = {
  isError?: boolean,
  isFocus?: boolean,
} & typeof View;

export const Wrapper = styled.View<WrapperProps>`
  gap: 8px;
  border-radius: 2px;
  border: 1.6px solid ${({ theme }) => theme.colors.border0};
  border-color:
    ${({ theme, isError, isFocus }) => {
      switch (true) {
        case isFocus:
          return theme.colors.buttonDisabled;
        case isError:
          return theme.colors.auxiliary;
        default:
          return theme.colors.border0;
      }
    }};
  padding: 13px 16px;
  flex-direction: row;
`;

export const IconLeft = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  flex: 1;
`;
