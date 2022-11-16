import React from "react";
import styles from "../../styles/components/global/RAside.module.css";

type Props = {};

const copyToClipboard = () => {
  navigator.clipboard.writeText("trevor.danahy@gmail.com");
  alert("Email copied to clipboard");
};

const RightAside = (props: Props) => {
  return (
    <aside className={styles.rAside}>
      <div className={styles.bottomLine} />
      <button className={styles.email} onClick={copyToClipboard}>
        <p>trevor.danahy@gmail.com</p>
      </button>
    </aside>
  );
};

export default RightAside;
