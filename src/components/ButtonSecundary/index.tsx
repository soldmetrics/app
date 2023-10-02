import { Text, Wrapper } from "./styles";

type ButtonSecundaryProps = {
  children: string;
};

export default function ButtonSecundary({ children }: ButtonSecundaryProps) {
  return (
    <Wrapper>
      <Text>
        {children}
      </Text>
    </Wrapper>
  );
};
