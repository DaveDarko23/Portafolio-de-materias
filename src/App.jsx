import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

import "./App.css";
import PrimerParcial from "./pages/PrimerParcial";
import SegundoParcial from "./pages/SegundoParcial";
import TercerParcial from "./pages/TercerParcial";

function App() {
  const P1 = "/primer-parcial/";
  const P2 = "/segundo-parcial/";
  const P3 = "/tercer-parcial/";

  return (
    <>
      <BrowserRouter>
        <Header />
        <section className="body">
          <Routes>
            {/*  ****************************************************** Primer Parcial */}
            <Route path={"/"} element={<PrimerParcial />} />
            <Route path={P1} element={<PrimerParcial />} />
            <Route
              path={P1 + "introduccion"}
              element={<PrimerParcial tema="introduccion" />}
            />
            <Route
              path={P1 + "definicion"}
              element={<PrimerParcial tema="definicion" />}
            />
            <Route
              path={P1 + "evolucion"}
              element={<PrimerParcial tema="evolucion" />}
            />
            <Route
              path={P1 + "estructuraMonolitica"}
              element={<PrimerParcial tema="estructuraMonolitica" />}
            />
            <Route
              path={P1 + "estructuraJerarquica"}
              element={<PrimerParcial tema="estructuraJerarquica" />}
            />
            <Route
              path={P1 + "estructuraVirtual"}
              element={<PrimerParcial tema="estructuraVirtual" />}
            />
            <Route
              path={P1 + "estructuraServidor"}
              element={<PrimerParcial tema="estructuraServidor" />}
            />
            <Route
              path={P1 + "servicioUsuario"}
              element={<PrimerParcial tema="servicioUsuario" />}
            />
            <Route
              path={P1 + "servicioTarea"}
              element={<PrimerParcial tema="servicioTarea" />}
            />
            <Route
              path={P1 + "servicioProceso"}
              element={<PrimerParcial tema="servicioProceso" />}
            />
            <Route
              path={P1 + "soRed"}
              element={<PrimerParcial tema="soRed" />}
            />
            <Route
              path={P1 + "soDistribuido"}
              element={<PrimerParcial tema="soDistribuido" />}
            />
            <Route
              path={P1 + "arranqueComputadora"}
              element={<PrimerParcial tema="arranqueComputadora" />}
            />
            <Route
              path={P1 + "arranqueHardware"}
              element={<PrimerParcial tema="arranqueHardware" />}
            />
            <Route
              path={P1 + "ubicacionSO"}
              element={<PrimerParcial tema="ubicacionSO" />}
            />
            <Route
              path={P1 + "arranqueSO"}
              element={<PrimerParcial tema="arranqueSO" />}
            />
            <Route
              path={P1 + "paradasSO"}
              element={<PrimerParcial tema="paradasSO" />}
            />
            <Route
              path={P1 + "caidasSO"}
              element={<PrimerParcial tema="caidasSO" />}
            />
            {/*  ****************************************************** Segundo Parcial */}
            <Route path={P2} element={<SegundoParcial />} />
            <Route
              path={P2 + "adProcesos"}
              element={<SegundoParcial tema="adProcesos" />}
            />
            <Route
              path={P2 + "adHilos"}
              element={<SegundoParcial tema="adHilos" />}
            />
            <Route
              path={P2 + "adJerarquia"}
              element={<SegundoParcial tema="adJerarquia" />}
            />
            <Route
              path={P2 + "adLlamadas"}
              element={<SegundoParcial tema="adLlamadas" />}
            />
            <Route
              path={P2 + "adPlanificacion"}
              element={<SegundoParcial tema="adPlanificacion" />}
            />
            <Route
              path={P2 + "ArchivosConcepto"}
              element={<SegundoParcial tema="ArchivosConcepto" />}
            />
            <Route
              path={P2 + "ArchivosOrganizacion"}
              element={<SegundoParcial tema="ArchivosOrganizacion" />}
            />
            <Route
              path={P2 + "ArchivosEstructura"}
              element={<SegundoParcial tema="ArchivosEstructura" />}
            />
            <Route
              path={P2 + "MemoriaFuncion"}
              element={<SegundoParcial tema="MemoriaFuncion" />}
            />
            <Route
              path={P2 + "MemoriaAsignacion"}
              element={<SegundoParcial tema="MemoriaAsignacion" />}
            />
            <Route
              path={P2 + "MemoriaVirtual"}
              element={<SegundoParcial tema="MemoriaVirtual" />}
            />
            <Route
              path={P2 + "ioDispositivos"}
              element={<SegundoParcial tema="ioDispositivos" />}
            />
            <Route
              path={P2 + "ioAlmacenamiento"}
              element={<SegundoParcial tema="ioAlmacenamiento" />}
            />
            {/*  ****************************************************** Tercer Parcial */}
            <Route path={P3} element={<TercerParcial />} />
            <Route
              path={P3 + "ergonomia"}
              element={<TercerParcial tema="ergonomia" />}
            />
            <Route
              path={P3 + "eficiencia"}
              element={<TercerParcial tema="eficiencia" />}
            />
            <Route
              path={P3 + "estabilidad"}
              element={<TercerParcial tema="estabilidad" />}
            />
            <Route
              path={P3 + "evaluacionSeguridad"}
              element={<TercerParcial tema="evaluacionSeguridad" />}
            />
            <Route
              path={P3 + "ataques"}
              element={<TercerParcial tema="ataques" />}
            />
            <Route
              path={P3 + "vulnerabilidad"}
              element={<TercerParcial tema="vulnerabilidad" />}
            />
            <Route
              path={P3 + "seguridad"}
              element={<TercerParcial tema="seguridad" />}
            />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
