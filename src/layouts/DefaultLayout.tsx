import clsx from "clsx";
import Navbar from "../components/elementos/Navbar";
import Footer from "../components/elementos/Footer";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import type { FC } from "react";
import logoAluraFlix from "../assets/images/logo-AluraFlix.png";
import logoHome from "../assets/images/logo-home.png";
import logoHomeActivo from "../assets/images/logo-home-activo.png";
import logoMas from "../assets/images/logo-mas.png";
import logoMasActivo from "../assets/images/logo-mas-activo.png";
import { useEffect, createContext, useState } from "react";
import { API_VIDEOS } from "../variablesGLobales";

interface Video {
  id: number;
  titulo: string;
  imagen: string;
  video: string;
  grupo: "front end" | "back end" | "innovación y gestión";
  descripcion: string;
}

export const ContextoDatos = createContext(
  {} as {
    ID: {
      valor: number;
      setValor(valor: number): void;
    };
    datosVideo: {
      valor: Video[];
      setValor(valor: Video[]): void;
    };
    verEditor: { valor: boolean; setValor(valor: boolean): void };
  },
);

const DefaultLayout: FC = () => {
  const location = useLocation();
  const [datosVideo, setDatosVideo] = useState<Video[]>([]);
  const [buscaID, setBuscaID] = useState(0);
  const [verEditar, setVerEditar] = useState(false);

  useEffect(() => {
    console.log(`ID de buca: ${buscaID}`);
    console.log("Edito abierto:", verEditar);

    fetch(API_VIDEOS)
      .then((resputa) => resputa.json())
      .then((datos: Video[]) => {
        setDatosVideo(datos);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [buscaID, verEditar]);

  return (
    <ContextoDatos.Provider
      value={{
        ID: { valor: buscaID, setValor: setBuscaID },
        datosVideo: { valor: datosVideo, setValor: setDatosVideo },
        verEditor: { valor: verEditar, setValor: setVerEditar },
      }}
    >
      <header className={clsx("w-full m430:fixed bottom-0 bg-[#151a1f]")}>
        <section
          className={clsx(
            "max-w-[1400px] h-[125px] px-[20px]",
            "flex justify-around items-center",
            "border-b-4 border-[#2271D1]",
            "m430:border-b-0 m430:h-[98px] m430:border-t-4",
          )}
        >
          <img
            className={clsx(
              "w-[168px] h-[40px]",
              "m610:w-[130px] m610:h-[24px] m430:hidden",
            )}
            src={logoAluraFlix}
            alt="Logo de AluraFlix"
          />

          <Navbar
            items={[
              {
                href: "/",
                nombre: "Home",
                seleccionado: location.pathname === "/",
                img: logoHome,
                imgActivo: logoHomeActivo,
              },
              {
                href: "/nuevo-video",
                nombre: "Nuevo Video",
                seleccionado: location.pathname === "/nuevo-video",
                img: logoMas,
                imgActivo: logoMasActivo,
              },
            ]}
          />
        </section>
      </header>

      <main className={clsx("max-w-[1400px] px-[20px]")}>
        <Outlet />
      </main>
      <Footer />
    </ContextoDatos.Provider>
  );
};

export default DefaultLayout;
