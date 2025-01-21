import clsx from "clsx";
import Categoria from "../layouts/Categoria";
import Card from "../components/common/Card";
import { useContext, type FC } from "react";
import Banner from "../components/elementos/Banner";
import Editar from "../components/elementos/Editar";
import { ContextoDatos } from "../layouts/DefaultLayout";

const Home: FC = () => {
  const { datosVideo, verEditor } = useContext(ContextoDatos);

  return (
    <>
      <Banner />
      <article
        className={clsx(
          "w-full border-t-4  border-solid border-[#2271D1]  pt-[80px]",
        )}
      >
        <Categoria grupo="front end">
          {datosVideo.valor
            .filter((dato) => dato.grupo === "front end")
            .map((dato) => (
              <Card
                key={`${dato.id}::${dato.grupo}`}
                id={dato.id}
                imagen={{
                  src: dato.imagen,
                  alt: dato.titulo,
                }}
                grupo={dato.grupo}
              />
            ))}
        </Categoria>

        <Categoria grupo="back end">
          {datosVideo.valor
            .filter((dato) => dato.grupo === "back end")
            .map((dato) => (
              <Card
                key={`${dato.id}::${dato.grupo}`}
                id={dato.id}
                imagen={{
                  src: dato.imagen,
                  alt: dato.titulo,
                }}
                grupo={dato.grupo}
              />
            ))}
        </Categoria>

        <Categoria grupo="innovación y gestión">
          {datosVideo.valor
            .filter((dato) => dato.grupo === "innovación y gestión")
            .map((dato) => (
              <Card
                key={`${dato.id}::${dato.grupo}`}
                id={dato.id}
                imagen={{
                  src: dato.imagen,
                  alt: dato.titulo,
                }}
                grupo={dato.grupo}
              />
            ))}
        </Categoria>
      </article>

      {verEditor.valor && <Editar />}
    </>
  );
};

export default Home;
