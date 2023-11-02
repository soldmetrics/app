import { forwardRef } from "react";
import { BottomSheetProps } from "@gorhom/bottom-sheet";

import ButtonPrimary from "@components/ButtonPrimary";

import { Content, Img, Info, Subtitle, Title, Wrapper } from "./styles";
import { Link } from "expo-router";

type ModalSuccessProps = BottomSheetProps;

export default forwardRef(function ModalSuccess(props: ModalSuccessProps, ref: any) {
  return (
    // @ts-ignore
    <Wrapper {...props} ref={ref} snapPoints={['40%']}>
      <Content>
        <Img source={require("@assets/images/passwordSuccess.png")} />
        <Info>
          <Title>Sua senha foi alterada com sucesso!</Title>
          <Subtitle>Agora você pode acessar sua conta normalmente</Subtitle>
        </Info>
        <Link href="login" asChild>
          <ButtonPrimary>
            Concluído
          </ButtonPrimary>
        </Link>
      </Content>
    </Wrapper>
  );
});
