import imgCard from "../../../assets/imgs/imgCard.png";
import style from "./style_Card.module.css";
import BotonesCard from "./BotonesCard";

interface Props {
  colorBorde: "front-end" | "back-end" | "inovacion-gestion";
  img?: string;
}

function Card({ img = imgCard, colorBorde }: Props) {
  return (
    <div className={[style.div, style[`colorBorde·${colorBorde}`]].join(" ")}>
      <img
        className={[style.img, style[`colorBorde·${colorBorde}`]].join(" ")}
        src={img}
        alt="Imagen del card"
      />
      <BotonesCard />
    </div>
  );
}

export default Card;
