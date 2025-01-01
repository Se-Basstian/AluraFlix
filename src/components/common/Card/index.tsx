import imgCard from "../../../assets/imgs/imgCard.png";
import style from "./style_Card.module.css";
import BotonesCard from "./BotonesCard";
import type { datosFetch } from "../../../interfaces/Globales";

interface Props {
  colorBorde: "front-end" | "back-end" | "innovacion-gestion";
  datosFetch?: datosFetch;
}

function Card({ datosFetch, colorBorde }: Props) {
  return (
    <div className={[style.div, style[`colorBorde·${colorBorde}`]].join(" ")}>
      <img
        className={[style.img, style[`colorBorde·${colorBorde}`]].join(" ")}
        src={datosFetch?.portada ?? imgCard}
        alt="Imagen del card"
      />
      <BotonesCard id={datosFetch?.id} />
    </div>
  );
}

export default Card;
