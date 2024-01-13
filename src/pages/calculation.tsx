import AbilityInputBox from "@/components/AbilityInputBox";
import AbilityDisplayBox from "@/components/AbilityDisplayBox";
import { Heading } from "@/components/parts/Heading";
import { Box, LinkBox, LinkOverlay, useNumberInput } from "@chakra-ui/react";
import {
  calculateCriticalActionSkillAttack,
  calculateCriticalNormalAttack,
  calculateNonCriticalActionSkillAttack,
  calculateNonCriticalNormalAttack,
} from "@/lib/calculatinLogic";
import { Text } from "@/components/parts/Text";

export default function Calculation() {
  const {
    getInputProps: getBasicAbilityPowerProps,
    getIncrementButtonProps: getIncrementBasicAbilityPowerProps,
    getDecrementButtonProps: getDecrementBasicAbilityPowerProps,
  } = useNumberInput({
    defaultValue: 9_000,
    step: 1,
    min: 1,
    max: 20_000,
    precision: 0,
  });
  const basicAbilityPower = getBasicAbilityPowerProps()["aria-valuenow"];

  const {
    getInputProps: getBasicAbilityAdvancePowerProps,
    getIncrementButtonProps: getIncrementBasicAbilityAdvancePowerProps,
    getDecrementButtonProps: getDecrementBasicAbilityAdvancePowerProps,
  } = useNumberInput({
    defaultValue: 1800,
    step: 1,
    min: 1,
    max: 1800,
    precision: 0,
  });
  const basicAbilityAdvancePower =
    getBasicAbilityAdvancePowerProps()["aria-valuenow"];

  const {
    getInputProps: getMemoryPowerProps,
    getIncrementButtonProps: getIncrementMemoryPowerProps,
    getDecrementButtonProps: getDecrementMemoryPowerProps,
  } = useNumberInput({
    defaultValue: 0,
    step: 1,
    min: 0,
    max: 10_000,
    precision: 0,
  });
  const memoryPower = getMemoryPowerProps()["aria-valuenow"];

  const {
    getInputProps: getActionSkillMultiplierProps,
    getIncrementButtonProps: getIncrementActionSkillMultiplierProps,
    getDecrementButtonProps: getDecrementActionSkillMultiplierProps,
  } = useNumberInput({
    defaultValue: 300,
    step: 1,
    min: 0,
    max: 1_000,
    precision: 0,
  });
  const actionSkillMultiplier =
    getActionSkillMultiplierProps()["aria-valuenow"];

  const {
    getInputProps: getBuffPowerUpProps,
    getIncrementButtonProps: getIncrementBuffPowerUpProps,
    getDecrementButtonProps: getDecrementBuffPowerUpProps,
  } = useNumberInput({
    defaultValue: 0,
    step: 1,
    min: 0,
    max: 1_000,
    precision: 0,
  });
  const buffPowerUp = getBuffPowerUpProps()["aria-valuenow"];

  const {
    getInputProps: getBuffSkillImpactUpProps,
    getIncrementButtonProps: getIncrementBuffSkillImpactUpProps,
    getDecrementButtonProps: getDecrementBuffSkillImpactUpProps,
  } = useNumberInput({
    defaultValue: 0,
    step: 1,
    min: 0,
    max: 1_000,
    precision: 0,
  });
  const buffSkillImpactUp = getBuffSkillImpactUpProps()["aria-valuenow"];

  const {
    getInputProps: getBuffActionSkillImpactUpProps,
    getIncrementButtonProps: getIncrementBuffActionSkillImpactUpProps,
    getDecrementButtonProps: getDecrementBuffActionSkillImpactUpProps,
  } = useNumberInput({
    defaultValue: 0,
    step: 1,
    min: 0,
    max: 1_000,
    precision: 0,
  });
  const buffActionSkillImpactUp =
    getBuffActionSkillImpactUpProps()["aria-valuenow"];

  const {
    getInputProps: getBuffCriticalHitImpactUpProps,
    getIncrementButtonProps: getIncrementBuffCriticalHitImpactUpProps,
    getDecrementButtonProps: getDecrementBuffCriticalHitImpactUpProps,
  } = useNumberInput({
    defaultValue: 0,
    step: 1,
    min: 0,
    max: 1_000,
    precision: 0,
  });
  const buffCriticalHitImpactUp =
    getBuffCriticalHitImpactUpProps()["aria-valuenow"];

  const nonCriticalNormalAttack = calculateNonCriticalNormalAttack(
    basicAbilityPower,
    basicAbilityAdvancePower,
    memoryPower,
    buffPowerUp
  );

  const criticalNormalAttack = calculateCriticalNormalAttack(
    nonCriticalNormalAttack,
    buffCriticalHitImpactUp
  );

  const nonCriticalActionSkillAttack = calculateNonCriticalActionSkillAttack(
    nonCriticalNormalAttack,
    actionSkillMultiplier,
    buffSkillImpactUp,
    buffActionSkillImpactUp
  );

  const criticalActionSkillAttack = calculateCriticalActionSkillAttack(
    nonCriticalActionSkillAttack,
    buffCriticalHitImpactUp
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
        <Box pb={1} pt={1}>
          <Heading color={"blackAlpha.700"}>Character Status</Heading>
        </Box>
        <AbilityInputBox
          label="Power"
          input={getBasicAbilityPowerProps()}
          inc={getIncrementBasicAbilityPowerProps()}
          dec={getDecrementBasicAbilityPowerProps()}
        />
        <AbilityInputBox
          label="Advance Power"
          input={getBasicAbilityAdvancePowerProps()}
          inc={getIncrementBasicAbilityAdvancePowerProps()}
          dec={getDecrementBasicAbilityAdvancePowerProps()}
        />
        <AbilityInputBox
          label="Memory Power"
          input={getMemoryPowerProps()}
          inc={getIncrementMemoryPowerProps()}
          dec={getDecrementMemoryPowerProps()}
        />
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
        mb={4}
      >
        <Box pb={1} pt={1}>
          <Heading color={"blackAlpha.700"}>Skill Information</Heading>
        </Box>

        <AbilityInputBox
          label="Action Skill Multiplier (%)"
          input={getActionSkillMultiplierProps()}
          inc={getIncrementActionSkillMultiplierProps()}
          dec={getDecrementActionSkillMultiplierProps()}
        />
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
        mb={4}
      >
        <Box pb={1} pt={1}>
          <Heading color={"blackAlpha.700"}>Ally Buff</Heading>
        </Box>

        <AbilityInputBox
          label="Power Up (%)"
          input={getBuffPowerUpProps()}
          inc={getIncrementBuffPowerUpProps()}
          dec={getDecrementBuffPowerUpProps()}
        />

        <AbilityInputBox
          label="Skill Impact Up (%)"
          input={getBuffSkillImpactUpProps()}
          inc={getIncrementBuffSkillImpactUpProps()}
          dec={getDecrementBuffSkillImpactUpProps()}
        />

        <AbilityInputBox
          label="Action Skill Impact Up (%)"
          input={getBuffActionSkillImpactUpProps()}
          inc={getIncrementBuffActionSkillImpactUpProps()}
          dec={getDecrementBuffActionSkillImpactUpProps()}
        />

        <AbilityInputBox
          label="Critical Hit Impact Up (%)"
          input={getBuffCriticalHitImpactUpProps()}
          inc={getIncrementBuffCriticalHitImpactUpProps()}
          dec={getDecrementBuffCriticalHitImpactUpProps()}
        />
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
        mb={4}
      >
        <Box pb={1} pt={1}>
          <Heading color={"blackAlpha.700"}>Enemy Buff</Heading>
        </Box>

        <Text color={"blackAlpha.700"}>{"Defense Up"}</Text>
        <Text color={"blackAlpha.700"}>{"Damage Cut"}</Text>
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
        mb={4}
      >
        <Box pb={1} pt={1}>
          <Heading color={"blackAlpha.700"}>Enemy DeBuff</Heading>
        </Box>

        <Text color={"blackAlpha.700"}>{"Defense Down"}</Text>
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
        mb={4}
      >
        <Box pb={1} pt={1}>
          <Heading color={"blackAlpha.700"}>Others</Heading>
        </Box>

        <Text color={"blackAlpha.700"}>{"Skill Chain"}</Text>
        <Text color={"blackAlpha.700"}>{"Weakness"}</Text>
        <Text color={"blackAlpha.700"}>{"First turn in the arena"}</Text>
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

      <Box height={"375px"}></Box>
      <Box
        backgroundColor={"orange.100"}
        borderColor={"#FAC00F"}
        borderWidth={"5px"}
        // rounded="lg"
        p={4}
        position="fixed"
        textAlign="center"
        bottom="0"
        left="0"
        width="100%"
      >
        <Box pt={1} pb={1} px={4}>
          <AbilityDisplayBox
            label="Normal Attack (Non Critical)"
            value={nonCriticalNormalAttack}
          />

          <AbilityDisplayBox
            label="Normal Attack (Critical)"
            value={criticalNormalAttack}
          />

          <AbilityDisplayBox
            label="Action Skill Attack (Non Critical)"
            value={nonCriticalActionSkillAttack}
          />

          <AbilityDisplayBox
            label="Action Skill Attack (Critical)"
            value={criticalActionSkillAttack}
          />
        </Box>
      </Box>
    </main>
  );
}
