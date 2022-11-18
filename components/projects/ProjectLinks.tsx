import Image from "next/image";
import React from "react";
import styles from "../../styles/components/projects/ProjectLinks.module.css";

type Props = {
  live: boolean;
  url?: string;
  codeLink: string;
};

const ProjectLinks = ({ live, url, codeLink }: Props) => {
  return (
    <div className={styles.projectLinks}>
      {live ? (
        <a className={styles.link} href={url}>
          <Image
            src="/assets/icons/link.svg"
            alt="Project Link"
            width={32}
            height={32}
          />
        </a>
      ) : null}
      <a className={styles.link} href={codeLink}>
        <Image
          src="/assets/icons/githubIconWhite.svg"
          alt="Github icon"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default ProjectLinks;
