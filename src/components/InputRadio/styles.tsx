import { Image } from "expo-image";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

type IRadio = {
  isSelected: boolean;
} & TouchableOpacityProps;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
`;

export const Radio = styled.TouchableOpacity<IRadio>`
  padding: 20px;
  flex: 1;
  border: 2px solid ${({ theme, isSelected }) => theme.colors[isSelected ? "buttonDisabled" : "border1"]};
  border-radius: 4px;
`;

export const RadioText = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const RadioImage = styled(Image)`
  height: 25px;
`;
