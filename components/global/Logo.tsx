import React from "react";
import styles from "../../styles/components/global/Logo.module.css";

type Props = {};
// const beard = "\}"

const Logo = (props: Props) => {
  return (
    <div className={styles.logo}>
      <p>. .</p>
      {/* char code for bracket */}
      <p className={styles.colorText}>&#125;</p>
    </div>
  );
};

export default Logo;
