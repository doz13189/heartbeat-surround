import { Flex, Spacer } from "@chakra-ui/react";
import { Text } from "./parts/Text";

type AbilityDisplayBoxProps = {
  label: string;
  value: number | string;
};

export default function DamageDisplayBox({
  label,
  value,
}: AbilityDisplayBoxProps) {
  return (
    <Flex>
      <Text as="b">{label}</Text>
      <Spacer />
      <Text color={"#F84D4D"}>{value}</Text>
    </Flex>
  );
}
