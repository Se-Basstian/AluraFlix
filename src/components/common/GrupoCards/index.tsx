import Card from "../Card";
import style from "./style_GrupoCards.module.css";
import type { datosFetch } from "../../../interfaces/Globales";

interface Props {
  titulo: string;
  colorBorde: "front-end" | "back-end" | "innovacion-gestion";
  datos: datosFetch[];
}

function GrupoCards({ titulo, colorBorde, datos }: Props) {
  let i = 0;
  return (
    <section className={style.section}>
      <h3 className={[style.h3, style[`h3Color·${colorBorde}`]].join(" ")}>
        {titulo}
      </h3>
      <div className={style.divCards}>
        {datos.map((dato) => {
          return <Card key={++i} datosFetch={dato} colorBorde={colorBorde} />;
        })}
      </div>
    </section>
  );
}

export default GrupoCards;
