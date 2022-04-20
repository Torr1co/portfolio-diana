import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import scroll from "./Scroll";
import styles from "../styles/NavBar.module.scss";
const navNames = ["Sobre mi", "Proyectos", "Contacto"];

type navItemProps = {
  name: string;
};
const NavItem: NextPage<navItemProps> = ({ name }) => {
  return (
    <li>
      <Link href="#">
        <a
          className={`${styles.hoverLink} mr-14 font-medium  leading-3`}
          onClick={(e) => scroll(name, e)}
        >
          {name}
        </a>
      </Link>
    </li>
  );
};
const NavBar: NextPage = () => {
  return (
    <nav className=" fixed w-full flex px-24 py-7 justify-between items-center">
      <h1 className="text-xl font-semibold">Daiana</h1>
      <ul className="flex justify-end">
        {navNames.map((name) => (
          <NavItem name={name} key={name} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
