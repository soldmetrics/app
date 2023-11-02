import { useMemo, useState } from 'react';
import { Dimensions } from 'react-native';
import { Link } from 'expo-router';

import CarouselItem from '@components/CarouselItem';
import ButtonPrimary from '@components/ButtonPrimary';
import ButtonSecundary from '@components/ButtonSecundary';
import { useTheme } from '@context/ThemeProvider';

import { CarouselCustom, Logo, PaginationCustom, Wrapper, WrapperButtons, WrapperContent } from './styles';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;

const data = [
  { title: 'Controle as sua vendas em um só lugar', description: 'Simplifique suas finanças e conquiste a estabilidade financeira que você merece!"', image: require('@assets/images/illustrations1.png') },
  { title: 'Todas as sua vendas em um só lugar', description: 'Simplifique suas finanças e conquiste a estabilidade financeira que você merece!"', image: require('@assets/images/illustrations2.png') },
  { title: 'Todas as sua vendas em um só lugar', description: 'Simplifique suas finanças e conquiste a estabilidade financeira que você merece!"', image: require('@assets/images/illustrations3.png') },
];

export default function OnboardingPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { currentTheme } = useTheme();

  const logoSource = useMemo(() => {
    if (currentTheme === 'dark') {
      return require('@assets/iconDark.svg');
    }

    return require('@assets/iconLight.svg');
  }, [currentTheme]);

  return (
    <Wrapper>
      <Logo source={logoSource} />
      <WrapperContent>
        <CarouselCustom
          layout='default'
          data={data}
          renderItem={CarouselItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={SLIDER_WIDTH}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          sliderHeight={SLIDER_HEIGHT}
          itemHeight={SLIDER_HEIGHT}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <PaginationCustom
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            backgroundColor: '#364FF6',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'rgba(14, 41, 208, 0.25)',
          }}
          dotContainerStyle={{
            gap: 15,
          }}
          inactiveDotStyle={{
            backgroundColor: '#DCDCDC',
            borderWidth: 0,
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </WrapperContent>
      <WrapperButtons>
        <Link href="/register" asChild>
          <ButtonPrimary>
            Cadastrar-se
          </ButtonPrimary>
        </Link>
        <Link href="/login" asChild>
          <ButtonSecundary>
            Entrar
          </ButtonSecundary>
        </Link>
      </WrapperButtons>
    </Wrapper>
  );
};
