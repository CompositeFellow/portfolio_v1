import Image from "next/image";
import React from "react";
import styles from "../styles/components/Hero.module.css";
import { skills, skillsArray } from "./constants/skills";
import profilePic from "../public/assets/profilePic.jpg";

type Props = {};

const skillsList = skillsArray.map((skill) => {
  console.log(skill.iconPath);
  return (
    <div className={styles.skillRow} key={skill.altTxt}>
      <Image
        src={skill.iconPath}
        alt={skill.altTxt}
        className={styles.skillIcon}
        width={40}
        height={40}
      />
      {skill.skill}
    </div>
  );
});

const Hero = (props: Props) => {
  console.log(skillsArray);
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
