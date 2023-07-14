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
    <Box p={1}>
      <Text>{label}</Text>
      <Input
        type="number"
        id="basicAbilityPower"
        name="basicAbilityPower"
        required
        size={"sm"}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </Box>
  );
}
