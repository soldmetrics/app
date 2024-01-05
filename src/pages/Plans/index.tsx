import { useState } from "react";
import { Toast } from "react-native-toast-notifications";
import * as WebBrowser from 'expo-web-browser';

import HeaderInfos from "@components/HeaderInfos";
import ButtonPrimary from "@components/ButtonPrimary";
import { api } from "@config/api";

import {
  Wrapper,
  Body,
  SegmentedControl,
  PlansWrapper,
  PlanCard,
  PlanTitle,
  PlanPrice,
  PlanFeatures,
  PlanFeature,
  PlanFeatureText,
  PlanHeader,
  PlanFooter,
  PlanBadge,
  PlanBadgeText,
} from "./styles";
import { createURL } from "expo-linking";
import { Linking } from "react-native";

const itemsPlanBasic = [
  "Integração",
  "Dashboard",
  "Vendas",
];

const itemsPlanClassic = [
  ...itemsPlanBasic,
  "Notificação de vendas",
  "Múltiplas Contas (2 contas)",
];

const itemsPlanPremium = [
  ...itemsPlanClassic,
  "Múltiplas Contas (Ilimitado)",
  "Mensageria de perguntas",
  "Pontos por indicação",
];

const data = [
  {
    type: "Mensal",
    plans: [
      {
        title: "Plano Basic",
        price: "R$7,00",
        items: itemsPlanBasic,
        id: "price_1OP41gGWx7YBclEQccu2ytBd",
      },
      {
        title: "Plano Classic",
        price: "R$25,00",
        items: itemsPlanClassic,
        id: "price_1OP472GWx7YBclEQ8hqlsROg",
      },
      {
        title: "Plano Premium",
        price: "R$49,90",
        items: itemsPlanPremium,
        id: "price_1OP4AeGWx7YBclEQ7NXVy4zY",
      },
    ],
  },
  {
    type: "Trimestral",
    plans: [
      {
        title: "Plano Basic",
        price: "R$18,48",
        items: itemsPlanBasic,
        id: "price_1OP4GJGWx7YBclEQb3k50O6V",
      },
      {
        title: "Plano Classic",
        price: "R$66,00",
        items: itemsPlanClassic,
        id: "price_1OP4IyGWx7YBclEQBfmA8COt",
      },
      {
        title: "Plano Premium",
        price: "R$131,74",
        items: itemsPlanPremium,
        id: "price_1OP4SsGWx7YBclEQG21fozwc",
      },
    ],
  },
  {
    type: "Anual",
    plans: [
      {
        title: "Plano Basic",
        price: "R$65,52",
        items: itemsPlanBasic,
        id: "price_1OP4GtGWx7YBclEQvC7L8a0z",
      },
      {
        title: "Plano Classic",
        price: "R$234,00",
        items: itemsPlanClassic,
        id: "price_1OP4JzGWx7YBclEQuSDGxosc",
      },
      {
        title: "Plano Premium",
        price: "R$474,06",
        items: itemsPlanPremium,
        id: "price_1OP4SsGWx7YBclEQFDqxauWM",
      },
    ],
  },
];

export default function PlansPage() {
  const [selectedSegmented, setSelectedSegmented] = useState(1);

  const onSegmentedChange = (e: any) => {
    setSelectedSegmented(e.nativeEvent.selectedSegmentIndex);
  };

  const onSelectedPrice = async (priceId: string) => {
    try {
      const urlSuccess = createURL("dashboard");
      const urlCancel = createURL("plans");
      const { data } = await api.post("/billing", {
        urlSuccess,
        urlCancel,
        priceId,
      });

      if (data?.url) {
        await Linking.openURL(data?.url);
      }
    } catch (err: any) {
      console.error(err);
      Toast.show(err?.response?.data?.message || "Erro interno do servidor", {
        type: "danger",
      });
    }
  };

  return (
    <Wrapper>
      <HeaderInfos
        title="Selecione um plano"
        subtitle="Para prosseguir para o Sold Metrics, você deverá assinar um plano!"
        arrowBackShow={false}
      />
      <Body>
        <SegmentedControl
          values={["Mensal", "Trimestral", "Anual"]}
          selectedIndex={selectedSegmented}
          onChange={onSegmentedChange}
          backgroundColor="#000000"
          fontStyle={{
            color: "#1fc2"
          }}
          activeFontStyle={{
            color: 'blue',
          }}
        />
        <PlansWrapper
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {data[selectedSegmented]?.plans?.map((plan) => {
            return (
              <PlanCard key={plan.id}>
                <PlanHeader>
                  {plan?.title === "Plano Basic" && (
                    <PlanBadge>
                      <PlanBadgeText>
                        Mais Popular
                      </PlanBadgeText>
                    </PlanBadge>
                  )}
                  <PlanPrice>{plan.price}</PlanPrice>
                  <PlanTitle>{plan.title}</PlanTitle>
                </PlanHeader>
                <PlanFooter>
                  <PlanFeatures>
                    {plan.items?.map((item) => {
                      return (
                        <PlanFeature>
                          <PlanFeatureText>
                            -
                          </PlanFeatureText>
                          <PlanFeatureText>
                            {item}
                          </PlanFeatureText>
                        </PlanFeature>
                      )
                    })}
                  </PlanFeatures>
                  <ButtonPrimary
                    onPress={() => onSelectedPrice(plan.id)}
                  >Garantir teste</ButtonPrimary>
                </PlanFooter>
              </PlanCard>
            );
          })}
        </PlansWrapper>
      </Body>
    </Wrapper>
  );
};
