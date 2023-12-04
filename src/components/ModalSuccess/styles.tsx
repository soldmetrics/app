import BottomSheet from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Wrapper = styled(BottomSheet)`
  display: flex;
  flex: 1;
  box-shadow: 10px 10px 50px rgba(0,0,0, 0.75);
`;

export const Content = styled.View`
  padding: 0 20px;
  gap: 24px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  width: 100%;
  align-self: flex-end;
  align-items: center;
`;

export const Img = styled(Image)`
  width: 140px;
  height: 85px;
`;

export const Info = styled.View`
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 261px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.textSecundary};
  max-width: 209px;
`;
