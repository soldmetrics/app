import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Toast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import HeaderInfos from "@components/HeaderInfos";
import FormItem from "@components/FormItem";
import InputText from "@components/InputText";
import ButtonPrimary from "@components/ButtonPrimary";
import InputCheckbox from "@components/InputCheckbox";
import { api } from "@config/api";

import { Body, Footer, Wrapper } from "./styles";

export default function RegisterPage() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref("password"), ""], "As duas senhas devem ser a mesma")
     .required("Confirmar senha é obrigatório"),
    terms: Yup.bool().oneOf([true], "É necessário aceitar os Termos"),
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
    register('name');
    register('email');
    register('password');
    register('passwordConfirmation');
    register('terms');
  }, [register]);

  const onSubmit = async (values: any) => {
    try {
      const firstName = values.name.split(' ').slice(0, -1).join(' ');
      const lastName = values.name.split(' ').slice(-1).join(' ');
      const user = {
        firstName,
        lastName,
        email: values.email,
        password: values.password,
        phone: "11941073078",
      };

      const { data: result } = await api.post("/auth/register", {
        user,
      });

      await AsyncStorage.setItem('accessToken', result?.accessToken);
      // await AsyncStorage.setItem('refreshToken', result?.refreshToken);
      router.push("dashboard");
    } catch (err: any) {
      console.error(err?.response?.data?.message);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  return (
    <Wrapper>
      <HeaderInfos title="Crie sua conta" subtitle="Seja bem vindo ao Sold metrics!" />
      <Body>
        <FormItem label="Nome" error={errors.name}>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <InputText
                placeholder="Digite seu nome"
                source={require("@assets/icons/singleUser.svg")}
                autoFocus
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                isError={!!errors.name}
                editable={!isSubmitting}
              />
            )}
          />
        </FormItem>
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
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isSubmitting}
              />
            )}
          />
        </FormItem>
        <FormItem label="Senha" error={errors.password}>
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
        <FormItem label="Repita a senha" error={errors.passwordConfirmation}>
          <Controller
            name="passwordConfirmation"
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <InputText
                placeholder="Digite sua senha"
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
        <FormItem error={errors.terms}>
          <Controller
            name="terms"
            control={control}
            render={({ field: { value }}) => (
              // @ts-ignore
              <InputCheckbox onValueChange={(value) => setValue("terms", value)} value={value}>
                Testando
              </InputCheckbox>
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
          Cadastrar-se
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
