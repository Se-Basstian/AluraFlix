import { Routes, Route } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="nuevo_video" element={<NuevoVideo />} />
      </Route>
    </Routes>
  );
}

export default App;
