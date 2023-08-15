import { ReactElement } from "react";
import header from "./Header.module.css";
import Person from "../../interfaces/person";
import Navbar from "./../Navbar/nav";
const Header = (props: Person): ReactElement => {
  return (
    <header className={header.settings}>
      <Navbar />
    </header>
    // <h1 className={header.settings}>Header {props.name} {props.age}</h1>
  );
};
export default Header;
