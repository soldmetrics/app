import { useRef } from "react";
import { GestureResponderEvent } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import HeaderInfos from "@components/HeaderInfos";
import ButtonPrimary from "@components/ButtonPrimary";
import FormItem from "@components/FormItem";
import InputText from "@components/InputText";
import ModalSuccess from "@components/ModalSuccess";
import { api } from "@config/api";

import { Body, Footer, Wrapper } from "./styles";

export default function ForgotPasswordNewPage() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const ForgotPasswordSchema = Yup.object().shape({
    password: Yup.string().required("Senha é obrigatório"),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref("password"), ""], "As duas senhas devem ser a mesma")
     .required("Confirmar senha é obrigatório"),
  });

  const onSubmitForm = async (values: any) => {
    try {
      const result = await api.post("/reset-password", {
        email: values.email,
      });

      router.push("forgotPasswordCode");

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const form = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: ""
    },
    onSubmit: onSubmitForm,
    validationSchema: ForgotPasswordSchema,
  });

  return (
    <Wrapper>
      <HeaderInfos title="Digite sua nova senha" subtitle="Crie uma senha segura" />
      <Body>
        <FormItem label="Nova Senha" error={form.errors.password}>
          <InputText
            placeholder="Digite sua senha"
            source={require("@assets/icons/lock.svg")}
            value={form.values.password}
            onChangeText={form.handleChange("password")}
            isError={!!form.errors.password}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
        </FormItem>
        <FormItem label="Repetir senha" error={form.errors.passwordConfirmation}>
          <InputText
            placeholder="Repetir senha"
            source={require("@assets/icons/lock.svg")}
            value={form.values.passwordConfirmation}
            onChangeText={form.handleChange("passwordConfirmation")}
            isError={!!form.errors.passwordConfirmation}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
        </FormItem>
      </Body>
      <Footer>
        <ButtonPrimary
          // onPress={form.handleSubmit as unknown as (e: GestureResponderEvent) => void}
          onPress={() => bottomSheetModalRef?.current?.present()}
          disabled={!form.isValid}
        >
          Enviar
        </ButtonPrimary>
      </Footer>
      {/* @ts-ignore */}
      <ModalSuccess ref={bottomSheetModalRef} />
    </Wrapper>
  );
};
