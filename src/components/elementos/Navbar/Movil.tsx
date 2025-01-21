import { Link } from "react-router";
import type { Props } from "./index";
import clsx from "clsx";
import type { FC } from "react";

const Movil: FC<Props> = ({ className = "", items }) => {
  let i = 0;

  return (
    <>
      {items.map((item) => (
        <Link
          className={clsx(
            item.seleccionado && [
              "border-2 border-solid border-[#2271D1]",
              "rounded-full h-[50px] text-[1.85rem]",
              "text-[#2271D1] min-w-[155px] font-semibold px-[5px]",
            ],
            className
          )}
          key={++i}
          to={item.href}
        >
          <img
            className={clsx({
              "w-[35px]": item.seleccionado,
              "w-[50px]": !item.seleccionado,
            })}
            src={item.seleccionado ? item.imgActivo : item.img}
            alt="logo"
          />
          {item.seleccionado && item.nombre}
        </Link>
      ))}
    </>
  );
};

export default Movil;
