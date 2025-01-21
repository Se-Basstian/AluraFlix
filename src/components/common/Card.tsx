import clsx from "clsx";
import imgPlay from "../../assets/images/img-play.png";
import imgPlayHover from "../../assets/images/img-play-hover.png";
import type { FC, MouseEvent } from "react";
import { useContext, useState } from "react";
import { ContextoDatos } from "../../routes/Home";
import { API_VIDEOS } from "../../variablesGLobales";
import { Link } from "react-router";

interface Props {
  id: number;
  imagen: {
    src?: string;
    alt?: string;
  };
  grupo?: "front end" | "back end" | "innovación y gestión";
  setValor?(valor: boolean): void;
}

type ClickButton = (evt: MouseEvent<HTMLButtonElement>) => void;

const Card: FC<Props> = ({ id, imagen, grupo = "front end", setValor }) => {
  const [play, setPlay] = useState(imgPlay);
  const datosContext = useContext(ContextoDatos);

  const handleClickEditar: ClickButton = () => {
    datosContext.ID.setValor(id);

    if (setValor) {
      setValor(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleClickBorrar: ClickButton = () => {
    fetch(`${API_VIDEOS}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => {
        if (respuesta.ok) alert("Borrado correctamente");
        datosContext.ID.setValor(0);
      })
      .catch(() => {
        alert("Algo salió mal");
      });
  };

  return (
    <div
      className={clsx(
        "min-w-[420px] h-[320px] rounded-[15px] bg-[#151a1f]",
        "border-2 border-solid ",
        "m940:min-w-[320px] m940:h-[280px]",
        "m430:min-w-[310px] ",
        {
          "border-[#6BD1FF]": grupo === "front end",
          "border-[#00C86F]": grupo === "back end",
          "border-[#FFBA05]": grupo === "innovación y gestión",
        },
      )}
    >
      <img
        className={clsx("w-full h-[260px] rounded-t-[15px] m940:h-[220px]")}
        src={imagen.src}
        alt={imagen.alt}
      />
      <div
        className={clsx(
          "w-full h-[60px] flex justify-around items-center",
          "border-t-2 border-solid h-[60px]",
          {
            "border-[#6BD1FF]": grupo === "front end",
            "border-[#00C86F]": grupo === "back end",
            "border-[#FFBA05]": grupo === "innovación y gestión",
          },
        )}
      >
        <button
          type="button"
          className={clsx(
            "cursor-pointer text-[1.6rem] hover:text-red-500 font-extrabold",
          )}
          onClick={handleClickBorrar}
        >
          Borrar
        </button>

        <Link to={`/reproducir/${id}`}>
          <img
            className={clsx(
              "w-[35px] transition ease-linear delay-75",
              "cursor-pointer hover:scale-110",
            )}
            onMouseEnter={() => setPlay(imgPlayHover)}
            onMouseLeave={() => setPlay(imgPlay)}
            src={play}
            alt="Play"
          />
        </Link>

        <button
          type="button"
          className={clsx(
            "text-[1.6rem] cursor-pointer font-extrabold hover:text-[yellow]",
          )}
          onClick={handleClickEditar}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default Card;
