import { useMemo } from "react";
import { G, Path, Svg } from "react-native-svg";
import { useTheme } from "styled-components/native";

type IconProps = {
  isFocused: boolean;
};

export default function IconDashboard({ isFocused }: IconProps) {
  const theme = useTheme();

  const stroke1 = useMemo(() => theme.colors[isFocused ? "buttonHover" : "textAuxiliary0"], [isFocused]);
  const stroke2 = useMemo(() => theme.colors[isFocused ? "textAuxiliary1" : "textAuxiliary0"], [isFocused]);
  const fill = useMemo(() => theme.colors[isFocused ? "buttonHover" : "background0"], [isFocused]);

  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <G id="Group">
        <G id="Group_2">
          <Path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M20.342 8.29901L14.342 3.63201C13.259 2.78901 11.742 2.78901 10.658 3.63201L4.658 8.29901C3.927 8.86701 3.5 9.74101 3.5 10.667V18C3.5 19.657 4.843 21 6.5 21H18.5C20.157 21 21.5 19.657 21.5 18V10.667C21.5 9.74101 21.073 8.86701 20.342 8.29901Z" fill={fill} stroke={stroke1} stroke-width="1.5"/>
          <Path id="Path_2" d="M16.5 14.238C14.29 16.448 10.708 16.448 8.5 14.238" stroke={stroke2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </G>
      </G>
    </Svg>
  );
};
