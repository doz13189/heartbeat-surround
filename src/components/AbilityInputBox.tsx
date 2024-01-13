import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { Text } from "./parts/Text";

type AbilityInputBoxProps = {
  label: string;
  input: any;
  inc: any;
  dec: any;
};

export default function AbilityInputBox({
  label,
  input,
  inc,
  dec,
}: AbilityInputBoxProps) {
  return (
    <Box pt={1} pb={1} px={4}>
      <Text color={"blackAlpha.700"}>{label}</Text>
      <HStack>
        <Input
          type="number"
          id={label}
          name={label}
          backgroundColor={"white"}
          color={"blackAlpha.700"}
          rounded={"lg"}
          required
          size={"sm"}
          {...input}
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
