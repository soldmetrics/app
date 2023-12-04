import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, router } from "expo-router";
import { Toast } from "react-native-toast-notifications";
import { api } from "@config/api";

import HeaderInfos from "@components/HeaderInfos";
import FormItem from "@components/FormItem";
import InputText from "@components/InputText";
import ButtonPrimary from "@components/ButtonPrimary";
import InputRadio from "@components/InputRadio";
import TextCopy from "@components/TextCopy";

import { Wrapper, Body, Footer, TextLink } from "./styles";
import { useAuth } from "@context/AuthProvider";

const URL_HELP_TOKEN = {
  TINY: "https://ajuda.tiny.com.br/hc/pt-br/articles/4416655291668-Token-para-a-API",
  BLING: "https://developer.bling.com.br/aplicativos",
};

export default function RegisterIntegrationPage() {
  const { setUser } = useAuth();
  const [erp, setErp] = useState<"TINY" | "BLING">("BLING");

  const validationSchema = Yup.object().shape({
    erp: Yup.string().required("ERP é obrigatório"),
    token: Yup.string().required("Token é obrigatório"),
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
    register('erp');
    register('token');
  }, [register]);

  const onSubmit = async (values: any) => {
    try {
      const data = {
        integration: values.erp,
        token: values.token,
      };

      await api.post("/auth/set-integration", data);

      setUser((prev: any) => ({
        ...prev,
        company: {
          ...prev.company,
          integration: values.erp,
          integrationKey: values.token,
        }
      }));

      Toast.show("Integração feita com sucesso!", {
        type: "success",
      });

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
      <HeaderInfos
        title="Integração com ERP"
        subtitle="Informe em qual ERP gostaria de fazer a integração com o aplicativo!"
        arrowBackShow={false}
      />
      <Body>
        <FormItem label="Qual ERP?" error={errors.erp}>
          <Controller
            name="erp"
            control={control}
            render={({ field: { value }}) => (
              <InputRadio
                onChange={(value1) => {
                  setErp(value1 as "BLING" | "TINY");
                  setValue("erp", value1);
                }}
                value={value}
                isError={!!errors.erp}
                data={[
                  {
                    label: "BLING",
                    key: "BLING",
                    image: require("@assets/logo/bling.svg"),
                  },
                  {
                    label: "TINY",
                    key: "TINY",
                    image: require("@assets/logo/tiny.svg"),
                  },
                ]}
              />
            )}
          />
        </FormItem>
        <FormItem label="Token" error={errors.token}>
          <Controller
            name="token"
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <>
                <InputText
                  placeholder="Digite o token"
                  // source={require("@assets/icons/email.svg")}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  isError={!!errors.token}
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isSubmitting}
                />
                <Link
                  asChild
                  href={{
                    pathname: "/webView",
                    params: {
                      title: "Como obter o token?",
                      uri: URL_HELP_TOKEN[erp],
                    },
                  }}
                >
                  <TextLink>Como obter o token?</TextLink>
                </Link>
              </>
            )}
          />
        </FormItem>
        {erp === "TINY" && (
          <FormItem label="URL de callback">
            <>
              <TextCopy text={`${process.env.EXPO_PUBLIC_API_URL}callback/tiny`} />
              <Link
                asChild
                href={{
                  pathname: "/webView",
                  params: {
                    title: "Como obter o token?",
                    uri: "https://expo.dev",
                  },
                }}
              >
                <TextLink>Aonde colar essa URL de callback?</TextLink>
              </Link>
            </>
          </FormItem>
        )}
      </Body>
      <Footer>
        <ButtonPrimary
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        >
          Integrar
        </ButtonPrimary>
      </Footer>
    </Wrapper>
  );
};
