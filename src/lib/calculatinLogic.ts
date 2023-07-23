const DAMAGE_DEALT_COEFFICIENT = 5;
const CRITICAL_HIT_MULTIPLIER = 1.5;
export const calculateNonCriticalNormalAttack = (
  basicAbilityPower: number,
  basicAbilityAdvancePower: number,
  memoryPower: number,
  buffPowerUp: number
) => {
  return Math.ceil(
    ((basicAbilityPower + basicAbilityAdvancePower + memoryPower) *
      buffPowerUp) /
      DAMAGE_DEALT_COEFFICIENT
  );
};

export const calculateCriticalNormalAttack = (
  nonCriticalNormalAttack: number,
  buffCriticalHitImpactUp: number
) => {
  return Math.ceil(
    nonCriticalNormalAttack * buffCriticalHitImpactUp * CRITICAL_HIT_MULTIPLIER
  );
};

export const calculateNonCriticalActionSkillAttack = (
  nonCriticalNormalAttack: number,
  actionSkillMultiplier: number,
  buffSkillImpactUp: number,
  buffActionSkillImpactUp: number
) => {
  return Math.ceil(
    nonCriticalNormalAttack *
      actionSkillMultiplier *
      buffSkillImpactUp *
      buffActionSkillImpactUp
  );
};

export const calculateCriticalActionSkillAttack = (
  nonCriticalActionSkillAttack: number,
  buffCriticalHitImpactUp: number
) => {
  return Math.ceil(
    nonCriticalActionSkillAttack *
      buffCriticalHitImpactUp *
      CRITICAL_HIT_MULTIPLIER
  );
};
