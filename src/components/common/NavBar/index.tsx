import logo from "../../../assets/imgs/logo_AluraFlix.png";
import style from "./style_NavBar.module.css";
import Button from "../Button";
import { GrHomeRounded } from "react-icons/gr";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router";

function NavBar() {
  return (
    <nav className={style.nav}>
      <img className={style.img} src={logo} alt="Logo AluraFlix" />

      <div className={style.divGrupoBotones}>
        <Link to="/">
          <Button
            adaptable="header"
            valor="Home"
            startIcon={<GrHomeRounded className={style.home} />}
          />
        </Link>

        <Link to="/nuevo_video">
          <Button
            adaptable="header"
            valor="Nuevo Video"
            startIcon={<FiPlusCircle className={style.plus} />}
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
