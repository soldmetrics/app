import { ContentItens, DateTime, Header, IdSale, Item, ItemName, ItemQty, ItemTotal, SeparatorHorizontal, SeparatorVertical, Wrapper } from "./styles";

type Item = {
  code: string,
  description: string,
  qty: number,
  valueUnit: string,
  un: string,
};

type SaleItemProps = {
  data: {
    item: {
      numberOrderStore: string,
      dateTime: string,
      typeIntegration: string,
      itens: Item[],
    },
  },
};

export default function SaleItem({ data: { item } }: SaleItemProps) {
  return (
    <Wrapper>
      <Header>
        <IdSale>{item.numberOrderStore}</IdSale>
        <SeparatorVertical>|</SeparatorVertical>
        <DateTime>{item.dateTime}</DateTime>
      </Header>
      <SeparatorHorizontal />
      <ContentItens>
        {item?.itens?.map((item2) => (
          <Item key={`${item.numberOrderStore}-${item2.code}`}>
            <ItemName>{item2.description}</ItemName>
            <ItemQty>{`${item2.qty}${item2.un.toLocaleLowerCase()}`}</ItemQty>
            <ItemTotal>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseInt(item2.valueUnit)*item2.qty)}</ItemTotal>
          </Item>
        ))}
      </ContentItens>
    </Wrapper>
  );
};
