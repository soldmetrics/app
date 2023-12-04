import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuth } from "@context/AuthProvider";

import { ButtonLogout, ButtonLogoutTitle, Title, Wrapper } from "./styles";

export default function ProfilePage() {
  const { setUser } = useAuth();

  const onLogout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("accessToken");
  };

  return (
    <Wrapper>
      <Title>Profile page</Title>
      <ButtonLogout onPress={onLogout}>
        <ButtonLogoutTitle>
          Logout
        </ButtonLogoutTitle>
      </ButtonLogout>
    </Wrapper>
  );
};
