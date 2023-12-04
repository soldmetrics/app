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
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";

export default function ForgotPasswordCodePage() {
  const { setResetPassword, resetPassword } = useAuth();

  const validationSchema = Yup.object().shape({
    code: Yup.string().required("Código é obrigatório"),
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
    register('code');
  }, [register]);

  const onSubmit = async (values: any) => {
    try {
      await api.get(
        `/auth/reset-password/enabled?token=${resetPassword.token}&code=${values.code}`
      );

      Toast.show("Código validado com sucesso", {
        type: "success",
      });

      setResetPassword((old: any) => ({
        ...old,
        code: values.code,
      }));

      router.push("forgotPasswordNew");
    } catch (err: any) {
      console.error(err?.response?.data?.message);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  return (
    <Wrapper>
      <HeaderInfos title="Código de 6 dígitos" subtitle="O código foi enviado para e-mail mencionado na etapa anterior" />
      <Body>
        <FormItem error={errors.code}>
          <Controller
            name="code"
            control={control}
            render={({ field: { value, onChange }}) => (
              <ConfirmationCode
                value={value}
                setValue={(e) => onChange(e)}
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
          Concluir
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
