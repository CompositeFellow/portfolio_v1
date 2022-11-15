import React from "react";
import styles from "../../styles/components/global/Logo.module.css";

type Props = {};
// const beard = "\}"

const Logo = (props: Props) => {
  return (
    <div className={styles.logo}>
      {/* char code for bracket */}
      <p className={styles.colorText}>&#123;</p>
      <p>-:</p>
    </div>
  );
};

export default Logo;
