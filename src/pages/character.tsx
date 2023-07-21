import AbilityDisplayBox from "@/components/AbilityDisplayBox";
import { Heading } from "@/components/parts/Heading";
import { getCharacter } from "@/lib/character";
import { Box, Divider, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

export async function getServerSideProps() {
  const allCharactersData = getCharacter();
  return {
    props: {
      allCharactersData,
    },
  };
}

export default function Character({
  allCharactersData,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const advancePower = 1800;
  const characterKeys = Object.keys(allCharactersData[0]) as Array<
    keyof (typeof allCharactersData)[0]
  >;

  return (
    <main>
      <Box p={2}>
        <Box p={2}>
          <Heading color={"#F8784A"}>Character</Heading>
        </Box>
        <Box>{/* <Divider colorScheme={"teal"} /> */}</Box>
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        pt={4}
      >
        {characterKeys.map((key) => (
          <Box p={2} key={key}>
            <AbilityDisplayBox
              label="Main Name"
              value={allCharactersData[0][key].mainName}
            />
            <AbilityDisplayBox
              label="Sub Name"
              value={allCharactersData[0][key].subName}
            />

            <AbilityDisplayBox
              label="Power"
              value={allCharactersData[0][key].basicAbility.power}
            />

            <AbilityDisplayBox
              label="Advance Power"
              value={
                Number(allCharactersData[0][key].basicAbility.power) +
                advancePower
              }
            />
          </Box>
        ))}
      </Box>

      <Box color={"64C8EF"} pt={4}>
        <LinkBox
          borderWidth="2px"
          rounded="lg"
          borderColor={"blackAlpha.600"}
          backgroundColor={"#FAC00F"}
          p={3}
        >
          <Heading pt={2} pb={2}>
            <LinkOverlay href="/">Back to home</LinkOverlay>
          </Heading>
        </LinkBox>
      </Box>
    </main>
  );
}
