import styled from "styled-components/native";
import { Image } from 'expo-image';

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary300};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageCustom = styled(Image)`
  flex: 1;
  width: 100%;
  height: 100%;
`;
