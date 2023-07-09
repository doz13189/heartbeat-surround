import "@/app/globals.css";
import styles from "@/app/index.module.css";
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
  const dabi = allCharactersData[0].dabi;

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Character</h1>
      </div>

      <div className={styles.grid}>
        <div>
          <label>Sub Name</label>
          <p>{String(dabi.subName)}</p>
        </div>

        <div>
          <label>Power</label>
          <p>{String(dabi.basicAbility.power)}</p>
        </div>

        <div>
          <label>Advance Power</label>
          <p>{String(dabi.advancePower.power)}</p>
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
