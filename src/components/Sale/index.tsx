import formatNumber from "@utils/formatNumber";
import { ContentItens, DateTime, Header, IconFull, IdSale, Item, ItemImg, ItemName, ItemQty, ItemTotal, SeparatorHorizontal, SeparatorVertical, Wrapper } from "./styles";

type Item = {
  img: string;
  code: string;
  description: string;
  qty: number;
  valueUnit: string;
  un: string;
};

type SaleItemProps = {
  data: {
    item: {
      isFull: boolean;
      numberOrderStore: string;
      dateTime: string;
      typeIntegration: string;
      itens: Item[];
    };
  };
};

export default function SaleItem({ data: { item } }: SaleItemProps) {
  return (
    <Wrapper>
      <Header>
        <IdSale>#{item.numberOrderStore}</IdSale>
        <SeparatorVertical>|</SeparatorVertical>
        <DateTime>{item.dateTime}</DateTime>
        {item.isFull &&
          <>
            <SeparatorVertical>|</SeparatorVertical>
            <IconFull source={require("@assets/icons/iconFull.svg")} />
          </>
        }
      </Header>
      <SeparatorHorizontal />
      <ContentItens>
        {item?.itens?.map((item2) => (
          <Item key={`${item.numberOrderStore}-${item2.code}`}>
            <ItemImg source={item2.img} />
            <ItemName>{item2.description}</ItemName>
            <ItemQty>{`${item2.qty}${item2.un.toLocaleLowerCase()}`}</ItemQty>
            <ItemTotal>{formatNumber(parseInt(item2.valueUnit)*item2.qty)}</ItemTotal>
          </Item>
        ))}
      </ContentItens>
    </Wrapper>
  );
};
