import { Outlet } from "react-router";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import EditarCard from "../../common/EditarCard";
import { ContextosGlobales } from "../../../utilidades/context";
import style from "./style_MainLayout.module.css";
import { useState } from "react";

function MainLayout() {
  const [mostrarEditarCard, setMostrarEditarCard] = useState(false);

  return (
    <>
      <ContextosGlobales.Provider
        value={{
          EditarCard: {
            valor: mostrarEditarCard,
            setValor: setMostrarEditarCard,
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
