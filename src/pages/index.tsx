// import Image from "next/image";
import { Heading } from "@/components/parts/Heading";
import { Text } from "@/components/parts/Text";
import { Box, LinkBox, LinkOverlay, Grid } from "@chakra-ui/react";

export default function Index() {
  return (
    <main>
      <Grid gap={4}>
        <Box color={"64C8EF"} pt={4}>
          <LinkBox
            borderWidth="2px"
            rounded="lg"
            borderColor={"blackAlpha.600"}
            backgroundColor={"#FAC00F"}
            p={3}
          >
            <Heading pt={2} pb={2}>
              <LinkOverlay href="/calculation" color="blackAlpha.800">
                Calculation
              </LinkOverlay>
            </Heading>
            <Text>Lets calculate the damage dealt to the opponent.</Text>
          </LinkBox>
        </Box>
        <Box color={"64C8EF"}>
          <LinkBox
            borderWidth="2px"
            rounded="lg"
            borderColor={"blackAlpha.600"}
            backgroundColor={"#FAC00F"}
            p={3}
          >
            <Heading pt={2} pb={2}>
              <LinkOverlay href="/character">Character</LinkOverlay>
            </Heading>
            <Text>Lets see the characters.</Text>
          </LinkBox>
        </Box>
      </Grid>
    </main>
  );
}
