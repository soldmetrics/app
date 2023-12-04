import { Title, Wrapper, WrapperRight } from "./styles";

type HeaderPageProps = {
  title: string;
  children?: JSX.Element | JSX.Element[];
};

export default function HeaderPage({ title, children }: HeaderPageProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children && <WrapperRight>{children}</WrapperRight>}
    </Wrapper>
  );
};
