import { Outlet } from "react-router";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import style from "./style_MainLayout.module.css";

function MainLayout() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
