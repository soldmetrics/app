import { GestureResponderEvent } from "react-native";
import { useFormik } from "formik";
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
  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref("password"), ""], "As duas senhas devem ser a mesma")
     .required("Confirmar senha é obrigatório"),
    terms: Yup.bool().oneOf([true], "É necessário aceitar os Termos"),
  });

  const onSubmitForm = async (values: any) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 5000));
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

      console.log(result);
    } catch (err: any) {
      console.log(err?.response?.data?.message);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      terms: false,
    },
    onSubmit: onSubmitForm,
    validationSchema: signupSchema,
  });

  return (
    <Wrapper>
      <HeaderInfos title="Crie sua conta" subtitle="Seja bem vindo ao Sold metrics!" />
      <Body>
        <FormItem label="Nome" error={form.errors.name}>
          <InputText
            placeholder="Digite seu nome"
            source={require("@assets/icons/singleUser.svg")}
            autoFocus
            value={form.values.name}
            onChangeText={form.handleChange("name")}
            isError={!!form.errors.name}
            editable={!form.isSubmitting}
          />
        </FormItem>
        <FormItem label="E-mail" error={form.errors.email}>
          <InputText
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            source={require("@assets/icons/email.svg")}
            value={form.values.email}
            onChangeText={form.handleChange("email")}
            isError={!!form.errors.email}
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
        <FormItem label="Repita a senha" error={form.errors.passwordConfirmation}>
          <InputText
            placeholder="Digite sua senha"
            source={require("@assets/icons/lock.svg")}
            value={form.values.passwordConfirmation}
            onChangeText={form.handleChange("passwordConfirmation")}
            isError={!!form.errors.passwordConfirmation}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            editable={!form.isSubmitting}
          />
        </FormItem>

        <FormItem error={form.errors.terms}>
          <InputCheckbox onValueChange={(value) => form.setFieldValue("terms", value)} value={form.values.terms}>
            Testando
          </InputCheckbox>
        </FormItem>
      </Body>
      <Footer>
        <ButtonPrimary
          onPress={form.handleSubmit as unknown as (e: GestureResponderEvent) => void}
          disabled={!form.isValid || form.isSubmitting}
          loading={form.isSubmitting}
        >
          Cadastrar-se
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
