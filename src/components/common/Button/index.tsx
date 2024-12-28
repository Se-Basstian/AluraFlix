import styles from "./styles.module.css";
import type { ReactNode } from "react";

interface Props {
  valor: string;
  startIcon?: ReactNode;
  activo?: boolean;
}

function Button({ activo, valor, startIcon }: Props) {
  const clasesButton = () => {
    const clase: string[] = [];

    clase.push(styles.button);

    if (activo) clase.push(styles.activo);

    return clase.join(" ");
  };

  return (
    <button className={clasesButton()} type="button">
      {startIcon}
      {valor}
    </button>
  );
}

export default Button;
