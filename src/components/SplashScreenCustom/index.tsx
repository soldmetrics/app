import { ImageCustom, Wrapper } from './styles';

type SplashScreenCustomProps = {
  image: any;
};

export default function SplashScreenCustom({ image }: SplashScreenCustomProps) {
  return (
    <Wrapper>
      <ImageCustom source={image} />
    </Wrapper>
  );
};
