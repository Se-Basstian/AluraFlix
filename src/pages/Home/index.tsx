import GrupoCards from "../../components/common/GrupoCards";
import style from "./style_Home.module.css";

function Home() {
  return (
    <>
      <article className={style.article}>
        <GrupoCards titulo="Font End" colorBorde="front-end" />
        <GrupoCards titulo="Back End" colorBorde="back-end" />
        <GrupoCards
          titulo="Inovación y Gestión"
          colorBorde="inovacion-gestion"
        />
      </article>
    </>
  );
}

export default Home;
