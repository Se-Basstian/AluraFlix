import Input from "../Input";
import InputSelect from "../InputSelect";
import TextArea from "../TextArea";
import Button from "../Button";
import style from "./style_EditarCard.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

function EditarCard() {
  return (
    <>
      <div className={style.fondo} />
      <article className={style.article}>
        <IoMdCloseCircleOutline className={style.cerrar} />
        <h3 className={style.h3}>Editar Card:</h3>

        <form className={style.form}>
          <Input className={[style.inputs]} nombre="titulo" />
          <InputSelect
            className={[style.inputs]}
            nombre="Categorías"
            opciones={["front-end", "back-end"]}
          />
          <Input className={[style.inputs]} nombre="Imagen" />
          <Input className={[style.inputs]} nombre="Video" />
          <TextArea className={[style.textArea]} nombre="Descripción" />

          <div className={style.divBotones}>
            <Button valor="Guardar" activo />
            <Button valor="Limpiar" />
          </div>
        </form>
      </article>
    </>
  );
}

export default EditarCard;
