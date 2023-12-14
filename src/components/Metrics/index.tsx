import formatNumber from "@utils/formatNumber";
import i18n from "@config/i18n";

import { CardBody, CardHeader, CardInfo, CardTitle, IconCard, IconEye, IconInfo, Item, Price, PrimaryCard, SecondCard, ThirdCard, Wrapper, WrapperCards } from "./styles";

export default function ListSale({ data }: any) {
  return (
    <Wrapper>
      <PrimaryCard>
        <CardHeader>
          <CardInfo>
            <IconCard source={require("@assets/icons/iconMoneyCoins.svg")} />
            <CardTitle>{i18n.t("dashboard.invoicing")}</CardTitle>
          </CardInfo>
          <IconInfo />
        </CardHeader>
        <CardBody>
          <Price>{formatNumber(154098.92)}</Price>
          <IconEye />
        </CardBody>
      </PrimaryCard>
      <WrapperCards>
        <SecondCard>
          <CardHeader>
            <CardInfo>
              <IconCard source={require("@assets/icons/iconShopping.svg")} />
              <CardTitle>{i18n.t("dashboard.grossSales")}</CardTitle>
            </CardInfo>
          </CardHeader>
          <CardBody>
            <Item>1.972</Item>
          </CardBody>
        </SecondCard>
        <ThirdCard>
          <CardHeader>
            <CardInfo>
              <IconCard source={require("@assets/icons/iconMoney.svg")} />
              <CardTitle>{i18n.t("dashboard.averagePrice")}</CardTitle>
            </CardInfo>
          </CardHeader>
          <CardBody>
            <Item>{formatNumber(24.99)}</Item>
          </CardBody>
        </ThirdCard>
      </WrapperCards>
    </Wrapper>
  );
};
