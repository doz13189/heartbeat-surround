import { Flex, Spacer } from "@chakra-ui/react";
import { Text } from "./parts/Text";

type AbilityDisplayBoxProps = {
  label: string;
  value: number | string;
};

export default function AbilityDisplayBox({
  label,
  value,
}: AbilityDisplayBoxProps) {
  return (
    <Flex>
      <Text>{label}</Text>
      <Spacer />
      <Text>{value}</Text>
    </Flex>
  );
}
