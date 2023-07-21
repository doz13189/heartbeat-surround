import AbilityInputBox from "@/components/AbilityInputBox";
import AbilityDisplayBox from "@/components/AbilityDisplayBox";
import { useState } from "react";
import { Heading } from "@/components/parts/Heading";
import { Box, Divider, LinkBox, LinkOverlay } from "@chakra-ui/react";

export default function Calculation() {
  const [basicAbilityPower, setBasicAbilityPower] = useState(8982);
  const [basicAbilityAdvancePower, setBasicAbilityAdvancePower] =
    useState(1800);
  const [memoryPower, setMemoryPower] = useState(0);
  const [buffPowerUp, setBuffPowerUp] = useState(1.2);

  const [buffSkillImpactUp, setBuffSkillImpactUp] = useState(1.1);
  const [buffActionSkillImpactUp, setBuffActionSkillImpactUp] = useState(1);
  const [buffCriticalHitImpactUp, setBuffCriticalHitImpactUp] = useState(1.09);

  const [actionSkillMultiplier, setActionSkillMultiplier] = useState(3);

  const damageDealtCoefficient = 5;
  const criticalHitMultiplier = 1.5;

  const nonCriticalNormalAttack = Math.ceil(
    ((basicAbilityPower + basicAbilityAdvancePower + memoryPower) *
      buffPowerUp) /
      damageDealtCoefficient
  );

  const criticalNormalAttack = Math.ceil(
    nonCriticalNormalAttack * buffCriticalHitImpactUp * criticalHitMultiplier
  );

  const nonCriticalActionSkillAttack = Math.ceil(
    nonCriticalNormalAttack *
      actionSkillMultiplier *
      buffSkillImpactUp *
      buffActionSkillImpactUp
  );

  const criticalActionSkillAttack = Math.ceil(
    nonCriticalActionSkillAttack *
      buffCriticalHitImpactUp *
      criticalHitMultiplier
  );

  return (
    <main>
      <Box p={2}>
        <Box p={2}>
          <Heading color={"#F8784A"}>Damage Calculation</Heading>
        </Box>
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
        mb={4}
      >
        <AbilityInputBox
          label="Power"
          value={basicAbilityPower}
          setValue={setBasicAbilityPower}
        />

        <AbilityInputBox
          label="Advance Power"
          value={basicAbilityAdvancePower}
          setValue={setBasicAbilityAdvancePower}
        />

        <AbilityInputBox
          label="Memory Power"
          value={memoryPower}
          setValue={setMemoryPower}
        />

        <AbilityInputBox
          label="Power Up"
          value={buffPowerUp}
          setValue={setBuffPowerUp}
        />

        <AbilityInputBox
          label="Critical Hit Impact Up"
          value={buffCriticalHitImpactUp}
          setValue={setBuffCriticalHitImpactUp}
        />

        <AbilityInputBox
          label="Skill Impact Up"
          value={buffSkillImpactUp}
          setValue={setBuffSkillImpactUp}
        />

        <AbilityInputBox
          label="Action Skill Impact Up"
          value={buffActionSkillImpactUp}
          setValue={setBuffActionSkillImpactUp}
        />

        <AbilityInputBox
          label="Action Skill Multiplier"
          value={actionSkillMultiplier}
          setValue={setActionSkillMultiplier}
        />
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
      >
        <Box>
          <AbilityDisplayBox
            label="Non Critical Normal Attack"
            value={nonCriticalNormalAttack}
          />

          <AbilityDisplayBox
            label="Critical Normal Attack"
            value={criticalNormalAttack}
          />

          <AbilityDisplayBox
            label="Non Critical Action Skill Attack"
            value={nonCriticalActionSkillAttack}
          />

          <AbilityDisplayBox
            label="Critical Action Skill Attack"
            value={criticalActionSkillAttack}
          />
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
            <LinkOverlay href="/">Back to home</LinkOverlay>
          </Heading>
        </LinkBox>
      </Box>
    </main>
  );
}
