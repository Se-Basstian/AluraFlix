import NavBar from "../NavBar";
import style from "./style_Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <NavBar />
    </header>
  );
}

export default Header;
