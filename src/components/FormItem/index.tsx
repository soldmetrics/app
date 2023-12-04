import { FieldError } from "react-hook-form";
import { Error, Label, Wrapper } from "./styles";

type FormItemProps = {
  children: React.ReactNode;
  label?: string;
  error?: FieldError;
};

export default function FormItem({ label, children, error }: FormItemProps) {
  return (
    <Wrapper>
      {!!label && <Label>{label}</Label>}
      {children}
      {!!error?.message && <Error>{error?.message}</Error>}
    </Wrapper>
  );
};
