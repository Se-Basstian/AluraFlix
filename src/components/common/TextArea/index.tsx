import style from "./style_TextArea.module.css";

interface Props {
  nombre: string;
  placeholder?: string;
}

function TextArea({ nombre, placeholder }: Props) {
  return (
    <label className={style.label}>
      {nombre}
      <textarea className={style.textarea} placeholder={placeholder} />
    </label>
  );
}

export default TextArea;
