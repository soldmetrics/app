import { useLocalSearchParams } from "expo-router";

import HeaderInfos from "@components/HeaderInfos";

import { Wrapper } from "./styles";
import { WebView } from "react-native-webview";

export default function WebViewPage() {
  const { title, uri } = useLocalSearchParams();

  return (
    <Wrapper>
      <HeaderInfos title={`${title}`} />
      <WebView
        source={{ uri: `${uri}` }}
      />
    </Wrapper>
  );
};
