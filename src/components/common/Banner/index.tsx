import style from "./style_Banner.module.css";
import imgCard from "../../../assets/imgs/imgCard.png";
// import fondoBanner from "../../../assets/imgs/fondo_banner.jpg";

interface Props {
  titulo?: string;
  img?: string;
}

function Banner({ titulo = "Titulo", img = imgCard }: Props) {
  return (
    <article className={style.article}>
      <div className={style.div}>
        <h2 className={style.h2}>{titulo}</h2>
        <h3 className={style.h3}>Challenge React</h3>
        <p className={style.p}>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <img className={style.img} src={img} alt="Ejemplo de las catergorías" />
    </article>
  );
}

export default Banner;
