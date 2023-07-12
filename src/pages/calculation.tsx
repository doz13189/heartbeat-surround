import "@/app/globals.css";
import styles from "@/app/index.module.css";
import AbilityInputBox from "@/components/AbilityInputBox";
import AbilityDisplayBox from "@/components/AbilityInputBox copy";
import Link from "next/link";
import { useState } from "react";

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
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Damage Calculation</h1>
      </div>

      <div className={styles.grid}>
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
      </div>

      <div className={styles.grid}>
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
      </div>

      <div className={styles.grid}>
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
      </div>

      <div className={styles.grid}>
        <AbilityInputBox
          label="Action Skill Multiplier"
          value={actionSkillMultiplier}
          setValue={setActionSkillMultiplier}
        />
      </div>

      <div className={styles.grid}>
        <AbilityDisplayBox
          label="Non Critical Normal Attack"
          value={nonCriticalNormalAttack}
        />

        <AbilityDisplayBox
          label="Critical Normal Attack"
          value={criticalNormalAttack}
        />
      </div>

      <div className={styles.grid}>
        <AbilityDisplayBox
          label="Non Critical Action Skill Attack"
          value={nonCriticalActionSkillAttack}
        />

        <AbilityDisplayBox
          label="Critical Action Skill Attack"
          value={criticalActionSkillAttack}
        />
      </div>

      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            Back to home<span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
