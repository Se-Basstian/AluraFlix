import clsx from "clsx";
import type { FC, ChangeEvent } from "react";
import { useState } from "react";

interface Props {
  titulo?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  setValue?(valor: string): void;
}

const TextArea: FC<Props> = ({
  titulo = "Titulo",
  placeholder,
  className,
  value,
  setValue,
}) => {
  const [colorTitulo, setColorTitulo] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (setValue) setValue(e.target.value);
  };

  const handleFocus = () => {
    setColorTitulo(true);
  };
  const handleBlur = () => {
    setColorTitulo(false);
  };

  return (
    <label
      className={clsx(
        className,
        "text-[2rem] font-semibold",
        "m940:px-[4px] flex flex-col m760:text-[1.8rem]",
        {
          "text-white": !colorTitulo,
          "text-[#2271D1]": colorTitulo,
        },
      )}
    >
      {titulo}
      <textarea
        className={clsx(
          "w-full min-h-[266px] grow outline-none",
          "rounded-lg resize-none p-[10px]",
          "focus:border-2 focus:border-solid focus:border-[#2271D1]",
          "focus:text-[#2271D1]",
          "border-2 border-solid border-[#353535]",
        )}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default TextArea;
