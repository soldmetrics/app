import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  padding: 13px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.buttonDisabled};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color:${({ theme }) => theme.colors.buttonDisabled};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 22px;
`;

export const Spinner = styled.ActivityIndicator``;
