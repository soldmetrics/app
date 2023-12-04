import { forwardRef } from "react";
import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";

import ButtonPrimary from "@components/ButtonPrimary";

import { Content, Img, Info, Subtitle, Title, Wrapper } from "./styles";

const ModalSuccess = forwardRef<BottomSheet, BottomSheetProps>(
  (props, ref) => {

  return (
    // @ts-ignore
    <Wrapper {...props} ref={ref}>
      <Content>
        <Img source={require("@assets/images/passwordSuccess.png")} />
        <Info>
          <Title>Sua senha foi alterada com sucesso!</Title>
          <Subtitle>Agora você pode acessar sua conta normalmente</Subtitle>
        </Info>
        <Link href="/login" asChild>
          <ButtonPrimary>
            Concluído
          </ButtonPrimary>
        </Link>
      </Content>
    </Wrapper>
  );
});

export default ModalSuccess;
