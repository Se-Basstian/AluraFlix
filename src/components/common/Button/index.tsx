import styles from "./styles.module.css";
import type { ReactNode } from "react";

interface Props {
  valor: string;
  startIcon?: ReactNode;
  activo?: boolean;
  adaptable?: "Libre" | "header" | "form";
  className?: string[];
}

function Button({
  activo,
  valor,
  startIcon,
  adaptable = "Libre",
  className,
}: Props) {
  const clasesButton = () => {
    const clase: string[] = [];

    clase.push(styles.button);
    clase.push(styles[adaptable]);

    if (activo) clase.push(styles.activo);

    return clase.join(" ");
  };

  return (
    <button
      className={`${clasesButton()} ${className?.join(" ")}`}
      type="button"
    >
      {startIcon}
      {valor}
    </button>
  );
}

export default Button;
