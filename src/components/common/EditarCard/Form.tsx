import Input from "../Input";
import InputSelect from "../InputSelect";
import TextArea from "../TextArea";
import Button from "../Button";
import style from "./style_EditarCard.module.css";
import type { datosFetch } from "../../../interfaces/Globales";

function Form(videoDatos: datosFetch) {
  return (
    <form className={style.form}>
      <Input
        value={videoDatos.titulo}
        setValue={() => {}}
        className={[style.inputs]}
        nombre="titulo"
      />
      <InputSelect
        valor={videoDatos.categoria}
        setValor={() => {}}
        className={[style.inputs]}
        nombre="Categorías"
        opciones={["front-end", "back-end", "innovacion-gestion"]}
      />
      <Input
        value={videoDatos.portada}
        setValue={() => {}}
        className={[style.inputs]}
        nombre="Imagen"
      />
      <Input
        value={videoDatos.video}
        setValue={() => {}}
        className={[style.inputs]}
        nombre="Video"
      />
      <TextArea
        valor={videoDatos.descripcion}
        setValor={() => {}}
        className={[style.textArea]}
        nombre="Descripción"
      />

      <div className={style.divBotones}>
        <Button valor="Guardar" activo />
        <Button valor="Limpiar" />
      </div>
    </form>
  );
}

export default Form;
