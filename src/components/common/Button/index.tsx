import { Link } from "react-router";
import styles from "./styles.module.css";

interface Props {
  tipo?: "normal" | "enlace";
  to?: string;
  valor: string;
  selecionado?: boolean;
}

function Button({ tipo = "normal", valor, to = "", selecionado }: Props) {
  const clasesButton = () => {
    const clase: string[] = [];

    clase.push(styles.button);

    if (selecionado) clase.push(styles.seleccionado);

    return clase.join(" ");
  };

  return (
    <button className={clasesButton()} type="button">
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
