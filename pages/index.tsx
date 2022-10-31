import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trevor Danahy</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside>left</aside>

      <main className={styles.main}>
        <nav className={styles.nav}>Hi, I'm Trevor Danahy</nav>
        <h1>I'm Awesome</h1>
        <footer className={styles.footer}>
          <p>Some stuff here</p>
        </footer>
      </main>
      <aside>right</aside>
    </div>
  );
}
