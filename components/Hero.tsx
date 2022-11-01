import React from "react";
import styles from "../styles/components/Hero.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={styles.hero}>
      <h1>Hi, I'm Trevor Danahy</h1>
      <h2>Fullstack Developer</h2>
      <h3>I'm Awesome</h3>
    </section>
  );
};

export default Hero;
