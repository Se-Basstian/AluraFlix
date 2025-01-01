import type { ChangeEvent } from "react";
import style from "./style_InputSelect.module.css";

interface Props {
  nombre: string;
  opciones: string[];
  className?: string[];
  valor: string;
  setValor: (valor: string) => void;
}

function InputSelect({ nombre, opciones, className, valor, setValor }: Props) {
  let i = 0;

  const cambioValor = (e: ChangeEvent<HTMLSelectElement>) => {
    setValor(e.target.value);
  };

  return (
    <label className={`${style.label} ${className?.join(" ")}`}>
      {nombre}
      <select
        required
        value={valor}
        onChange={cambioValor}
        className={style.select}
      >
        {opciones.map((opc) => {
          return (
            <option key={++i} value={opc.toLowerCase()}>
              {opc}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default InputSelect;
