import { TouchableOpacityProps } from "react-native";

import { ArrowLeft, Wrapper } from "./styles";
import { router } from "expo-router";

type ArrowBackProps = TouchableOpacityProps;

export default function ArrowBack({ ...props }: ArrowBackProps) {
  const onBackUrl = () => {
    router.back();
  };

  return (
    <Wrapper {...props} onPress={onBackUrl}>
      <ArrowLeft source={require("@assets/icons/arrowLeft.svg")} />
    </Wrapper>
  );
};
