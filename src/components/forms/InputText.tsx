import clsx from "clsx";
import type { ChangeEvent, FC, FocusEvent } from "react";
import { useState } from "react";

interface Props {
  titulo?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  setValue?(valor: string): void;
}

const InputTexto: FC<Props> = ({
  titulo = "Titulo",
  placeholder,
  className,
  value,
  setValue,
}) => {
  const [enFoco, setEnFoco] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) setValue(e.target.value);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setEnFoco(true);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setEnFoco(false);
  };

  return (
    <label
      className={clsx(
        "max-h-[108px] text-[2rem] font-semibold",
        "flex flex-col m760:text-[1.8rem]  m610:w-full ",
        {
          "text-[#2271d1]": enFoco,
          "text-white": !enFoco,
        },
        className
      )}
    >
      {titulo}
      <input
        className={clsx(
          "w-full h-[66px] placeholder:text-[#A5A5A5] my-outline-none rounded-lg",
          "px-[10px] focus:border-2 focus:border-solid focus:border-[#2271D1]",
          "focus:text-[#2271d1] border-2 border-solid border-[#353535]",
          "m760:h-[55px] outline-none"
        )}
        type="text"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default InputTexto;
