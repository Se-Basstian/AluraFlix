import styles from "./styles.module.css";
import type { ReactNode } from "react";

interface Props {
  valor: string;
  startIcon?: ReactNode;
  activo?: boolean;
  adaptable?: "Libre" | "header" | "form";
  className?: string[];
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function Button({
  activo,
  valor,
  startIcon,
  adaptable = "Libre",
  className,
  type = "button",
  onClick,
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
      type={type}
      onClick={onClick}
    >
      {startIcon}
      {valor}
    </button>
  );
}

export default Button;
