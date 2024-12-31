import style from "./style_InputSelect.module.css";

interface Props {
  nombre: string;
  opciones: string[];
  className?: string[];
}

function InputSelect({ nombre, opciones, className }: Props) {
  let i = 0;
  return (
    <label className={`${style.label} ${className?.join(" ")}`}>
      {nombre}
      <select defaultValue={"No valido"} className={style.select}>
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
