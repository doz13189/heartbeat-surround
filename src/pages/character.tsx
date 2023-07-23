import AbilityDisplayBox from "@/components/AbilityDisplayBox";
import DamageDisplayBox from "@/components/DamageDisplayBox";
import { Heading } from "@/components/parts/Heading";
import {
  calculateNonCriticalActionSkillAttack,
  calculateNonCriticalNormalAttack,
} from "@/lib/calculatinLogic";
import { getCharacter } from "@/lib/character";
import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
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
          <Heading color={"#F8784A"}>Character</Heading>
        </Box>
      </Box>

      {characterKeys.map((key) => (
        <Box
          backgroundColor={"blackAlpha.100"}
          borderColor={"blackAlpha.600"}
          rounded="lg"
          p={2}
          m={2}
          key={key}
        >
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

          <DamageDisplayBox
            label="Normal"
            value={calculateNonCriticalNormalAttack(
              allCharactersData[0][key].basicAbility.power,
              advancePower,
              0,
              allCharactersData[0][key].autoSkillBuff.powerUp
            )}
          />

          <DamageDisplayBox
            label="Action Skill 1 Damage"
            value={calculateNonCriticalActionSkillAttack(
              calculateNonCriticalNormalAttack(
                allCharactersData[0][key].basicAbility.power,
                advancePower,
                0,
                1
              ),
              allCharactersData[0][key].actionSkill.one.multiplier,
              allCharactersData[0][key].autoSkillBuff.skillImpactUp,
              allCharactersData[0][key].autoSkillBuff.actionSkillImpactUp
            )}
          />

          <DamageDisplayBox
            label="Action Skill 1 Total Damage"
            value={
              allCharactersData[0][key].actionSkill.one.attackType === "all"
                ? calculateNonCriticalActionSkillAttack(
                    calculateNonCriticalNormalAttack(
                      allCharactersData[0][key].basicAbility.power,
                      advancePower,
                      0,
                      1
                    ),
                    allCharactersData[0][key].actionSkill.one.multiplier,
                    allCharactersData[0][key].autoSkillBuff.skillImpactUp,
                    allCharactersData[0][key].autoSkillBuff.actionSkillImpactUp
                  ) * 3
                : calculateNonCriticalActionSkillAttack(
                    calculateNonCriticalNormalAttack(
                      allCharactersData[0][key].basicAbility.power,
                      advancePower,
                      0,
                      1
                    ),
                    allCharactersData[0][key].actionSkill.one.multiplier,
                    allCharactersData[0][key].autoSkillBuff.skillImpactUp,
                    allCharactersData[0][key].autoSkillBuff.actionSkillImpactUp
                  )
            }
          />

          <DamageDisplayBox
            label="Action Skill 2 Damage"
            value={calculateNonCriticalActionSkillAttack(
              calculateNonCriticalNormalAttack(
                allCharactersData[0][key].basicAbility.power,
                advancePower,
                0,
                1
              ),
              allCharactersData[0][key].actionSkill.two.multiplier,
              allCharactersData[0][key].autoSkillBuff.skillImpactUp,
              allCharactersData[0][key].autoSkillBuff.actionSkillImpactUp
            )}
          />

          <DamageDisplayBox
            label="Action Skill 2 Total Damage"
            value={
              allCharactersData[0][key].actionSkill.two.attackType === "all"
                ? calculateNonCriticalActionSkillAttack(
                    calculateNonCriticalNormalAttack(
                      allCharactersData[0][key].basicAbility.power,
                      advancePower,
                      0,
                      1
                    ),
                    allCharactersData[0][key].actionSkill.two.multiplier,
                    allCharactersData[0][key].autoSkillBuff.skillImpactUp,
                    allCharactersData[0][key].autoSkillBuff.actionSkillImpactUp
                  ) * 3
                : calculateNonCriticalActionSkillAttack(
                    calculateNonCriticalNormalAttack(
                      allCharactersData[0][key].basicAbility.power,
                      advancePower,
                      0,
                      1
                    ),
                    allCharactersData[0][key].actionSkill.two.multiplier,
                    allCharactersData[0][key].autoSkillBuff.skillImpactUp,
                    allCharactersData[0][key].autoSkillBuff.actionSkillImpactUp
                  )
            }
          />
        </Box>
      ))}

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
