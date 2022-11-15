import React from "react";
import styles from "../styles/components/Hero.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={styles.hero}>
      <div className={styles.profile}>
        <img
          src="./assets/profilePic.jpg"
          alt="Red Bearded Beautiful Dev"
          className={styles.profilePic}
        />
        <div className={styles.langList}>
          <div className={styles.langRow}>
            <img
              src="./assets/langLogos/tsLogo.png"
              alt="Typescript Logo"
              className={styles.langLogo}
            />
            Typescript
          </div>
          <div className={styles.langRow}>
            <img
              src="./assets/langLogos/jsLogo.png"
              alt="Javascript Logo"
              className={styles.langLogo}
            />
            Javascript
          </div>
          <div className={styles.langRow}>
            <img
              src="./assets/langLogos/pythonLogo.png"
              alt="Python Logo"
              className={styles.langLogo}
            />
            Python
          </div>
          <div className={styles.langRow}>
            <img
              src="./assets/langLogos/reactLogo.png"
              alt="React Logo"
              className={styles.langLogo}
            />
            React
          </div>
          <div className={styles.langRow}>
            <img
              src="./assets/langLogos/nextLogo.png"
              alt="NextJS Logo"
              className={styles.langLogo}
            />
            Next.JS
          </div>
        </div>
      </div>
      <div className={styles.intro}>
        <h1>Hi, I'm Trevor Danahy</h1>
        <h2>Fullstack Developer</h2>
        <h3>Check out some of my projects</h3>
      </div>
    </section>
  );
};

export default Hero;
