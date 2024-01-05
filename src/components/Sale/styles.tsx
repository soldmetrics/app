import { Image } from "expo-image";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 8px 20px;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  padding: 8px 0;
`;

export const IdSale = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  font-size: 12px;
  line-height: 12px;
`;

export const SeparatorVertical = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  font-size: 12px;
  line-height: 12px;
`;

export const DateTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  font-size: 12px;
  line-height: 12px;
`;

export const SeparatorHorizontal = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border1};
`;

export const ContentItens = styled.View`
  width: 100%;
  gap: 8px;
`;

export const Item = styled.View`
  background-color: ${({ theme }) => theme.colors.border1};
  width: 100%;
  padding: 8px;
  gap: 8px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ItemName = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  flex: 1;
`;

export const ItemQty = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  /* width: 10%; */
`;

export const ItemTotal = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  width: 25%;
`;

const placeholder =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const ItemImg = styled(Image).attrs({
  // placeholder,
  contentFit: "contain"
})`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
`;

export const IconFull = styled(Image)`
  width: 38px;
  height: 12px;
`;
