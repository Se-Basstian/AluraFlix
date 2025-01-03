import imgCard from "../../../assets/imgs/imgCard.png";
import style from "./style_Card.module.css";
import BotonesCard from "./BotonesCard";
import { Link } from "react-router";
import type { datosFetch } from "../../../interfaces/Globales";

interface Props {
  colorBorde: "front-end" | "back-end" | "innovacion-gestion";
  datosFetch?: datosFetch;
}

function Card({ datosFetch, colorBorde }: Props) {
  return (
    <div className={[style.div, style[`colorBorde·${colorBorde}`]].join(" ")}>
      <Link to={`/videos/${datosFetch?.id ?? 1}`}>
        <img
          className={[style.img, style[`colorBorde·${colorBorde}`]].join(" ")}
          src={datosFetch?.portada ?? imgCard}
          alt="Imagen del card"
        />
      </Link>
      <BotonesCard id={datosFetch?.id} />
    </div>
  );
}

export default Card;
