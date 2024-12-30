import Card from "../Card";
import style from "./style_GrupoCards.module.css";

interface Props {
  titulo: string;
  colorBorde: "front-end" | "back-end" | "inovacion-gestion";
}

function GrupoCards({ titulo, colorBorde }: Props) {
  return (
    <section className={style.section}>
      <h3 className={[style.h3, style[`h3Color·${colorBorde}`]].join(" ")}>
        {titulo}
      </h3>
      <div className={style.divCards}>
        <Card colorBorde={colorBorde} />
        <Card colorBorde={colorBorde} />
        <Card colorBorde={colorBorde} />
        <Card colorBorde={colorBorde} />
      </div>
    </section>
  );
}

export default GrupoCards;
