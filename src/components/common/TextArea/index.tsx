import type { ChangeEvent } from "react";
import style from "./style_TextArea.module.css";

interface Props {
  nombre: string;
  placeholder?: string;
  className?: string[];
  valor?: string;
  setValor: (valor: string) => void;
}

function TextArea({ nombre, placeholder, className, valor, setValor }: Props) {
  const cambiarValor = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValor(e.target.value);
  };

  return (
    <label className={`${style.label} ${className?.join(" ")}`}>
      {nombre}
      <textarea
        value={valor}
        onChange={cambiarValor}
        className={style.textarea}
        placeholder={placeholder}
      />
    </label>
  );
}

export default TextArea;
