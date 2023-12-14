import { Image } from "expo-image";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  margin: 0 20px;
  gap: 4px;
`;

export const PrimaryCard = styled.View`
  background-color: ${({ theme }) => theme.colors.background2};
  background-color: rgba(125, 125, 125, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border1};
  border: 1px solid rgba(125, 125, 125, 0.08);
  border-radius: 8px;
  padding: 14px;
  gap: 8px;
  grid-area: a;
`;

export const WrapperCards = styled.View`
  flex-direction: row;
  gap: 4px;
`;

export const SecondCard = styled(PrimaryCard)`
  flex: 1;
`;

export const ThirdCard = styled(PrimaryCard)`
  flex: 1;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const IconCard = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textAuxiliary0};
`;

export const IconInfo = styled(Image).attrs({
  source: require("@assets/icons/iconInfo.svg"),
})`
  width: 24px;
  height: 24px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 34px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Item = styled(Price)`
  font-size: 24px;
`;

export const IconEye = styled(Image).attrs({
  source: require("@assets/icons/iconEye.svg"),
})`
  width: 24px;
  height: 24px;
`;
