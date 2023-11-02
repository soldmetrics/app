
import ArrowBack from "@components/ArrowBack";

import { Wrapper, Infos, Subtitle, Title } from "./styles";

type HeaderInfosProps = {
  title: string;
  subtitle: string;
};

export default function HeaderInfos({ title, subtitle }: HeaderInfosProps) {
  return (
    <Wrapper>
      <ArrowBack />
      <Infos>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Infos>
    </Wrapper>
  );
};

