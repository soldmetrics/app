import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  padding: 13px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.buttonDisabled};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 22px;
`;
