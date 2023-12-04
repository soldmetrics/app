import { CheckboxProps } from "expo-checkbox";

import { Wrapper, Input, Label } from "./styles";

type InputCheckboxProps = {
  children: React.ReactNode;
  isError?: boolean;
} & CheckboxProps;

export default function InputCheckbox({ children, isError = false, ...props }: InputCheckboxProps) {
  return (
    // @ts-ignore
    <Wrapper isError={isError}>
      <Input {...props} />
      <Label>Ao continuar, estou de acordo com os termos de uso e com o aviso de privacidade da sold metrics</Label>
    </Wrapper>
  );
};
