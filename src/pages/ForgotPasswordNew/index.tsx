import * as Yup from "yup";
import { Toast } from "react-native-toast-notifications";

import HeaderInfos from "@components/HeaderInfos";
import ButtonPrimary from "@components/ButtonPrimary";
import FormItem from "@components/FormItem";
import InputText from "@components/InputText";
import { api } from "@config/api";
import { useAuth } from "@context/AuthProvider";

import { Body, Footer, Wrapper } from "./styles";
import { router } from "expo-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";

export default function ForgotPasswordNewPage() {
  // const bottomSheetRef = useRef<BottomSheet>(null);
  const { resetPassword } = useAuth();

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Senha é obrigatório"),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref("password"), ""], "As duas senhas devem ser a mesma")
     .required("Confirmar senha é obrigatório"),
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    register('password');
    register('passwordConfirmation');
  }, [register]);

  const onSubmit = async (values: any) => {
    try {
      await api.post("/auth/reset-password/handle", {
        token: resetPassword?.token,
        code: resetPassword?.code,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
      });

      Toast.show("Senha alterada com sucesso", {
        type: "success",
      });
      router.push('(auth)/login');
    } catch (err: any) {
      console.error(err);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  return (
    <Wrapper>
      <HeaderInfos title="Digite sua nova senha" subtitle="Crie uma senha segura" />
      <Body>
        <FormItem label="Nova Senha" error={errors.password}>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <InputText
                placeholder="Digite sua senha"
                source={require("@assets/icons/lock.svg")}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                isError={!!errors.password}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                editable={!isSubmitting}
              />
            )}
          />
        </FormItem>
        <FormItem label="Repetir senha" error={errors.passwordConfirmation}>
          <Controller
            name="passwordConfirmation"
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (

              <InputText
                placeholder="Repetir senha"
                source={require("@assets/icons/lock.svg")}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                isError={!!errors.passwordConfirmation}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
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
          Salvar
        </ButtonPrimary>
      </Footer>
      {/* <ModalSuccess
        ref={bottomSheetRef}
        snapPoints={["40%"]}
      >
      </ModalSuccess> */}
    </Wrapper>
  );
};
