import { useMemo, useRef, useState } from "react";
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, TextInputProps } from "react-native";

import { Wrapper, IconLeft, Input } from "./styles";

type InputTextProps = {
  source?: string,
  isError?: boolean,
} & TextInputProps;

export default function InputText({ source, isError = false, ...props }: InputTextProps) {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const onFocusInput = () => {
    inputRef?.current?.focus();
  };

  const onFocusWrapper = () => {
    setIsFocus(true);
  };

  const onBlurWrapper = () => {
    setIsFocus(false);
  };

  return (
    // @ts-ignore
    <Wrapper onTouchStart={onFocusInput} isError={isError} isFocus={isFocus}>
      {source && <IconLeft source={source} />}
      <Input {...props} ref={inputRef} onFocus={onFocusWrapper} onBlur={onBlurWrapper} />
    </Wrapper>
  );
};
