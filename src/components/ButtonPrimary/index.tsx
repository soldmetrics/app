import { Text, Wrapper } from "./styles";

type ButtonPrimaryProps = {
  children: string;
};

export default function ButtonPrimary({ children }: ButtonPrimaryProps) {
  return (
    <Wrapper>
      <Text>
        {children}
      </Text>
    </Wrapper>
  );
};
