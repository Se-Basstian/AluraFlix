import Input from "../Input";
import InputSelect from "../InputSelect";
import TextArea from "../TextArea";
import Button from "../Button";
import style from "./style_EditarCard.module.css";
import type { datosFetch } from "../../../interfaces/Globales";
import { type FormEvent, useState } from "react";

function Form(videoDatos: datosFetch) {
  const [titulo, setTitulo] = useState(videoDatos.titulo);
  const [categoria, setCategoria] = useState(videoDatos.categoria);
  const [portada, setPortada] = useState(videoDatos.portada);
  const [video, setVideo] = useState(videoDatos.video);
  const [descripcion, setDescripcion] = useState(videoDatos.descripcion);

  const limpiarInputs = () => {
    setTitulo("");
    setCategoria("");
    setPortada("");
    setVideo("");
    setDescripcion("");
  };

  const actulizaDatos = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevosDatos: datosFetch = {
      titulo: titulo,
      categoria: categoria,
      portada: portada,
      video: video,
      descripcion: descripcion,
    };

    fetch(`http://localhost:3000/videos/${videoDatos.id ?? 1}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevosDatos),
    })
      .then((respuesta) => respuesta.json)
      .then(() => {
        alert("Actualizado");
      })
      .catch(() => {
        alert("No se pudo actualizar los datos");
      });
  };

  return (
    <form onSubmit={actulizaDatos} className={style.form}>
      <Input
        value={titulo}
        setValue={setTitulo}
        className={[style.inputs]}
        nombre="titulo"
      />
      <InputSelect
        valor={categoria}
        setValor={setCategoria}
        className={[style.inputs]}
        nombre="Categorías"
        opciones={["front-end", "back-end", "innovacion-gestion"]}
      />
      <Input
        value={portada}
        setValue={setPortada}
        className={[style.inputs]}
        nombre="Imagen"
      />
      <Input
        value={video}
        setValue={setVideo}
        className={[style.inputs]}
        nombre="Video"
      />
      <TextArea
        valor={descripcion}
        setValor={setDescripcion}
        className={[style.textArea]}
        nombre="Descripción"
      />

      <div className={style.divBotones}>
        <Button
          valor="Guardar"
          type="submit"
          activo
          onClick={() => {
            console.log(videoDatos.id);
          }}
        />
        <Button valor="Limpiar" onClick={limpiarInputs} />
      </div>
    </form>
  );
}

export default Form;
