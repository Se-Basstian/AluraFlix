import { Outlet } from "react-router";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import EditarCard from "../../common/EditarCard";
import { ContextosGlobales } from "../../../utilidades/context";
import type { datosFetch } from "../../../interfaces/Globales";
import style from "./style_MainLayout.module.css";
import { useState, useEffect } from "react";

function MainLayout() {
  const [mostrarEditarCard, setMostrarEditarCard] = useState(false);
  const [idEditar, setIdEditar] = useState(0);
  const [datosVideos, setDatoVideos] = useState<datosFetch[]>([]);

  useEffect(() => {
    console.log(mostrarEditarCard ? "Abrinedo Editor" : "Cerrando editor");

    fetch("http://localhost:3000/videos")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos: datosFetch[]) => {
        setDatoVideos(datos);
      })
      .catch((err: Error) => {
        console.error("No se puede cargar los datos:", err);
      });
  }, [mostrarEditarCard]);

  return (
    <>
      <ContextosGlobales.Provider
        value={{
          EditarCard: {
            valor: mostrarEditarCard,
            setValor: setMostrarEditarCard,
          },
          DatosVideo: {
            valor: datosVideos,
            setValor: setDatoVideos,
          },
          IdEditar: {
            valor: idEditar,
            setvalor: setIdEditar,
          },
        }}
      >
        {mostrarEditarCard && <EditarCard id={idEditar - 1} />}
        <Header />
        <main className={style.main}>
          <Outlet />
        </main>
        <Footer />
      </ContextosGlobales.Provider>
    </>
  );
}

export default MainLayout;
