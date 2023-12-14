
import ArrowBack from "@components/ArrowBack";

import { Wrapper, Infos, Subtitle, Title, WrapperArrowBack } from "./styles";

type HeaderInfosProps = {
  title: string;
};

export default function HeaderArrowBack({ title }: HeaderInfosProps) {
  return (
    <Wrapper>
      <WrapperArrowBack>
        <ArrowBack />
      </WrapperArrowBack>
      {title && <Title>{title}</Title>}
    </Wrapper>
  );
};

