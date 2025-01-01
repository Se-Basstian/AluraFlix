import type { ChangeEvent } from "react";
import style from "./style_Input.module.css";

interface Props {
  nombre: string;
  placeholder?: string;
  className?: string[];
  value: string;
  setValue: (valor: string) => void;
}

function Input({ nombre, placeholder, className, value, setValue }: Props) {
  const cambiarValor = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <label className={`${style.label} ${className?.join(" ")}`}>
      {nombre}
      <input
        required
        className={style.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={cambiarValor}
      />
    </label>
  );
}

export default Input;
