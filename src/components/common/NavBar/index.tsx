import logo from "../../../assets/imgs/logo_AluraFlix.png";
import style from "./style_NavBar.module.css";
import Button from "../Button";

function NavBar() {
  return (
    <nav className={style.nav}>
      <img className={style.img} src={logo} alt="Logo AluraFlix" />

      <div className={style.divGrupoBotones}>
        <Button tipo="enlace" to="/" valor="Home" selecionado />
        <Button tipo="enlace" to="/nuevo" valor="Nuevo Video" />
      </div>
    </nav>
  );
}

export default NavBar;
