import { useState } from "react";
import Navigator from "../Components/Navigator";
import { NavLink } from "react-router-dom";
import Ergonomia from "./SistemasOperativos/TercerParcial/Ergonomia";
import Eficiencia from "./SistemasOperativos/TercerParcial/Eficiencia";
import Estabilidad from "./SistemasOperativos/TercerParcial/Estabilidad";
import EvaluacionSeguridad from "./SistemasOperativos/TercerParcial/EvaluacionSeguridad";
import Ataques from "./SistemasOperativos/TercerParcial/Ataques";
import Vulnerabilidad from "./SistemasOperativos/TercerParcial/Vulnerabilidad";
import Seguridad from "./SistemasOperativos/TercerParcial/Seguridad";
import Introduccion from "./SistemasOperativos/Introduccion";

const TercerParcial = ({ tema = "" }) => {
  const [navigator, setNavigator] = useState(false);
  const [theme, setTheme] = useState(0);

  const closeNavigator = () => {
    setNavigator(!navigator);
  };

  return (
    <>
      <Navigator controller={navigator}>
        {navigator && (
          <>
            <h3
              onClick={() => {
                setTheme(1);
              }}
            >
              Unidad 5: Evaluación de un Sistema Operativo
            </h3>
            {theme === 1 && (
              <>
                <NavLink to="/tercer-parcial/ergonomia">5.1 Ergonomia</NavLink>
                <NavLink to="/tercer-parcial/eficiencia">
                  5.2 Eficiencia
                </NavLink>
                <NavLink to="/tercer-parcial/estabilidad">
                  5.3 Estabilidad
                </NavLink>
                <NavLink to="/tercer-parcial/evaluacionSeguridad">
                  5.4 Seguridad
                </NavLink>
              </>
            )}
            <h3
              onClick={() => {
                setTheme(2);
              }}
            >
              Unidad 6: Vulnerabilidades y Seguridad
            </h3>
            {theme === 2 && (
              <>
                <NavLink to="/tercer-parcial/ataques">6.1 Ataques</NavLink>
                <NavLink to="/tercer-parcial/vulnerabilidad">
                  6.2 Vulnerabilidades
                </NavLink>
                <NavLink to="/tercer-parcial/seguridad">6.3 Seguridad</NavLink>
              </>
            )}
          </>
        )}
      </Navigator>

      <section className={"ContainerInfo " + (navigator ? "ochenta" : "cien")}>
        <div className="container-close" onClick={closeNavigator}>
          <div className="btn-close">
            <span> {navigator ? "<" : ">"} </span>
          </div>
        </div>

        {tema === "" && <Introduccion />}
        {tema === "ergonomia" && <Ergonomia />}
        {tema === "eficiencia" && <Eficiencia />}
        {tema === "estabilidad" && <Estabilidad />}
        {tema === "evaluacionSeguridad" && <EvaluacionSeguridad />}
        {tema === "ataques" && <Ataques />}
        {tema === "vulnerabilidad" && <Vulnerabilidad />}
        {tema === "seguridad" && <Seguridad />}
      </section>
    </>
  );
};

export default TercerParcial;
