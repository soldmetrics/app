import { Fragment } from "react";
import { CodeField, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { StyleSheet } from 'react-native';

import { CursorCode, ItemCode, ItemTextCode, TextSeparator } from "./styles";

type ConfirmationCodeProps = {
  value: string;
  setValue: (text: string) => void;
};

const CELL_COUNT = 6;

const styles = StyleSheet.create({
  codeFiledRoot: {
    display: 'flex',
    alignItems: 'center'
  },
});

export default function ConfirmationCode({ value, setValue }: ConfirmationCodeProps) {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFiledRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Fragment key={index}>
          {index === 3 && (
            <TextSeparator>-</TextSeparator>
          )}
          {/* @ts-ignore */}
          <ItemCode onLayout={getCellOnLayoutHandler(index)} isFocused={isFocused}>
            <ItemTextCode>
              {symbol || (isFocused ? <CursorCode /> : null)}
            </ItemTextCode>
          </ItemCode>
        </Fragment>
      )}
    />
  );
};
