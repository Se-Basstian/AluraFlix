import { Link } from "react-router";
import type { Props } from "./index";
import clsx from "clsx";
import type { FC } from "react";

const Desktop: FC<Props> = ({ className = "", items }) => {
  let i = 0;
  return (
    <>
      {items.map((item) => (
        <Link
          className={clsx(
            "text-[2rem] transition ease-linear delay-75",
            "hover:scale-110 hover:text-sky-400",
            "m610:text-[1.75rem]",
            {
              "text-[#2271D1] font-semibold underline": item.seleccionado,
              "text-white": !item.seleccionado,
            },
            className
          )}
          key={++i}
          to={item.href}
        >
          {item.nombre}
        </Link>
      ))}
    </>
  );
};

export default Desktop;
