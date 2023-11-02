import { GestureResponderEvent } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";
import { Toast } from "react-native-toast-notifications";

import HeaderInfos from "@components/HeaderInfos";
import ButtonPrimary from "@components/ButtonPrimary";
import FormItem from "@components/FormItem";
import ConfirmationCode from "@components/ConfirmationCode";
import { api } from "@config/api";
import { useAuth } from "@context/AuthProvider";

import { Body, Footer, Wrapper } from "./styles";

export default function ForgotPasswordCodePage() {
  const { setResetPassword } = useAuth();

  const ForgotPasswordSchema = Yup.object().shape({
    code: Yup.string().required("Código é obrigatório"),
  });

  const onSubmitForm = async (values: any) => {
    try {
      const result = await api.post("/auth/reset-password/code", {
        code: values.code,
      });

      Toast.show("Código validado com sucesso", {
        type: "success",
      });

      setResetPassword((old: any) => ({
        ...old,
        code: values.code,
      }));

      router.push("forgotPasswordNew");
    } catch (err: any) {
      console.log(err?.response?.data?.message);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  const form = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: onSubmitForm,
    validationSchema: ForgotPasswordSchema,
  });

  return (
    <Wrapper>
      <HeaderInfos title="Código de 6 dígitos" subtitle="O código foi enviado para e-mail mencionado na etapa anterior" />
      <Body>
        <FormItem error={form.errors.code}>
          <ConfirmationCode value={form.values.code} setValue={(e) => form.setFieldValue("code", e)} />
        </FormItem>
      </Body>
      <Footer>
        <ButtonPrimary
          onPress={form.handleSubmit as unknown as (e: GestureResponderEvent) => void}
          disabled={!form.isValid || form.isSubmitting}
          loading={form.isSubmitting}
        >
          Concluir
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
