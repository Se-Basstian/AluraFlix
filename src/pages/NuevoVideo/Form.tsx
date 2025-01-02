import style from "./style_NuevoVideo.module.css";
import Input from "../../components/common/Input";
import InputSelect from "../../components/common/InputSelect";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";
import { type FormEvent, useState, useContext } from "react";
import type { datosFetch } from "../../interfaces/Globales";
import { ContextosGlobales } from "../../utilidades/context";

function Form() {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState<string>();

  const limpiarInputs = () => {
    setTitulo("");
    setImagen("");
    setVideo("");
    setCategoria("");
    setDescripcion("");
  };

  const { DatosVideo } = useContext(ContextosGlobales);

  const enviarFormulario = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevoVideo: datosFetch = {
      titulo: titulo,
      portada: imagen,
      video: video,
      categoria: categoria,
      descripcion: descripcion !== undefined ? descripcion : "Sin descripción",
    };

    fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoVideo),
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos: datosFetch) => {
        DatosVideo.setValor([...DatosVideo.valor, datos]);
        alert("Nuevo video agregado correctamente.");
      })
      .catch((err) => {
        alert("Algo va mal");
        console.error("Error: ", err);
      });
  };

  return (
    <form onSubmit={enviarFormulario} className={style.form}>
      <div className={style.grupoInput}>
        <Input
          value={titulo}
          setValue={setTitulo}
          nombre="Título"
          placeholder="Ingrese el título"
        />
        <InputSelect
          valor={categoria}
          setValor={setCategoria}
          nombre="Categoría"
          opciones={["Front-End", "Back-End", "Innovacion-Gestion"]}
        />
      </div>

      <div className={style.grupoInput}>
        <Input
          value={imagen}
          setValue={setImagen}
          nombre="Imagen"
          placeholder="Ingrese el enlace de la imagen"
        />
        <Input
          value={video}
          setValue={setVideo}
          nombre="Video"
          placeholder="Ingrese el enlace del video"
        />
      </div>

      <TextArea
        valor={descripcion}
        setValor={setDescripcion}
        nombre="Descripción"
        placeholder="De que trata este video"
      />

      <div className={style.grupoBotones}>
        <Button type="submit" valor="Guardar" />
        <Button valor="Limpiar" onClick={limpiarInputs} />
      </div>
    </form>
  );
}

export default Form;
