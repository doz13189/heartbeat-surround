import "@/app/globals.css";
import styles from "@/app/index.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Calculation() {
  const [basicAbilityPower, setBasicAbilityPower] = useState(0);
  const [basicAbilityAdvancePower, setBasicAbilityAdvancePower] = useState(0);
  const [memoryPower, setMemoryPower] = useState(0);
  const [buffPowerUp, setBuffPowerUp] = useState(1);
  const damageDealtCoefficient = 5;

  const nonCriticalNormalAttack = Math.ceil(
    ((basicAbilityPower + basicAbilityAdvancePower + memoryPower) *
      buffPowerUp) /
      damageDealtCoefficient
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
            onChange={(e) => setBuffPowerUp(Number(e.target.value))}
          />
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <label>non-critical normal attack</label>
          <p>{nonCriticalNormalAttack}</p>
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
