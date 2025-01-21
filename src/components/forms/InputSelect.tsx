import clsx from "clsx";
import type { ChangeEvent, FC, FocusEvent } from "react";
import { useState } from "react";

interface Props {
  titulo?: string;
  opciones?: string[];
  className?: string;
  value?: string;
  setValue?(valor: "front end" | "back end" | "innovación y gestión"): void;
}

const InputSelect: FC<Props> = ({
  titulo = "Titulo",
  opciones = ["front end", "back end", "innovación y gestión"],
  className,
  value,
  setValue,
}) => {
  let i = 0;
  const [enFoco, setEnFoco] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (setValue)
      setValue(
        e.target.value as "front end" | "back end" | "innovación y gestión"
      );
  };
  const handleFocus = (e: FocusEvent<HTMLSelectElement>) => {
    setEnFoco(true);
  };
  const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
    setEnFoco(false);
  };

  return (
    <label
      className={clsx(
        className,
        "max-h-[108px] text-[2rem] font-semibold",
        "flex flex-col m760:text-[1.8rem] m610:w-full ",
        {
          "text-[#2271d1]": enFoco,
          "text-white": !enFoco,
        }
      )}
    >
      {titulo}
      <select
        className={clsx(
          "w-full h-[67px] px-[10px] rounded-lg  m760:h-[45px]",
          "border-2 border-solid border-[#353535]",
          "m760:h-[55px]"
        )}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      >
        {opciones.map((opc) => (
          <option key={++i} value={opc}>
            {opc.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
};

export default InputSelect;
