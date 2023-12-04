import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background0};
  flex: 1;
`;

export const List = styled.FlatList``;

export const SeparatorHorizontal = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.border1};
`;
