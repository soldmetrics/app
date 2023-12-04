import { Radio, RadioImage, RadioText, Wrapper } from "./styles";

type InputRadioProps = {
  isError: boolean;
  data: {
    label: string;
    key: string;
    image: string;
  }[];
  onChange: (value: string) => void;
  value: string;
};

export default function InputRadio({
  isError = false,
  value,
  onChange,
  data,
}: InputRadioProps) {
  return (
    <Wrapper>
      {data?.map((item) => (
        <Radio
          key={item.key}
          // @ts-ignore
          isSelected={value === item.key}
          onPress={() => onChange(item.key)}
        >
          {/* <RadioText>
            {item.label}
          </RadioText> */}
          <RadioImage source={item.image} contentFit="contain" />
        </Radio>
      ))}
    </Wrapper>
  );
};
