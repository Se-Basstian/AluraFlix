import style from "./style_InputSelect.module.css";

interface Props {
  nombre: string;
  opciones: string[];
}

function InputSelect({ nombre, opciones }: Props) {
  let i = 0;
  return (
    <label className={style.label}>
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
