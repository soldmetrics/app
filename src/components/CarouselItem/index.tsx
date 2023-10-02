import { Description, ImageCarousel, Title, Wrapper, WrapperInfo } from "./styles";

type CarouselItemProps = {
  item: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
};

export default function CarouselItem({ item: { title, description, image } }: CarouselItemProps) {
  return (
    <Wrapper>
      <ImageCarousel source={image} />

      <WrapperInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </WrapperInfo>
    </Wrapper>
  );
};
