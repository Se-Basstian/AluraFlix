import Desktop from "./Desktop";
import Movil from "./Movil";
import clsx from "clsx";
import type { FC } from "react";

export interface Props {
  items: {
    href: string;
    nombre: string;
    seleccionado?: boolean;
    img: string;
    imgActivo: string;
  }[];
  className?: string;
}

const Navbar: FC<Props> = ({ items, className }) => {
  return (
    <nav
      className={clsx(
        "w-[385px] h-[54px] uppercase",
        "flex justify-around items-center",
        "m610:w-[233px] m430:w-full",
        className
      )}
    >
      <Desktop className="m430:hidden" items={items} />
      <Movil
        className="hidden  m430:flex m430:justify-evenly m430:items-center"
        items={items}
      />
    </nav>
  );
};

export default Navbar;
