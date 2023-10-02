import { Dot, Wrapper } from "./styles";

type DotElementProps = {
  active: boolean;
};

export default function DotElement({ active }: DotElementProps) {
  return (
    <Wrapper>
      <Dot />
    </Wrapper>
  );
};
