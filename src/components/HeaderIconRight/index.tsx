import { Link } from "expo-router";
import { Icon, Wrapper } from "./styles";

export default function HeaderIconRight() {
  return (
    <Link asChild href="notifications">
      <Wrapper>
        <Icon source={require('@assets/icons/notification.svg')} />
      </Wrapper>
    </Link>
  );
};
