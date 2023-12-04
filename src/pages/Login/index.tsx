import { useEffect } from "react";
import * as Yup from "yup";
import { Link, router } from "expo-router";
import { Toast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import HeaderInfos from "@components/HeaderInfos";
import ButtonPrimary from "@components/ButtonPrimary";
import FormItem from "@components/FormItem";
import InputText from "@components/InputText";
import { api } from "@config/api";
import { useAuth } from "@context/AuthProvider";

import { Body, Footer, TextLink, Wrapper } from "./styles";

export default function LoginPage() {
  const { setUser } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
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
    register('password');
  }, [register]);

  const onSubmit = async (values: any) => {
    try {
      const { data: result } = await api.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      await AsyncStorage.setItem('accessToken', result?.accessToken);
      // await AsyncStorage.setItem('refreshToken', result?.refreshToken);
      setUser(result.user);
      router.push("dashboard");
    } catch (err: any) {
      console.error(err);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  return (
    <Wrapper>
      <HeaderInfos title="Bem vindo de volta!" subtitle="Digite seu e-mail e senha para fazer login" />
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
        <FormItem label="Senha" error={errors.password}>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <InputText
                placeholder="Digite sua senha"
                source={require("@assets/icons/lock.svg")}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                isError={!!errors.password}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                editable={!isSubmitting}
              />
            )}
          />
        </FormItem>
        <Link href="/forgotPassword" asChild>
          <TextLink>Esqueci a senha</TextLink>
        </Link>
      </Body>
      <Footer>
        <ButtonPrimary
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        >
          Entrar
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
