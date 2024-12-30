import style from "./style_Card.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

function BotonesCard() {
  return (
    <>
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
      >
        <AiFillEdit className={style.iconEditar} />
        Editar
      </button>
    </>
  );
}

export default BotonesCard;
