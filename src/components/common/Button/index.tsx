import styles from "./styles.module.css";
import type { ReactNode } from "react";

interface Props {
  valor: string;
  startIcon?: ReactNode;
  activo?: boolean;
  adaptable?: "Libre" | "header" | "form";
  className?: string[];
  type?: "button" | "submit" | "reset";
}

function Button({
  activo,
  valor,
  startIcon,
  adaptable = "Libre",
  className,
  type = "button",
}: Props) {
  const clasesButton = () => {
    const clase: string[] = [];

    clase.push(styles.button);
    clase.push(styles[adaptable]);

    if (activo) clase.push(styles.activo);

    return clase.join(" ");
  };

  return (
    <button className={`${clasesButton()} ${className?.join(" ")}`} type={type}>
      {startIcon}
      {valor}
    </button>
  );
}

export default Button;
