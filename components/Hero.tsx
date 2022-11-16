import Image from "next/image";
import React from "react";
import styles from "../styles/components/Hero.module.css";
import { skills } from "./constants/skills";
import profilePic from "../public/assets/profilePic.jpg";

type Props = {};

const skillsList = skills.map((skill) => {
  console.log(skill.logo);
  return (
    <div className={styles.langRow} key={skill.altTxt}>
      <Image
        src={skill.logo}
        alt={skill.altTxt}
        className={styles.langLogo}
        width={40}
        height={40}
      />
      {skill.skill}
    </div>
  );
});

const Hero = (props: Props) => {
  return (
    <section className={styles.hero}>
      <div className={styles.profile}>
        <Image
          src={profilePic}
          alt="Red Bearded Beautiful Dev"
          className={styles.profilePic}
        />
        <div className={styles.skillList}>{skillsList}</div>
      </div>
      <div className={styles.intro}>
        <h1>Hi, I&apos;m Trevor Danahy</h1>
        <h2>Fullstack Developer</h2>
        <h3>Check out some of my projects</h3>
      </div>
    </section>
  );
};

export default Hero;
