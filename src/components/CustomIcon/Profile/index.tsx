import { useMemo } from "react";
import { Circle, G, Path, Svg } from "react-native-svg";
import { useTheme } from "styled-components/native";

type IconProps = {
  isFocused: boolean;
};

export default function IconProfile({ isFocused }: IconProps) {
  const theme = useTheme();

  const stroke1 = useMemo(() => theme.colors[isFocused ? "buttonHover" : "textAuxiliary0"], [isFocused]);
  const stroke2 = useMemo(() => theme.colors[isFocused ? "background0" : "textAuxiliary0"], [isFocused]);
  const fill = useMemo(() => theme.colors[isFocused ? "buttonHover" : "background0"], [isFocused]);

  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <G id="Group">
        <Circle id="Oval" cx="12.891" cy="12.5001" r="9.00375" fill={fill} stroke={stroke1} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path id="Path" d="M16.8927 16.5018C16.7764 16.2091 16.5959 15.9462 16.3645 15.7324V15.7324C15.9747 15.3701 15.4622 15.1685 14.9299 15.1682H10.8532C10.3207 15.1686 9.8079 15.3701 9.41762 15.7324V15.7324C9.18677 15.9466 9.00635 16.2094 8.8894 16.5018" stroke={stroke2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Circle id="Oval_2" cx="12.8911" cy="10.7495" r="2.25094" stroke={stroke2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </G>
    </Svg>
  );
};
