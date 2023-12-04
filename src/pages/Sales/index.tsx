import HeaderPage from "@components/HeaderPage";
import Sale from "@components/Sale";

import { List, SeparatorHorizontal, Wrapper } from "./styles";

const data = [
  {
    numberOrderStore: "2000006774218596",
    dateTime: "29 out. 19:45 hs",
    typeIntegration: "MercadoLivre",
    itens: [
      {
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
        code: "AZUL001",
        description: "Mini Porta Joias Organizador Maquiagem  Viagem Portátil Cor:Azul-tiffany",
        qty: 2,
        valueUnit: "20.9900000000",
        un: "UN"
      },
      {
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
      <HeaderPage title="Minhas vendas" />
      <List
        keyExtractor={(item) => item.numberOrderStore}
        data={data}
        // @ts-ignore
        renderItem={(item) => <Sale data={item} />}
        // ItemSeparatorComponent={() => <SeparatorHorizontal />}
      />
    </Wrapper>
  );
};
