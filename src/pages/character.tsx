import "@/app/globals.css";
import styles from "@/app/index.module.css";
import AbilityDisplayBox from "@/components/AbilityDisplayBox";
import { getCharacter } from "@/lib/character";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

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
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Character</h1>
      </div>

      {characterKeys.map((key) => (
        <div className={styles.grid} key={key}>
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
        </div>
      ))}

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
