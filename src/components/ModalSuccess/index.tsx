import { forwardRef, useEffect, useMemo } from "react";
import { BottomSheetProps } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";

import ButtonPrimary from "@components/ButtonPrimary";

import { Content, Img, Info, Subtitle, Title, Wrapper } from "./styles";

type ModalSuccessProps = BottomSheetProps;

export default forwardRef(function ModalSuccess(props: ModalSuccessProps, ref: any) {
  const snapPoints = useMemo(() => ["40%"], []);

  useEffect(() => {
    ref?.current?.close();
  }, []);

  return (
    // @ts-ignore
    <Wrapper {...props} ref={ref} snapPoints={snapPoints}>
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
