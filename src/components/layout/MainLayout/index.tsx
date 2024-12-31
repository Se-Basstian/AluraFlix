import { Outlet } from "react-router";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import EditarCard from "../../common/EditarCard";
import style from "./style_MainLayout.module.css";

function MainLayout() {
  return (
    <>
      <EditarCard />
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
