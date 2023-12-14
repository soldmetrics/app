import { Tabs } from "expo-router";

import CustomTabBar from "@components/CustomTabBar";
import HeaderIconLeft from "@components/HeaderIconLeft";
import HeaderIconRight from "@components/HeaderIconRight";
import i18n from "@config/i18n";
// import SelectHeaderMarketplace from "@components/SelectHeaderMarketplace";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: HeaderIconLeft,
        headerRight: HeaderIconRight,
        headerTitle: () => null,
        headerShadowVisible: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: i18n.t("menu.home"),
        }}
      />
      <Tabs.Screen
        name="sales"
        options={{
          title: i18n.t("menu.sales"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: i18n.t("menu.profile"),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
