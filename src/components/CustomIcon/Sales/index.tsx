import { useMemo } from "react";
import { G, Path, Svg } from "react-native-svg";
import { useTheme } from "styled-components/native";

type IconProps = {
  isFocused: boolean;
};

export default function IconSales({ isFocused }: IconProps) {
  const theme = useTheme();

  const stroke1 = useMemo(() => theme.colors[isFocused ? "buttonHover" : "textAuxiliary0"], [isFocused]);
  const stroke2 = useMemo(() => theme.colors[isFocused ? "buttonHover" : "textAuxiliary0"], [isFocused]);
  const stroke3 = useMemo(() => theme.colors[isFocused ? "background0" : "textAuxiliary0"], [isFocused]);
  const fill = useMemo(() => theme.colors[isFocused ? "buttonHover" : "background0"], [isFocused]);

  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <G id="Group">
        <Path id="Path" d="M4.5 7V5C4.5 4.44772 4.94772 4 5.5 4H19.5C20.0523 4 20.5 4.44772 20.5 5V7" stroke={stroke1} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path id="Path_2" fill-rule="evenodd" clip-rule="evenodd" d="M20.5 7H4.5C3.94772 7 3.5 7.44772 3.5 8V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V8C21.5 7.44772 21.0523 7 20.5 7Z" fill={fill} stroke={stroke2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path id="Path_3" d="M16.5 11C16.5 13.2091 14.7091 15 12.5 15C10.2909 15 8.5 13.2091 8.5 11" stroke={stroke3} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </G>
    </Svg>
  );
};
