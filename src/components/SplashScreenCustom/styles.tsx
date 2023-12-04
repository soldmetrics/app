import styled from "styled-components/native";
import { Image } from 'expo-image';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const ImageCustom = styled(Image)`
  flex: 1;
  width: 100%;
  height: 100%;
`;
