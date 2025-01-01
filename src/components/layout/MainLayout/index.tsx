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

  const [datosVideos, setDatoVideos] = useState<datosFetch[]>([]);

  useEffect(() => {
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
  }, []);

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
        }}
      >
        {mostrarEditarCard && <EditarCard />}
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
