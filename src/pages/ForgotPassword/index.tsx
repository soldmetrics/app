import { GestureResponderEvent } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";

import HeaderInfos from "@components/HeaderInfos";
import ButtonPrimary from "@components/ButtonPrimary";
import FormItem from "@components/FormItem";
import InputText from "@components/InputText";
import { api } from "@config/api";

import { Body, Footer, Wrapper } from "./styles";

export default function ForgotPasswordPage() {
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
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
      email: "",
    },
    onSubmit: onSubmitForm,
    validationSchema: ForgotPasswordSchema,
  });

  return (
    <Wrapper>
      <HeaderInfos title="Esqueceu a senha?" subtitle="Digite seu e-mail para que possamos recuperá-la para você" />
      <Body>
        <FormItem label="E-mail" error={form.errors.email}>
          <InputText
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            source={require("@assets/icons/email.svg")}
            value={form.values.email}
            onChangeText={form.handleChange("email")}
            isError={!!form.errors.email}
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
          />
        </FormItem>
      </Body>
      <Footer>
        <ButtonPrimary
          onPress={form.handleSubmit as unknown as (e: GestureResponderEvent) => void}
          disabled={!form.isValid}
        >
          Enviar
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
