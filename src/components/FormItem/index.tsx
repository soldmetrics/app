import { Error, Label, Wrapper } from "./styles";

type FormItemProps = {
  children: React.ReactNode,
  label?: string,
  error?: string,
};

export default function FormItem({ label, children, error }: FormItemProps) {
  return (
    <Wrapper>
      {!!label && <Label>{label}</Label>}
      {children}
      {!!error && <Error>{error}</Error>}
    </Wrapper>
  );
};
