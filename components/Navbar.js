import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.navbar}>
        <Link href="/">
          <a className={navStyles.heading}>SPACEX-SHIPS</a>
        </Link>
        <Link href="/about">
          <a className={navStyles.navitem}>About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
