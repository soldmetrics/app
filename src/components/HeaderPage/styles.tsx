import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  line-height: normal;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const WrapperRight = styled.View``;
