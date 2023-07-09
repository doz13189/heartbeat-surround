import "@/app/globals.css";
import styles from "@/app/index.module.css";
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
        <div>
          <div>
            <label>Power</label>
          </div>
          <input
            type="number"
            id="basicAbilityPower"
            name="basicAbilityPower"
            required
            size={10}
            value={basicAbilityPower}
            onChange={(e) => setBasicAbilityPower(Number(e.target.value))}
          />
        </div>

        <div>
          <div>
            <label>Advance Power</label>
          </div>
          <input
            type="number"
            id="basicAbilityAdvancePower"
            name="basicAbilityAdvancePower"
            required
            size={10}
            value={basicAbilityAdvancePower}
            onChange={(e) =>
              setBasicAbilityAdvancePower(Number(e.target.value))
            }
          />
        </div>

        <div>
          <div>
            <label>Memory Power</label>
          </div>
          <input
            type="number"
            id="memoryPower"
            name="memoryPower"
            required
            size={10}
            value={memoryPower}
            onChange={(e) => setMemoryPower(Number(e.target.value))}
          />
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <div>
            <label>Power Up</label>
          </div>
          <input
            type="number"
            id="buffPowerUp"
            name="buffPowerUp"
            required
            size={10}
            value={buffPowerUp}
            onChange={(e) => setBuffPowerUp(Number(e.target.value))}
          />
        </div>

        <div>
          <div>
            <label>Critical Hit Impact Up</label>
          </div>
          <input
            type="number"
            id="buffCriticalHitImpactUp"
            name="buffCriticalHitImpactUp"
            required
            size={10}
            value={buffCriticalHitImpactUp}
            onChange={(e) => setBuffCriticalHitImpactUp(Number(e.target.value))}
          />
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <div>
            <label>Skill Impact Up</label>
          </div>
          <input
            type="number"
            id="buffSkillImpactUp"
            name="buffSkillImpactUp"
            required
            size={10}
            value={buffSkillImpactUp}
            onChange={(e) => setBuffSkillImpactUp(Number(e.target.value))}
          />
        </div>

        <div>
          <div>
            <label>Action Skill Impact Up</label>
          </div>
          <input
            type="number"
            id="buffActionSkillImpactUp"
            name="buffActionSkillImpactUp"
            required
            size={10}
            value={buffActionSkillImpactUp}
            onChange={(e) => setBuffActionSkillImpactUp(Number(e.target.value))}
          />
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <div>
            <label>Action Skill Multiplier</label>
          </div>
          <input
            type="number"
            id="actionSkillMultiplier"
            name="actionSkillMultiplier"
            required
            size={10}
            value={actionSkillMultiplier}
            onChange={(e) => setActionSkillMultiplier(Number(e.target.value))}
          />
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <label>Non Critical Normal Attack</label>
          <p>{nonCriticalNormalAttack}</p>
        </div>

        <div>
          <label>Critical Normal Attack</label>
          <p>{criticalNormalAttack}</p>
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <label>Non Critical Action Skill Attack</label>
          <p>{nonCriticalActionSkillAttack}</p>
        </div>

        <div>
          <label>Critical Action Skill Attack</label>
          <p>{criticalActionSkillAttack}</p>
        </div>
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
