import { useState } from 'react';
import { useTheme } from 'styled-components/native';

import { Wrapper, Icon } from './styles';

const IconDown = <Icon source={require("@assets/icons/arrowDown.svg")} />;
const IconUp = <Icon source={require("@assets/icons/arrowLeft.svg")} />;

export default function SelectHeaderMarketplace() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('am');
  const [items, setItems] = useState([
    {label: 'Mercado Livre Full', value: 'mlfull'},
    {label: 'Mercado Livre', value: 'ml'},
    {label: 'Amazon', value: 'am'}
  ]);

  return (
    <Wrapper
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      labelStyle={{
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
      }}
      style={{
        borderWidth: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
      dropDownContainerStyle={{
        borderWidth: 0,
        backgroundColor: 'transparent',
      }}
      textStyle={{
        borderWidth: 0,
        textAlign: 'center',
        width: 'auto',
        fontFamily: theme.fonts.semiBold,
        fontSize: 14,
      }}
      closeIconStyle={{
        display: 'none',
      }}
      tickIconContainerStyle={{
        display: 'none',
      }}
      ArrowDownIconComponent={() => IconDown}
      ArrowUpIconComponent={() => IconDown}
      badgeSeparatorStyle={{
        width: 500,
      }}
      itemSeparatorStyle={{
        height: 5,
        width: '100%',
        backgroundColor: 'pink'
      }}
    />
  );
};
