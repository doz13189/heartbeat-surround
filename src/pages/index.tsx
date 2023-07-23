import { Heading } from "@/components/parts/Heading";
import { Text } from "@/components/parts/Text";
import { Box, LinkBox, LinkOverlay, Grid, Link } from "@chakra-ui/react";

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
            <Text>Let&apos;s calculate the damage dealt to the opponent.</Text>
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
            <Text>Let&apos;s see the characters.</Text>
          </LinkBox>
        </Box>

        <Box p={2}>
          <Box>
            <Box p={2}>
              <Heading color={"#F8784A"}>About this app</Heading>
            </Box>
          </Box>

          <Box
            backgroundColor={"blackAlpha.100"}
            borderColor={"blackAlpha.600"}
            rounded="lg"
            p={4}
          >
            <Text>
              When playing Ultra Impact, have you ever wondered how the amount
              of damage a character deals to an opponent is determined ? This
              app can calculate the damage your character does to your opponent.
            </Text>
            <Text>
              However, please be aware that it&apos;s not an official app, so it
              may not be entirely accurate.
            </Text>
          </Box>
        </Box>

        <Box p={2}>
          <Box>
            <Box p={2}>
              <Heading color={"#F8784A"}>How to Use</Heading>
            </Box>
          </Box>

          <Box
            backgroundColor={"blackAlpha.100"}
            borderColor={"blackAlpha.600"}
            rounded="lg"
            p={4}
          >
            <Text>
              If you wish to input your character&apos;s stats and calculate the
              damage, please go to the{" "}
              <Link
                color="#FAC00F"
                href={"/calculation"}
                textDecoration={"underline"}
              >
                calculation
              </Link>{" "}
              page. If you want to check the damage for each character
              individually, please go to the{" "}
              <Link
                color="#FAC00F"
                href={"/calculation"}
                textDecoration={"underline"}
              >
                character
              </Link>{" "}
              page.
            </Text>
          </Box>
        </Box>

        <Box p={2}>
          <Box>
            <Box p={2}>
              <Heading color={"#F8784A"}>About Me</Heading>
            </Box>
          </Box>

          <Box
            backgroundColor={"blackAlpha.100"}
            borderColor={"blackAlpha.600"}
            rounded="lg"
            p={4}
          >
            <Text>
              If you have any questions, please contact me on my{" "}
              <Link
                color="#FAC00F"
                href={"https://twitter.com/doz13189"}
                textDecoration={"underline"}
                isExternal
              >
                Twitter account
              </Link>
              .
            </Text>

            {/*  */}
          </Box>
        </Box>
      </Grid>
    </main>
  );
}
