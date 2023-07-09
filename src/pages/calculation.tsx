import "@/app/globals.css";
import styles from "@/app/index.module.css";
import Link from "next/link";

export default function Calculation() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Damage Calculation</h1>
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
