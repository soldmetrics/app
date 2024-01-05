import styled from "styled-components/native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image } from "expo-image";
import { Link } from "expo-router";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background0};
`;

export const Logo = styled(Image)`
  width: 111.9px;
  height: 56.85px;
  margin-top: 27px;
`;

export const WrapperContent = styled.View`
  flex: 1;
  gap: 12px;
`;

export const CarouselCustom = styled(Carousel)`
  flex: 1;
`;

export const PaginationCustom = styled(Pagination)``;

export const WrapperButtons = styled.View`
  gap: 8px;
  width: 80%;
  margin-bottom: 27px;
`;
