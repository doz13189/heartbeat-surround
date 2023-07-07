import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/man-superhero-dark-skin-tone-svgrepo-com.svg"
          alt="hero"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/calculation" className={styles.card}>
          <h2>
            Calculation<span>-&gt;</span>
          </h2>
          <p>Lets calculate the damage dealt to the opponent.</p>
        </Link>

        <Link href="/calculation" className={styles.card}>
          <h2>
            Character <span>-&gt;</span>
          </h2>
          <p>Lets see the characters.</p>
        </Link>
      </div>
    </main>
  );
}
