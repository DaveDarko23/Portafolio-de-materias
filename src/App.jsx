import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

import "./App.css";
import RedesI from "./pages/RedesI";
import RedesII from "./pages/RedesII";
import RedesIII from "./pages/RedesIII";
import SistemasOperativos from "./pages/SistemasOperativos";

function App() {
  const so = "/sistemas-operativos/";

  return (
    <>
      <HashRouter>
        <Header />
        <section className="body">
          <Routes>
            <Route path="/redes-i" element={<RedesI />} />
            <Route path="/redes-ii" element={<RedesII />} />
            <Route path="/redes-iii" element={<RedesIII />} />

            {/* Sistemas operativos */}
            <Route path={so} element={<SistemasOperativos />} />
            <Route
              path={so + "kernel"}
              element={<SistemasOperativos tema="kernel" />}
            />
            <Route
              path={so + "windows"}
              element={<SistemasOperativos tema="windows" />}
            />
          </Routes>
        </section>
      </HashRouter>
    </>
  );
}

export default App;
