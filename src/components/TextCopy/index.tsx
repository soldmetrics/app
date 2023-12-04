import * as Clipboard from 'expo-clipboard';

import { IconImage, TextItem, Wrapper } from "./styles";
import { Toast } from 'react-native-toast-notifications';

type TextCopyProps = {
  text: string;
};

export default function TextCopy({ text }: TextCopyProps) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');

    Toast.show("Texto copiado com sucesso!", {
      type: "success",
    });
  };

  return (
    <Wrapper onPress={copyToClipboard}>
      <TextItem>{text}</TextItem>
      <IconImage source={require("@assets/icons/copy.svg")} />
    </Wrapper>
  );
};
