
import ArrowBack from "@components/ArrowBack";

import { Wrapper, Infos, Subtitle, Title } from "./styles";

type HeaderInfosProps = {
  title: string;
  subtitle?: string;
  arrowBackShow?: boolean;
};

export default function HeaderInfos({ title, subtitle, arrowBackShow = true }: HeaderInfosProps) {
  return (
    <Wrapper>
      {arrowBackShow && <ArrowBack />}
      {/* @ts-ignore */}
      <Infos offsetTop={!arrowBackShow}>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Infos>
    </Wrapper>
  );
};

