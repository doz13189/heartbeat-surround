const DAMAGE_DEALT_COEFFICIENT = 5;
const CRITICAL_HIT_MULTIPLIER = 1.5;
export const calculateNonCriticalNormalAttack = (
  basicAbilityPower: number | undefined,
  basicAbilityAdvancePower: number | undefined,
  memoryPower: number | undefined,
  buffPowerUp: number | undefined,
  BuffDefenseUp: number | undefined,
  BuffDamageCut: number | undefined,
  BuffDefenseDown: number | undefined
) => {
  if (basicAbilityPower === undefined) return 0;
  if (basicAbilityAdvancePower === undefined) return 0;
  if (memoryPower === undefined) return 0;
  if (buffPowerUp === undefined) return 0;
  if (BuffDefenseUp === undefined) return 0;
  if (BuffDamageCut === undefined) return 0;
  if (BuffDefenseDown === undefined) return 0;

  const BuffDefense =
    BuffDefenseUp - BuffDefenseDown <= -50
      ? -50
      : BuffDefenseUp - BuffDefenseDown;

  return Math.ceil(
    ((((basicAbilityPower + basicAbilityAdvancePower + memoryPower) *
      (buffPowerUp / 100 + 1)) /
      (BuffDefense / 100 + 1)) *
      (1 - BuffDamageCut / 100)) /
      DAMAGE_DEALT_COEFFICIENT
  );
};

export const calculateCriticalNormalAttack = (
  nonCriticalNormalAttack: number,
  buffCriticalHitImpactUp: number | undefined
) => {
  if (buffCriticalHitImpactUp === undefined) return 0;

  return Math.ceil(
    nonCriticalNormalAttack *
      (buffCriticalHitImpactUp / 100 + 1) *
      CRITICAL_HIT_MULTIPLIER
  );
};

export const calculateNonCriticalActionSkillAttack = (
  nonCriticalNormalAttack: number,
  actionSkillMultiplier: number | undefined,
  buffSkillImpactUp: number | undefined,
  buffActionSkillImpactUp: number | undefined
) => {
  if (actionSkillMultiplier === undefined) return 0;
  if (buffSkillImpactUp === undefined) return 0;
  if (buffActionSkillImpactUp === undefined) return 0;

  return Math.ceil(
    nonCriticalNormalAttack *
      (actionSkillMultiplier / 100) *
      (buffSkillImpactUp / 100 + 1) *
      (buffActionSkillImpactUp / 100 + 1)
  );
};

export const calculateCriticalActionSkillAttack = (
  nonCriticalActionSkillAttack: number,
  buffCriticalHitImpactUp: number | undefined
) => {
  if (buffCriticalHitImpactUp === undefined) return 0;

  return Math.ceil(
    nonCriticalActionSkillAttack *
      (buffCriticalHitImpactUp / 100 + 1) *
      CRITICAL_HIT_MULTIPLIER
  );
};
