import Head from "next/head";
import Nav from "../components/global/Nav";
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
        <Nav />
        <h1>I'm Awesome</h1>
        <footer className={styles.footer}>
          <p>Some stuff here</p>
        </footer>
      </main>
      <aside>right</aside>
    </div>
  );
}
