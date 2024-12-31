import style from "./style_Input.module.css";

interface Props {
  nombre: string;
  placeholder?: string;
  className?: string[];
}

function Input({ nombre, placeholder, className }: Props) {
  return (
    <label className={`${style.label} ${className?.join(" ")}`}>
      {nombre}
      <input className={style.input} type="text" placeholder={placeholder} />
    </label>
  );
}

export default Input;
