import codigo from "../../assets/images/codigo.jpeg";
import clsx from "clsx";
import Titulo from "../common/Titulo";
import type { FC } from "react";

interface Props {
  grupo?: "front end" | "back end" | "innovación y gestión";
  titulo?: string;
  descripcion?: string;
  imagen?: {
    src: string;
    alt: string;
  };
}

const Banner: FC<Props> = ({
  grupo = "front end",
  titulo = "Challenge React",
  descripcion,
  imagen = { src: codigo, alt: "Una linda chica" },
}) => {
  return (
    <article
      className={clsx(
        "w-full h-[700px] flex justify-between items-center ",
        "gap-[20px] border-b-4 border-solid border-[#2271D1] mb-[10px]",
        " m760:flex m760:flex-col m760:gap-0 m760:justify-evenly",
        "fondo-banner",
      )}
    >
      <section className={clsx("min-h-[60%] m760:min-h-[33%]")}>
        <Titulo grupo={grupo} />
        <div className={clsx("w-[75%] mt-[30px] m940:w-full")}>
          <h3 className={clsx("text-[4.6rem] m760:text-[3.2rem]")}>{titulo}</h3>
          <p className={clsx("text-[1.8rem]")}>
            {descripcion ||
              `
              Este challenge es una forma de aprendizaje. Es un
              mecanismo donde podrás comprometerte en la
              resolución de un problema para poder aplicar
              todos los conocimientos adquiridos en la formación React.
              `}
          </p>
        </div>
      </section>
      <img
        className={clsx("h-[300px] m940:h-[230px] ")}
        src={imagen.src}
        alt={imagen.alt}
      />
    </article>
  );
};

export default Banner;
