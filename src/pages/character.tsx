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
          <Heading color={"blackAlpha.600"}>Character</Heading>
        </Box>
        <Box>
          <Divider colorScheme={"teal"} />
        </Box>
      </Box>

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

      <LinkBox borderWidth="1px" rounded="md" p={2} m={1}>
        <Heading color="teal.400">
          <LinkOverlay href="/">Back to home</LinkOverlay>
        </Heading>
      </LinkBox>
    </main>
  );
}
