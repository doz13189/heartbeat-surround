// import Image from "next/image";
import { Heading } from "@/components/parts/Heading";
import { Text } from "@/components/parts/Text";
import { Box, LinkBox, LinkOverlay, Grid } from "@chakra-ui/react";

export default function Index() {
  return (
    <main>
      <Grid gap={4}>
        <Box pt={4}>
          <LinkBox borderWidth="1px" rounded="md" p={2} m={1}>
            <Heading color="teal.400">
              <LinkOverlay href="/calculation">Calculation</LinkOverlay>
            </Heading>
            <Text>Lets calculate the damage dealt to the opponent.</Text>
          </LinkBox>
        </Box>
        <Box>
          <LinkBox borderWidth="1px" rounded="md" p={2} m={1}>
            <Heading color="teal.400">
              <LinkOverlay href="/character">Calculation</LinkOverlay>
            </Heading>
            <Text>Lets see the characters.</Text>
          </LinkBox>
        </Box>
      </Grid>
    </main>
  );
}
