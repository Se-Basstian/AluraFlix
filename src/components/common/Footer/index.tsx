import logoAlura from "../../../assets/imgs/logo_AluraFlix.png";
import style from "./style_Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <img className={style.img} src={logoAlura} alt="Logo de AluraFlix" />
    </footer>
  );
}

export default Footer;
