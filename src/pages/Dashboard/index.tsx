import { Link } from "expo-router";

import HeaderPage from "@components/HeaderPage";
import ListSale from "@components/ListSale";
import Metrics from "@components/Metrics";

import { TextLink, Wrapper } from "./styles";
import i18n from "@config/i18n";

const img = "https://m.media-amazon.com/images/I/61XZlLdPRbL.__AC_SX300_SY300_QL70_ML2_.jpg";

const data = [
  {
    isFull: true,
    numberOrderStore: "2000004985887083",
    dateTime: "30 out. 19:45 hs",
    itens: [
      {
        img,
        code: "AZUL001",
        description: "Câmera A8 Prova Dágua Full Hd Infravermelho Zoom....",
        qty: 1,
        valueUnit: "123,99",
        un: "UN"
      },
    ],
  },
  {
    numberOrderStore: "2000004985887083",
    dateTime: "29 out. 19:45 hs",
    typeIntegration: "MercadoLivre",
    itens: [
      {
        img,
        code: "AZUL001",
        description: "Câmera A8 Prova Dágua Full Hd Infravermelho Zoom....",
        qty: 1,
        valueUnit: "123,99",
        un: "UN"
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRetGXTfO2fKXrHr138VeDltKzm36abFQS4Mhkih42r0K0Hp9ZVCdtFi74emlcFN01rR3ptC2dONXSQ5RDSRrs4WPuuHZUWKhT19hJorn2h2ULjQ35vSE0PZh8YxdCtQIXmc2DwrQ&usqp=CAc",
        code: "BARBIE001",
        description: "Samsung Galaxy S21 Fe 5g 256 Gb 8gb Ram Preto..",
        qty: 2,
        valueUnit: "353,99",
        un: "UN"
      },
    ],
  },
];

export default function DashboardPage() {
  return (
    <Wrapper>
      <HeaderPage title={i18n.t("dashboard.metrics")}>
        <TextLink>{i18n.t("dashboard.filter")}</TextLink>
      </HeaderPage>
      <Metrics />
      <HeaderPage title={i18n.t("dashboard.mySales")}>
        <Link href="/sales">
          <TextLink>{i18n.t("dashboard.linkViewAll")}</TextLink>
        </Link>
      </HeaderPage>
      <ListSale data={data} />
    </Wrapper>
  );
};
