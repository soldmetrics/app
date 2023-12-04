import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { router } from "expo-router";
import { Toast } from "react-native-toast-notifications";

import HeaderInfos from "@components/HeaderInfos";
import ButtonPrimary from "@components/ButtonPrimary";
import FormItem from "@components/FormItem";
import InputText from "@components/InputText";
import { api } from "@config/api";
import { useAuth } from "@context/AuthProvider";

import { Body, Footer, Wrapper } from "./styles";

export default function ForgotPasswordPage() {
  const { setResetPassword } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    register('email');
  }, [register]);

  const onSubmit = async (values: any) => {
    try {
      const { data: result } = await api.post(`/auth/reset-password?email=${values.email}`);

      setResetPassword((old: any) => ({
        ...old,
        token: result?.token,
        email: values.email,
      }));

      Toast.show(`Código enviado para o e-mail ${values.email}`, {
        type: "success",
      });

      router.push("forgotPasswordCode");
    } catch (err: any) {
      console.error(err?.response?.data?.message);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  return (
    <Wrapper>
      <HeaderInfos title="Esqueceu a senha?" subtitle="Digite seu e-mail para que possamos recuperá-la para você" />
      <Body>
        <FormItem label="E-mail" error={errors.email}>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <InputText
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                source={require("@assets/icons/email.svg")}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                isError={!!errors.email}
                autoFocus
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isSubmitting}
              />
            )}
          />
        </FormItem>
      </Body>
      <Footer>
        <ButtonPrimary
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        >
          Enviar
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
