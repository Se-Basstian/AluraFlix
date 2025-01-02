import style from "./style_EditarCard.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ContextosGlobales } from "../../../utilidades/context";
import Form from "./Form";
import { useContext, useEffect } from "react";

interface Props {
  id: number;
}

function EditarCard({ id }: Props) {
  const { EditarCard, DatosVideo } = useContext(ContextosGlobales);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={style.fondo} />
      <article className={style.article}>
        <IoMdCloseCircleOutline
          className={style.cerrar}
          onClick={() => {
            EditarCard.setValor(!EditarCard.valor);
          }}
        />
        <h3 className={style.h3}>Editar Card:</h3>
        <Form
          id={DatosVideo.valor[id].id}
          titulo={DatosVideo.valor[id].titulo}
          portada={DatosVideo.valor[id].portada}
          video={DatosVideo.valor[id].video}
          categoria={DatosVideo.valor[id].categoria}
          descripcion={DatosVideo.valor[id].descripcion}
        />
      </article>
    </>
  );
}

export default EditarCard;
