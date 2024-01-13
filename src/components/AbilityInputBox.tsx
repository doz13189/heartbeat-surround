import { Box, Input } from "@chakra-ui/react";
import { SetStateAction } from "react";
import { Text } from "./parts/Text";

type AbilityInputBoxProps = {
  label: string;
  value: number;
  setValue: (value: SetStateAction<number>) => void;
};

export default function AbilityInputBox({
  label,
  value,
  setValue,
}: AbilityInputBoxProps) {
  return (
    <Box pt={1} pb={1} px={4}>
      <Text color={"blackAlpha.700"}>{label}</Text>
      <Input
        type="number"
        id="basicAbilityPower"
        name="basicAbilityPower"
        backgroundColor={"white"}
        color={"blackAlpha.700"}
        rounded={"lg"}
        required
        size={"sm"}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </Box>
  );
}
