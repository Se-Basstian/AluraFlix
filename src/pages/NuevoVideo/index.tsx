import style from "./style_NuevoVideo.module.css";
import Form from "./Form";

function NuevoVideo() {
  return (
    <article className={style.article}>
      <h2 className={style.h2}>Nuevo Video</h2>

      <p className={style.p}>
        Complete el formulario para crear una nueva tarjeta de video
      </p>

      <div className={style.div}>
        <h3 className={style.h3}>Crear Tarjeta</h3>
        <Form />
      </div>
    </article>
  );
}

export default NuevoVideo;
