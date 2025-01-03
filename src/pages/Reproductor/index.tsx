import { useParams } from "react-router";
import { ContextosGlobales } from "../../utilidades/context";
import style from "./style_Reproductor.module.css";
import { useContext } from "react";

function Reproductor() {
  const paramId = useParams().id;
  const { DatosVideo } = useContext(ContextosGlobales);

  const datoVideo = DatosVideo.valor[Number(paramId) - 1];

  return (
    <article className={style.article}>
      <h2 className={style.h2}>{datoVideo.titulo} </h2>
      <iframe
        className={style.iframe}
        src={datoVideo.video}
        title={datoVideo.titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <section className={style.section}>
        <h3 className={style.h3}>Descripción</h3>
        <p className={style.p}>{datoVideo.descripcion}</p>
      </section>
    </article>
  );
}

export default Reproductor;
