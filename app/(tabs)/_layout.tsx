import { Tabs } from "expo-router";

import CustomTabBar from "@components/CustomTabBar";
import SelectHeaderMarketplace from "@components/SelectHeaderMarketplace";
import HeaderIconLeft from "@components/HeaderIconLeft";
import HeaderIconRight from "@components/HeaderIconRight";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: HeaderIconLeft,
        headerRight: HeaderIconRight,
        headerTitle: SelectHeaderMarketplace,
        headerShadowVisible: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="sales"
        options={{
          title: "Vendas"
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerTitle: () => null,
        }}
      />
    </Tabs>
  );
};
