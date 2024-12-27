import logo from "../../../assets/imgs/logo_AluraFlix.png";
import style from "./style_NavBar.module.css";
import Button from "../Button";
import { GrHomeRounded } from "react-icons/gr";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";

function NavBar() {
  const [cambio, setCambio] = useState(true);
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setAnchoVentana(window.innerWidth);
  });

  return (
    <nav className={style.nav}>
      <img className={style.img} src={logo} alt="Logo AluraFlix" />

      <div className={style.divGrupoBotones}>
        {cambio && anchoVentana <= 470 ? (
          <GrHomeRounded
            className={[style.homeSolo, style.activo].join(" ")}
            onClick={() => {
              setCambio(!cambio);
            }}
          />
        ) : (
          <Button
            tipo="enlace"
            to="/"
            valor="Home"
            startIcon={<GrHomeRounded className={style.home} />}
            selecionado={!cambio}
            onClick={() => {
              setCambio(!cambio);
            }}
          />
        )}

        {!cambio && anchoVentana <= 470 ? (
          <FiPlusCircle
            className={[style.plusSolo, cambio && style.activo].join(" ")}
            onClick={() => {
              setCambio(!cambio);
            }}
          />
        ) : (
          <Button
            tipo="enlace"
            to="/"
            valor="Nuevo Video"
            startIcon={<FiPlusCircle className={style.plus} />}
            selecionado={cambio}
            onClick={() => {
              setCambio(!cambio);
            }}
          />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
