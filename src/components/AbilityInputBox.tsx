import { Box, Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { SetStateAction } from "react";
import { Text } from "./parts/Text";

type AbilityInputBoxProps = {
  label: string;
  inc: any;
  dec: any;
  input: any;
  // value: number;
  // setValue: (value: SetStateAction<number>) => void;
};

export default function AbilityInputBox({
  label,
  // value,
  // setValue,
  inc,
  dec,
  input,
}: AbilityInputBoxProps) {
  // const inc = getIncrementButtonProps();
  // const dec = getDecrementButtonProps();
  // const input = getInputProps();

  return (
    <Box pt={1} pb={1} px={4}>
      <Text color={"blackAlpha.700"}>{label}</Text>
      <HStack>
        <Input
          type="number"
          id="basicAbilityPower"
          name="basicAbilityPower"
          backgroundColor={"white"}
          color={"blackAlpha.700"}
          rounded={"lg"}
          required
          size={"sm"}
          {...input}
          // value={value}
          // onChange={(e) => setValue(Number(e.target.value))}
        />
        <Button backgroundColor={"white"} {...dec}>
          -
        </Button>
        <Button backgroundColor={"white"} {...inc}>
          +
        </Button>
      </HStack>
    </Box>
  );
}
