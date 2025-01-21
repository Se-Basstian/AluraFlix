import { Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./routes/Home";
import NuevoVideo from "./routes/NuevoVideo";
import Repoductor from "./routes/Reproductor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/nuevo-video" element={<NuevoVideo />} />
        <Route path="/reproducir/:id" element={<Repoductor />} />
      </Route>
    </Routes>
  );
}

export default App;
