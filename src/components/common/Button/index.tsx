import { Link } from "react-router";
import styles from "./styles.module.css";
import type { ReactNode } from "react";
// import { RiHomeLine } from "react-icons/ri";

interface Props {
  tipo?: "normal" | "enlace";
  to?: string;
  valor: string;
  selecionado?: boolean;
  startIcon?: ReactNode;
  onClick: () => void;
}

function Button({
  tipo = "normal",
  valor,
  to = "",
  selecionado,
  startIcon,
  onClick,
}: Props) {
  const clasesButton = () => {
    const clase: string[] = [];

    clase.push(styles.button);

    if (selecionado) clase.push(styles.activo);

    return clase.join(" ");
  };

  return (
    <button className={clasesButton()} type="button" onClick={onClick}>
      {startIcon}
      {tipo !== "enlace" ? (
        valor
      ) : (
        <Link className={styles.link} to={to}>
          {valor}
        </Link>
      )}
    </button>
  );
}

export default Button;
