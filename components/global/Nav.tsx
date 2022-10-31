import Link from "next/link";
import React from "react";
import styles from "../../styles/components/global/Nav.module.css";

type NavLinkProps = {
  name: string;
  href: string;
};

const NavLink = ({ name, href }: NavLinkProps) => {
  return (
    <Link className={styles.link} href={href}>
      {name}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink href="/#projects" name="Projects" />
      <NavLink href="/#experience" name="Experience" />
      <NavLink href="/#about" name="About" />
    </nav>
  );
};

export default Nav;
