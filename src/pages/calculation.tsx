import AbilityInputBox from "@/components/AbilityInputBox";
import AbilityDisplayBox from "@/components/AbilityDisplayBox";
import { Heading } from "@/components/parts/Heading";
import {
  Box,
  Grid,
  LinkBox,
  LinkOverlay,
  useNumberInput,
} from "@chakra-ui/react";
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
          <Heading color={"#F8784A"}>与ダメージ計算</Heading>
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
          <Heading color={"blackAlpha.700"}>キャラクターステータス</Heading>
        </Box>
        <AbilityInputBox
          label="パワー"
          input={getBasicAbilityPowerProps()}
          inc={getIncrementBasicAbilityPowerProps()}
          dec={getDecrementBasicAbilityPowerProps()}
        />
        <AbilityInputBox
          label="アドバンスパワー"
          input={getBasicAbilityAdvancePowerProps()}
          inc={getIncrementBasicAbilityAdvancePowerProps()}
          dec={getDecrementBasicAbilityAdvancePowerProps()}
        />
        <AbilityInputBox
          label="メモリーパワー"
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
          <Heading color={"blackAlpha.700"}>スキル情報</Heading>
        </Box>

        <AbilityInputBox
          label="アクションスキルダメージ率 (%)"
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
          <Heading color={"blackAlpha.700"}>味方のバフ</Heading>
        </Box>

        <AbilityInputBox
          label="パワーアップ (%)"
          input={getBuffPowerUpProps()}
          inc={getIncrementBuffPowerUpProps()}
          dec={getDecrementBuffPowerUpProps()}
        />

        <AbilityInputBox
          label="スキル威力アップ (%)"
          input={getBuffSkillImpactUpProps()}
          inc={getIncrementBuffSkillImpactUpProps()}
          dec={getDecrementBuffSkillImpactUpProps()}
        />

        <AbilityInputBox
          label="アクションスキル威力アップ (%)"
          input={getBuffActionSkillImpactUpProps()}
          inc={getIncrementBuffActionSkillImpactUpProps()}
          dec={getDecrementBuffActionSkillImpactUpProps()}
        />

        <AbilityInputBox
          label="クリティカル威力アップ (%)"
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
          <Heading color={"blackAlpha.700"}>敵のバフ</Heading>
        </Box>

        <Text color={"blackAlpha.700"}>
          {"ディフェンスアップ（近日実装予定）"}
        </Text>
        <Text color={"blackAlpha.700"}>{"ダメージカット（近日実装予定）"}</Text>
      </Box>

      <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
        mb={4}
      >
        <Box pb={1} pt={1}>
          <Heading color={"blackAlpha.700"}>敵のデバフ</Heading>
        </Box>

        <Text color={"blackAlpha.700"}>
          {"ディフェンスダウン（近日実装予定）"}
        </Text>
      </Box>

      {/* <Box
        backgroundColor={"blackAlpha.100"}
        borderColor={"blackAlpha.600"}
        rounded="lg"
        p={4}
        mb={4}
      >
        <Box pb={1} pt={1}>
          <Heading color={"blackAlpha.700"}>その他</Heading>
        </Box>

        
        <Text color={"blackAlpha.700"}>{"スキルチェイン"}</Text>
        <Text color={"blackAlpha.700"}>{"弱点"}</Text>
        <Text color={"blackAlpha.700"}>{"アリーナ1ターン目"}</Text>
      </Box> */}

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

      <Box height={"375px"}></Box>
      <Box
        backgroundColor={"orange.100"}
        borderColor={"#FAC00F"}
        borderWidth={"5px"}
        p={4}
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
      >
        <Box pt={1} pb={1} px={4}>
          <AbilityDisplayBox label="通常攻撃" value={nonCriticalNormalAttack} />

          <AbilityDisplayBox
            label="通常攻撃 (クリティカルヒット)"
            value={criticalNormalAttack}
          />

          <AbilityDisplayBox
            label="アクションスキル"
            value={nonCriticalActionSkillAttack}
          />

          <AbilityDisplayBox
            label="アクションスキル (クリティカルヒット)"
            value={criticalActionSkillAttack}
          />
        </Box>
      </Box>
    </main>
  );
}
