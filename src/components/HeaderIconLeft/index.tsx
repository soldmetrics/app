import { Link } from "expo-router";
import { Icon, Wrapper } from "./styles";

export default function HeaderIconLeft() {
  return (
    <Link asChild href="profile">
      <Wrapper>
        <Icon source={require('@assets/icons/profile1.svg')} />
      </Wrapper>
    </Link>
  );
};
