import GrupoCards from "../../components/common/GrupoCards";
import Banner from "../../components/common/Banner";
import style from "./style_Home.module.css";

function Home() {
  return (
    <>
      <Banner />
      <article className={style.article}>
        <GrupoCards titulo="Front End" colorBorde="front-end" />
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
