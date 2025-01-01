import Card from "../Card";
import style from "./style_GrupoCards.module.css";
import type { datosFetch } from "../../../interfaces/Globales";
import { Suspense } from "react";

interface Props {
  titulo: string;
  colorBorde: "front-end" | "back-end" | "inovacion-gestion";
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
        <Suspense fallback={<h2>Cangando datos...</h2>}>
          {datos.map((dato) => {
            return (
              <Card key={++i} img={dato.portada} colorBorde={colorBorde} />
            );
          })}
        </Suspense>
      </div>
    </section>
  );
}

export default GrupoCards;
