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
  gap: 9px;
  padding: 8px 0;
`;

export const IdSale = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  font-size: 12px;
  line-height: normal;
`;

export const SeparatorVertical = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  font-size: 12px;
  line-height: normal;
`;

export const DateTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  font-size: 12px;
  line-height: normal;
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
  line-height: normal;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  flex: 1;
`;

export const ItemQty = styled.Text`
  font-size: 12px;
  line-height: normal;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  width: 10%;
`;

export const ItemTotal = styled.Text`
  font-size: 12px;
  line-height: normal;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textAuxiliary0};
  width: 25%;
`;
