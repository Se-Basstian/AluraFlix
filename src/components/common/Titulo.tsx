import clsx from "clsx";
import type { FC } from "react";

interface Props {
  grupo: "front end" | "back end" | "innovación y gestión";
}

const TituloCategoria: FC<Props> = ({ grupo }) => {
  return (
    <h2
      className={clsx(
        "w-[fit-content] px-[17px] text-[3.2rem] font-extrabold",
        "uppercase  flex justify-center items-end border-b-4 border-solid ",
        "m940:w-auto m430:text-[2.4rem] cursor-default",
        {
          "text-[#6BD1FF] border-[#6BD1FF]": grupo === "front end",
          "text-[#00C86F] border-[#00C86F]": grupo === "back end",
          "text-[#FFBA05] border-[#FFBA05]": grupo === "innovación y gestión",
        }
      )}
    >
      {grupo}
    </h2>
  );
};

export default TituloCategoria;
