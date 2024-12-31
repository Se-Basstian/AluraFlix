import style from "./style_Card.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { ContextosGlobales } from "../../../utilidades/context";
import { useContext } from "react";

function BotonesCard() {
  const { EditarCard } = useContext(ContextosGlobales);

  return (
    <div className={style.divBotones}>
      <button
        className={[style.button, style.button·1].join(" ")}
        type="button"
      >
        <RiDeleteBin5Fill className={style.iconBorrar} />
        Borrar
      </button>
      <button
        className={[style.button, style.button·2].join(" ")}
        type="button"
        onClick={() => {
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
