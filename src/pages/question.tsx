import AbilityDisplayBox from "@/components/AbilityDisplayBox";
import DamageDisplayBox from "@/components/DamageDisplayBox";
import { Heading } from "@/components/parts/Heading";
import {
  calculateNonCriticalActionSkillAttack,
  calculateNonCriticalNormalAttack,
} from "@/lib/calculatinLogic";
import { getCharacter } from "@/lib/character";
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";

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
          <Heading color={"#F8784A"}>よくある質問</Heading>
        </Box>
      </Box>

      <Box p={2}>
        <Box
          backgroundColor={"blackAlpha.100"}
          borderColor={"blackAlpha.600"}
          rounded="lg"
          p={4}
        >
          <Text>
            疑問)プルスウルトラの与ダメージ計算をしたいのですが、どうすればいいですか？
          </Text>
          <Box pt={2} pb={2}>
            <Text>回答) 現在、実装してません。</Text>
          </Box>
        </Box>
      </Box>

      <Box p={2}>
        <Box
          backgroundColor={"blackAlpha.100"}
          borderColor={"blackAlpha.600"}
          rounded="lg"
          p={4}
        >
          <Text>
            疑問)ディフェンスダウンを入れているのに思っているより与ダメージが出ないのですが、どうすればいいですか？
          </Text>
          <Box pt={2} pb={2}>
            <Text>
              回答)
              ディフェンスダウンは最大50%までしか与ダメージには適用されません。
            </Text>
          </Box>
        </Box>
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
            <LinkOverlay href="/">ホームへ</LinkOverlay>
          </Heading>
        </LinkBox>
      </Box>
    </main>
  );
}
