import { Image } from "expo-image";
import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background0};
  flex: 1;
`;

export const Body = styled.ScrollView`
  padding: 0 20px;
  flex: 1;
`;

export const Title = styled.Text`
  color: #989AA0;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 12px;
  letter-spacing: 0.24px;
  padding: 10px 0;
`;

export const WrapperItem = styled.View`
  padding-bottom: 15px;
`;

export const WrapperItems = styled.View``;

export const Item = styled.TouchableOpacity`
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemLeft = styled.View`
  gap: 21px;
  align-items: center;
  flex-direction: row;
`;

export const ItemRight = styled.View`
  gap: 18px;
  align-items: center;
  flex-direction: row;
`;

export const ItemIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const ItemName = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 16px;
`;
export const ItemArrowIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const ItemSeparator = styled.View`
  padding: 0 20px;
  margin: 8px 0;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.border1};
`;
