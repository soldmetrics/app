import HeaderPage from "@components/HeaderPage";
import ListSale from "@components/ListSale";
import i18n from "@config/i18n";

import { Wrapper } from "./styles";

const img = "https://cdn.sistemawbuy.com.br/arquivos/d92a9c4432d1813f5c488c439eb70a05/produtos/VUA1DOU6/d4299d127c0722ce3648bb8945b8d448-6121160bbcfd1.jpg";

const data = [
  {
    numberOrderStore: "2000006774218596",
    dateTime: "29 out. 19:45 hs",
    typeIntegration: "MercadoLivre",
    itens: [
      {
        img,
        code: "AZUL001",
        description: "Mini Porta Joias Organizador Maquiagem  Viagem Portátil Cor:Azul-tiffany",
        qty: 2,
        valueUnit: "20.9900000000",
        un: "UN"
      },
    ],
  },
  {
    numberOrderStore: "2000006774218596",
    dateTime: "29 out. 19:45 hs",
    typeIntegration: "MercadoLivre",
    itens: [
      {
        img,
        code: "AZUL001",
        description: "Mini Porta Joias Organizador Maquiagem  Viagem Portátil Cor:Azul-tiffany",
        qty: 2,
        valueUnit: "20.9900000000",
        un: "UN"
      },
      {
        img,
        code: "BARBIE001",
        description: "Mini Porta Joias Organizador Maquiagem  Viagem Portátil Cor:Rosa Barbie",
        qty: 5,
        valueUnit: "20.9900000000",
        un: "UN"
      },
    ],
  },
];

export default function SalesPage() {
  return (
    <Wrapper>
      <HeaderPage title={i18n.t("dashboard.mySales")} />
      <ListSale data={data} />
    </Wrapper>
  );
};
