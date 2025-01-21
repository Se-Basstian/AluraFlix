import TituloCategoria from "../components/common/Titulo";
import clsx from "clsx";
import type { ReactNode } from "react";
import type { FC } from "react";

interface Props {
  grupo?: "front end" | "back end" | "innovación y gestión";
  children?: ReactNode;
}

const Categoria: FC<Props> = ({ grupo = "front end", children }) => {
  return (
    <section className={clsx("w-full min-h-[435px] mb-[90px] m430:mb-[20px]")}>
      <TituloCategoria grupo={grupo} />

      <div
        className={clsx(
          "mt-[40px] w-full h-[fit-content] py-[5px]",
          "overflow-x-scroll flex flex-wrap justify-around",
          "m1340:justify-start m1340:flex-nowrap  m1340:gap-[38px] gap-[15px]",
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Categoria;
