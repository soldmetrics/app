import IconSales from "@components/CustomIcon/Sales";
import IconDashboard from "@components/CustomIcon/Dashboard";
import IconProfile from "@components/CustomIcon/Profile";

import { Button, Label, Wrapper } from "./styles";

export default function CustomTabBar({ state, descriptors, navigation}: any) {
  const Icon = (route: string, props: any) => {
    switch (route) {
      case "dashboard":
      default:
        return <IconDashboard {...props} />;
      case "sales":
        return <IconSales {...props} />;
      case "profile":
        return <IconProfile {...props} />;
    };
  };

  return (
    <Wrapper>
      {state.routes.map((route: any , index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          // @ts-ignore
          <Button key={index} onPress={onPress} isFocused={isFocused}>
            {Icon(route.name, { isFocused })}
            {/* @ts-ignore */}
            <Label isFocused={isFocused}>{options.title}</Label>
          </Button>
        );
      })}
    </Wrapper>
  );
};
