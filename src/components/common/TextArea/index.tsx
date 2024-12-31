import style from "./style_TextArea.module.css";

interface Props {
  nombre: string;
  placeholder?: string;
  className?: string[];
}

function TextArea({ nombre, placeholder, className }: Props) {
  return (
    <label className={`${style.label} ${className?.join(" ")}`}>
      {nombre}
      <textarea className={style.textarea} placeholder={placeholder} />
    </label>
  );
}

export default TextArea;
