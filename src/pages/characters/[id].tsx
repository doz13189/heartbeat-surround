import AbilityDisplayBox from "@/components/AbilityDisplayBox";
import { Heading } from "@/components/parts/Heading";
import { getCharacter } from "@/lib/character";
import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import character from "@/data/character.json";

export async function getStaticPaths() {
  const allCharactersData = getCharacter();
  const characterKeys = Object.keys(allCharactersData[0]) as Array<
    keyof (typeof allCharactersData)[0]
  >;
  return {
    paths: characterKeys.map((key) => {
      return {
        params: {
          id: key,
        },
      };
    }),
    fallback: false,
  };
}

// @ts-ignore
export async function getStaticProps({ params }) {
  return {
    props: {
      // @ts-ignore
      character: character[0][params.id],
    },
  };
}

// @ts-ignore
export default function Detail({ character }) {
  character;

  return (
    <main>
      <Box p={2}>
        <Box p={2}>
          <Heading color={"#F8784A"}>Detail</Heading>
        </Box>
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={2}
        m={2}
      >
        <AbilityDisplayBox label="Main Name" value={character.mainName} />
        <AbilityDisplayBox label="Sub Name" value={character.subName} />

        <AbilityDisplayBox label="Power" value={character.basicAbility.power} />
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
