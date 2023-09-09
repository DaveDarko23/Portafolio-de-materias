import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

import "./App.css";
import RedesI from "./pages/RedesI";
import RedesII from "./pages/RedesII";
import RedesIII from "./pages/RedesIII";
import SistemasOperativos from "./pages/SistemasOperativos";
import Kernal from "./pages/SistemasOperativos/Kernal";
import Windows from "./pages/SistemasOperativos/Windows";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <section className="body">
          <Routes>
            <Route path="/redes-i" element={<RedesI />}></Route>
            <Route path="/redes-ii" element={<RedesII />}></Route>
            <Route path="/redes-iii" element={<RedesIII />}></Route>

            {/* Sistemas operativos */}
            <Route
              path="/sistemas-operativos"
              element={<SistemasOperativos />}
            ></Route>
            <Route
              path="/sistemas-operativos/info"
              element={<Kernal />}
            ></Route>
            <Route
              path="/sistemas-operativos/windows"
              element={<Windows />}
            ></Route>
          </Routes>
        </section>
      </HashRouter>
    </>
  );
}

export default App;
