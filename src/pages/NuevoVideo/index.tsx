import style from "./style_NuevoVideo.module.css";
import Input from "../../components/common/Input";
import InputSelect from "../../components/common/InputSelect";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";

function NuevoVideo() {
  return (
    <article className={style.article}>
      <h2 className={style.h2}>Nuevo Video</h2>

      <p className={style.p}>
        Complete el formulario para crear una nueva tarjeta de video
      </p>

      <div className={style.div}>
        <h3 className={style.h3}>Crear Tarjeta</h3>

        <form className={style.form}>
          <div className={style.grupoInput}>
            <Input nombre="Título" placeholder="Ingrese el título" />
            <InputSelect
              nombre="Categoría"
              opciones={["Front end", "Back end"]}
            />
          </div>

          <div className={style.grupoInput}>
            <Input
              nombre="Imagen"
              placeholder="Ingrese el enlace de la imagen"
            />
            <Input nombre="Video" placeholder="Ingrese el enlace del video" />
          </div>

          <TextArea
            nombre="Descripción"
            placeholder="De que trata este video"
          />

          <div className={style.grupoBotones}>
            <Button valor="Guardar" />
            <Button valor="Limpiar" />
          </div>
        </form>
      </div>
    </article>
  );
}

export default NuevoVideo;
