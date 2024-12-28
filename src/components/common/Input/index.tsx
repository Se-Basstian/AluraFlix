import style from "./style_Input.module.css";

interface Props {
  nombre: string;
  placeholder?: string;
}

function Input({ nombre, placeholder }: Props) {
  return (
    <label className={style.label}>
      {nombre}
      <input className={style.input} type="text" placeholder={placeholder} />
    </label>
  );
}

export default Input;
