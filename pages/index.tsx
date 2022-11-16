import Head from "next/head";
import LeftAside from "../components/global/LeftAside";
import Nav from "../components/global/Nav";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trevor Danahy</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftAside />
      <main className={styles.main}>
        <Nav />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </main>
      <aside>right</aside>
    </div>
  );
}
