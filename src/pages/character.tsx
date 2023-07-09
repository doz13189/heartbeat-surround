import "@/app/globals.css";
import styles from "@/app/index.module.css";
import Link from "next/link";

export default function Character() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Character</h1>
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
