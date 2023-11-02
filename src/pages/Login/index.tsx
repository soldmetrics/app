import { GestureResponderEvent } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, router } from "expo-router";
import { Toast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderInfos from "@components/HeaderInfos";
import ButtonPrimary from "@components/ButtonPrimary";
import FormItem from "@components/FormItem";
import InputText from "@components/InputText";
import { api } from "@config/api";
import { useAuth } from "@context/AuthProvider";

import { Body, Footer, TextLink, Wrapper } from "./styles";

export default function LoginPage() {
  const { setUser } = useAuth();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
  });

  const onSubmitForm = async (values: any) => {
    try {
      const { data: result } = await api.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      await AsyncStorage.setItem('accessToken', result?.accessToken);
      // await AsyncStorage.setItem('refreshToken', result?.refreshToken);
      router.push("dashboard");

      console.log(result);

      setUser(result.user);
    } catch (err: any) {
      console.log(err);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: onSubmitForm,
    validationSchema: loginSchema,
  });

  return (
    <Wrapper>
      <HeaderInfos title="Bem vindo de volta!" subtitle="Digite seu e-mail e senha para fazer login" />
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
            editable={!form.isSubmitting}
          />
        </FormItem>
        <FormItem label="Senha" error={form.errors.password}>
          <InputText
            placeholder="Digite sua senha"
            source={require("@assets/icons/lock.svg")}
            value={form.values.password}
            onChangeText={form.handleChange("password")}
            isError={!!form.errors.password}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            editable={!form.isSubmitting}
          />
        </FormItem>
        <Link href="forgotPassword" asChild>
          <TextLink>Esqueci a senha</TextLink>
        </Link>
      </Body>
      <Footer>
        <ButtonPrimary
          onPress={form.handleSubmit as unknown as (e: GestureResponderEvent) => void}
          disabled={!form.isValid || form.isSubmitting}
          loading={form.isSubmitting}
        >
          Entrar
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
