import styled from "styled-components/native";
import { Image } from "expo-image";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WrapperInfo = styled.View`
  gap: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 24px;
  line-height: 29.05px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 70%;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 16px;
  line-height: 19.36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecundary};
  max-width: 70%;
`;

export const ImageCarousel = styled(Image)`
  width: 286.57px;
  height: 286.57px;
`;
