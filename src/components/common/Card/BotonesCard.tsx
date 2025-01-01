import style from "./style_Card.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { ContextosGlobales } from "../../../utilidades/context";
import { useContext } from "react";

interface Props {
  id: number | undefined;
}

function BotonesCard({ id }: Props) {
  const { EditarCard, DatosVideo, IdEditar } = useContext(ContextosGlobales);

  const eliminarCard = () => {
    if (id === undefined) {
      console.error("No se encontro id");
      return;
    }

    fetch(`http://localhost:3000/videos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respueata) => respueata.json())
      .then(() => {
        DatosVideo.setValor(
          DatosVideo.valor.filter((video) => video.id !== id),
        );

        alert("Eliminado exitoso");
      })

      .catch(() => {
        alert("No se pudo eliminar la tarjeta");
      });
  };

  return (
    <div className={style.divBotones}>
      <button
        className={[style.button, style.button·1].join(" ")}
        type="button"
        onClick={eliminarCard}
      >
        <RiDeleteBin5Fill className={style.iconBorrar} />
        Borrar
      </button>
      <button
        className={[style.button, style.button·2].join(" ")}
        type="button"
        onClick={() => {
          IdEditar.setvalor(id ?? 1);
          EditarCard.setValor(!EditarCard.valor);
        }}
      >
        <AiFillEdit className={style.iconEditar} />
        Editar
      </button>
    </div>
  );
}

export default BotonesCard;
