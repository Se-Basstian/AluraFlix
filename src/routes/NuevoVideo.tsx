import clsx from "clsx";
import {
  useContext,
  useState,
  type FC,
  type FormEvent,
  type MouseEvent,
} from "react";
import InputTexto from "../components/forms/InputText";
import InputSelect from "../components/forms/InputSelect";
import TextArea from "../components/forms/TextArea";
import Button from "../components/common/Button";
import { API_VIDEOS } from "../variablesGLobales";
import { ContextoDatos } from "../layouts/DefaultLayout";
interface Video {
  id: number;
  titulo: string;
  imagen: string;
  video: string;
  grupo: "front end" | "back end" | "innovación y gestión";
  descripcion: string;
}

type ClickBoton = (e: MouseEvent<HTMLButtonElement>) => void;

const NuevoVideo: FC = () => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState<
    "front end" | "back end" | "innovación y gestión"
  >("front end");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { datosVideo } = useContext(ContextoDatos);

  const handleClickLimpiar: ClickBoton = () => {
    setTitulo("");
    setCategoria("front end");
    setImagen("");
    setVideo("");
    setDescripcion("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      titulo: titulo,
      imagen: imagen,
      video: video,
      grupo: categoria,
      descripcion: descripcion || "Sin descripción",
    };

    fetch(API_VIDEOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((respusta) => respusta.json())
      .then((dato: Video) => {
        datosVideo.setValor([...datosVideo.valor, dato]);
        alert("Agregado con éxito");
      })
      .catch(() => alert("Algo salió mal"));
  };

  return (
    <>
      <div className={clsx("w-fit text-center mx-auto mt-[71px]")}>
        <h2 className={clsx("text-[6rem] uppercase m760:text-[4rem]")}>
          Nuevo Video
        </h2>
        <p className={clsx("text-[2rem] uppercase m760:text-[1.5rem]")}>
          Complete el formulario para crear una nueva tarjeta de video
        </p>
      </div>

      <section
        className={clsx("max-w-[90%] mx-auto mt-[47px] m760:max-w-full")}
      >
        <h3
          className={clsx(
            "text-white text-[3.6rem] m760:text-[2.8rem] font-semibold",
            "border-y-2 border-solid border-[#353535] py-[10px]",
          )}
        >
          Crear Tarjeta
        </h3>
        <form
          onSubmit={handleSubmit}
          className={clsx(
            "flex flex-col gap-[60px] py-[60px]",
            "m940:py-[30px] m760:gap-[10px]",
          )}
        >
          <div
            className={clsx(
              "flex justify-between gap-[20px] px-[60px] m940:px-[4px]",
              "m660:flex-col",
            )}
          >
            <InputTexto
              titulo="Título"
              placeholder="ingrese el título"
              className="w-[470px]"
              value={titulo}
              setValue={setTitulo}
            />
            <InputSelect
              titulo="Categoría"
              className="w-[470px]"
              value={categoria}
              setValue={setCategoria}
            />
          </div>

          <div
            className={clsx(
              "flex justify-between gap-[20px] px-[60px] m940:px-[4px]",
              "m660:flex-col",
            )}
          >
            <InputTexto
              titulo="Imagen"
              placeholder="ingrese el link de la imagen"
              className="w-[470px]"
              value={imagen}
              setValue={setImagen}
            />
            <InputTexto
              titulo="Video"
              placeholder="ingrese el link del video"
              className="w-[470px]"
              value={video}
              setValue={setVideo}
            />
          </div>

          <TextArea
            titulo="Descripción"
            placeholder="¿de qué trata este video?"
            className="max-w-[690px] px-[60px]"
            value={descripcion}
            setValue={setDescripcion}
          />

          <div
            className={clsx(
              "flex justify-start gap-[20px] px-[60px] m940:py-[10px]",
              "m940:justify-center m940:px-[4px]",
            )}
          >
            <Button type="submit" color="#2271D1">
              Guardar
            </Button>
            <Button onClick={handleClickLimpiar}>Limpiar</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NuevoVideo;
