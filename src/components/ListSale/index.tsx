import Sale from "@components/Sale";

import { List } from "./styles";

export default function ListSale({ data }: any) {
  return (
    <List
      keyExtractor={(item) => item.numberOrderStore}
      data={data}
      // @ts-ignore
      renderItem={(item) => <Sale data={item} />}
      // ItemSeparatorComponent={() => <SeparatorHorizontal />}
    />
  )
}
