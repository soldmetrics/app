import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

import { useAuth } from "@context/AuthProvider";
import HeaderArrowBack from "@components/HeaderArrowBack";
import i18n from "@config/i18n";
import data from "./data";

import { Body, Item, ItemArrowIcon, ItemIcon, ItemLeft, ItemName, ItemRight, ItemSeparator, Title, Wrapper, WrapperItem, WrapperItems } from "./styles";

export default function ProfilePage() {
  const { setUser } = useAuth();

  const onLogout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("accessToken");
  };

  return (
    <Wrapper>
      <HeaderArrowBack title={i18n.t("profile.myAccount")} />
      <Body>
        {data(i18n)?.map((item) => (
          <WrapperItem>
            <Title>{item.name}</Title>
            <WrapperItems>
              {item.items?.map((item2) => (
                <Link href={item2.link} asChild>
                  <Item>
                    <ItemLeft>
                      <ItemIcon source={item2.icon} />
                      <ItemName>{item2.name}</ItemName>
                    </ItemLeft>
                    <ItemRight>
                      {/* {item2?.plan && <Featured />} */}
                      <ItemArrowIcon source={require("@assets/icons/arrowRight.svg")} />
                    </ItemRight>
                  </Item>
                </Link>
              ))}
            </WrapperItems>
          </WrapperItem>
        ))}
        <ItemSeparator />
        <Item onPress={onLogout}>
          <ItemLeft>
            <ItemIcon source={require("@assets/icons/iconExit.svg")} />
            <ItemName>{i18n.t("profile.exit")}</ItemName>
          </ItemLeft>
        </Item>
      </Body>
    </Wrapper>
  );
};
