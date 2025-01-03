import GrupoCards from "../../components/common/GrupoCards";
import Banner from "../../components/common/Banner";
import style from "./style_Home.module.css";
import { ContextosGlobales } from "../../utilidades/context";
import { useContext } from "react";

function Home() {
  const { DatosVideo } = useContext(ContextosGlobales);
  let numeroRandon: number;

  if (DatosVideo.valor.length === 0) {
    numeroRandon = -1;
  } else {
    numeroRandon = Math.floor(Math.random() * DatosVideo.valor.length - 1) + 1;
  }

  const renderCars = (
    categoria: "front-end" | "back-end" | "innovacion-gestion",
  ) => {
    switch (categoria) {
      case "front-end":
        return (
          <GrupoCards
            titulo="Font End"
            colorBorde={categoria}
            datos={DatosVideo.valor.filter(
              (video) => video.categoria === categoria,
            )}
          />
        );
      case "back-end":
        return (
          <GrupoCards
            titulo="Back End"
            colorBorde={categoria}
            datos={DatosVideo.valor.filter(
              (video) => video.categoria === categoria,
            )}
          />
        );
      case "innovacion-gestion":
        return (
          <GrupoCards
            titulo="Innovación y Gestión"
            colorBorde={categoria}
            datos={DatosVideo.valor.filter(
              (video) => video.categoria === categoria,
            )}
          />
        );
    }
  };

  return (
    <>
      <Banner
        titulo={
          numeroRandon === -1
            ? undefined
            : DatosVideo.valor[numeroRandon].titulo
        }
        img={
          numeroRandon === -1
            ? undefined
            : DatosVideo.valor[numeroRandon].portada
        }
      />
      <article className={style.article}>
        {renderCars("front-end")}
        {renderCars("back-end")}
        {renderCars("innovacion-gestion")}
      </article>
    </>
  );
}

export default Home;
