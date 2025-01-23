import clsx from "clsx";
import {
  useContext,
  useEffect,
  useState,
  type FC,
  type MouseEvent,
} from "react";
import InputTexto from "../forms/InputText";
import InputSelect from "../forms/InputSelect";
import TextArea from "../forms/TextArea";
import Button from "../common/Button";
import imgCerrar from "../../assets/images/img-cerrar.png";
import { ContextoDatos } from "../../layouts/DefaultLayout";
import { API_VIDEOS } from "../../variablesGLobales";

type ClickButton = (evt: MouseEvent<HTMLButtonElement>) => void;

interface Video {
  id?: number;
  titulo: string;
  imagen: string;
  video: string;
  grupo: "front end" | "back end" | "innovación y gestión";
  descripcion: string;
}

const Editar: FC = () => {
  const { ID, verEditor } = useContext(ContextoDatos);

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState<
    "front end" | "back end" | "innovación y gestión"
  >("front end");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    fetch(`${API_VIDEOS}/${ID.valor}`)
      .then((respueta) => respueta.json())
      .then((dato: Video) => {
        setTitulo(dato.titulo);
        setCategoria(dato.grupo);
        setImagen(dato.imagen);
        setVideo(dato.video);
        setDescripcion(dato.descripcion);
      })
      .catch(() => console.log("Algo va mas"));
  }, [ID.valor]);

  const handleClickButtonClose: ClickButton = () => {
    verEditor.setValor(false);
  };

  const handleClickLimpiar: ClickButton = () => {
    setTitulo("");
    setCategoria("front end");
    setImagen("");
    setVideo("");
    setDescripcion("");
  };

  const handleClickActulizar: ClickButton = () => {
    const actulizadoDatos = {
      titulo: titulo,
      imagen: imagen,
      video: video,
      grupo: categoria,
      descripcion: descripcion || "Sin descripción",
    };

    fetch(`${API_VIDEOS}/${ID.valor}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(actulizadoDatos),
    })
      .then((respuesta) => {
        if (respuesta.ok) alert("Actualizado");
      })
      .catch((err) => {
        console.log("Algo salio mal:", err);
      });
  };

  return (
    <>
      <div
        className={clsx(
          "absolute top-0 left-0 w-full min-h-[500%] bg-[#000000a0]",
        )}
      />

      <article
        className={clsx(
          "absolute top-[70px] left-1/2 -translate-x-1/2 ",
          "w-[800px] min-h-[1000px] bg-[#03122F] px-[15px] py-[50px]",
          "border-4 border-solid border-[#6BD1FF] rounded-[20px]",
          "flex flex-col items-center justify-between gap-[30px]",
          "m940:w-[630px] m660:w-[340px]",
        )}
      >
        <button
          type="button"
          className={clsx(
            "transition",
            "absolute top-[10px] right-[10px] w-[52px]  hover:scale-110",
            "active:scale-100",
          )}
          onClick={handleClickButtonClose}
        >
          <img
            className={clsx("w-full aspect-square")}
            src={imgCerrar}
            alt="Boton cerrar"
          />
        </button>

        <h2
          className={clsx(
            "text-[6rem] text-[#2271D1] text-center font-bold uppercase",
            "w-[80%] m940:text-[4.7rem] m660:text-[3rem]",
          )}
        >
          Editar Card:
        </h2>

        <InputTexto
          titulo="Título"
          className="w-[80%] m940:w-[90%]"
          value={titulo}
          setValue={setTitulo}
        />
        <InputSelect
          titulo="Categoría"
          className="w-[80%] m940:w-[90%]"
          value={categoria}
          setValue={setCategoria}
        />
        <InputTexto
          titulo="Imagen"
          className="w-[80%] m940:w-[90%]"
          value={imagen}
          setValue={setImagen}
        />
        <InputTexto
          titulo="Video"
          className="w-[80%] m940:w-[90%]"
          value={video}
          setValue={setVideo}
        />
        <TextArea
          titulo="Descripción"
          className="w-[80%] m940:w-[90%] m660:w-full"
          value={descripcion}
          setValue={setDescripcion}
        />
        <div
          className={clsx(
            "flex justify-start items-center gap-[24px]",
            "w-4/5",
          )}
        >
          <Button color="#2271D1" onClick={handleClickActulizar}>
            Actulizar
          </Button>
          <Button onClick={handleClickLimpiar}>Limpiar</Button>
        </div>
      </article>
    </>
  );
};

export default Editar;
