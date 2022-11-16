import Image from "next/image";
import React from "react";
import styles from "../../styles/components/global/LAside.module.css";

type Props = {};

const LeftAside = (props: Props) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.leadingLine} />
      <div>
        <a href="https://github.com/CompositeFellow">
          <Image
            src="/assets/icons/githubIcon.svg"
            alt="Github Icon"
            className={styles.icon}
            width={40}
            height={40}
          />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/trevor-danahy-089ba8188/">
          <Image
            src="/assets/icons/linkedinIcon.svg"
            alt="LinkedIn Icon"
            className={styles.icon}
            width={40}
            height={40}
          />
        </a>
      </div>
    </aside>
  );
};

export default LeftAside;
