import GrupoCards from "../../components/common/GrupoCards";
import Banner from "../../components/common/Banner";
import style from "./style_Home.module.css";
import { fetchFrondEnd } from "../../services/Apis/fetchFrondEnd";

const datosApi = fetchFrondEnd("http://localhost:3000/front_end");

function Home() {
  const datos = datosApi.read();

  return (
    <>
      <Banner />
      <article className={style.article}>
        <GrupoCards titulo="Front End" colorBorde="front-end" datos={datos} />
        {/* <GrupoCards titulo="Back End" colorBorde="back-end" />
        <GrupoCards
          titulo="Inovación y Gestión"
          colorBorde="inovacion-gestion"
        /> */}
      </article>
    </>
  );
}

export default Home;
