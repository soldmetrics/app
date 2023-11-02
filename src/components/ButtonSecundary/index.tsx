import { TouchableOpacityProps } from "react-native";

import { Spinner, Text, Wrapper } from "./styles";

type ButtonPrimaryProps = {
  children: string;
  loading?: boolean;
} & TouchableOpacityProps;

export default function ButtonSecundary({ children, loading = false, ...props }: ButtonPrimaryProps) {
  return (
    <Wrapper {...props}>
      {loading && <Spinner />}
      <Text {...props}>
        {children}
      </Text>
    </Wrapper>
  );
};

