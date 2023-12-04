import { Image } from "expo-image";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export const TextItem = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const IconImage = styled(Image)`
  width: 24px;
  height: 24px;
`;
