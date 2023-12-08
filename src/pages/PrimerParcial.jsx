import { NavLink } from "react-router-dom";
import Navigator from "../Components/Navigator";
import { useState } from "react";
import Introduccion from "./SistemasOperativos/Introduccion";
import Definicion from "./SistemasOperativos/PrimerParcial/Definicion";
import Evolucion from "./SistemasOperativos/PrimerParcial/Evolucion";
import EstructuraMonolitica from "./SistemasOperativos/PrimerParcial/EstructuraMonolitica";
import EstructuraJerarquica from "./SistemasOperativos/PrimerParcial/EstructuraJerarquica";
import EstructuraVirtual from "./SistemasOperativos/PrimerParcial/EstructuraVirtual";
import EstructuraServidor from "./SistemasOperativos/PrimerParcial/EstructuraServidor";
import ServicioUsuario from "./SistemasOperativos/PrimerParcial/ServicioUsuario";
import ServicioTarea from "./SistemasOperativos/PrimerParcial/ServicioTarea";
import ServicioProceso from "./SistemasOperativos/PrimerParcial/ServicioProceso";
import SoRed from "./SistemasOperativos/PrimerParcial/SoRed";
import SoDistribuido from "./SistemasOperativos/PrimerParcial/SoDistribuido";
import ArranqueComputadora from "./SistemasOperativos/PrimerParcial/ArranqueComputadora";
import ArranqueHardware from "./SistemasOperativos/PrimerParcial/ArranqueHardware";
import UbicaciónSO from "./SistemasOperativos/PrimerParcial/UbicaciónSO";
import ArranqueSO from "./SistemasOperativos/PrimerParcial/ArranqueSO";
import CaidaSistema from "./SistemasOperativos/PrimerParcial/CaidaSistema";
import ParadasSistema from "./SistemasOperativos/PrimerParcial/ParadasSistema";
import PrimerSeccion from "./SistemasOperativos/PrimerParcial/PrimerSeccion";

const PrimerParcial = ({ tema = "" }) => {
  const [navigator, setNavigator] = useState(false);
  const [theme, setTheme] = useState(0);

  console.log(tema);

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
              1.1 Definición de Sistema Operativo
            </h3>
            {theme === 1 && (
              <>
                <NavLink to="/primer-parcial/introduccion">
                  1.1.1 Definición de Sistema Operativo
                </NavLink>
                <NavLink to="/primer-parcial/definicion">
                  1.2 Funciones, Objetivos y caracteristicas de los sistemas
                  Operativos
                </NavLink>
                <NavLink to="/primer-parcial/evolucion">
                  1.3 Evolución Histórica de los Sistemas Operativos
                </NavLink>
              </>
            )}
            <h3
              onClick={() => {
                setTheme(2);
              }}
            >
              2.1 Sistemas Operativos por su estructura
            </h3>
            {theme === 2 && (
              <>
                <NavLink to="/primer-parcial/estructuraMonolitica">
                  2.1.1 Estructura Monolítica
                </NavLink>
                <NavLink to="/primer-parcial/estructuraJerarquica">
                  2.1.2 Estructura Jerarquica
                </NavLink>
                <NavLink to="/primer-parcial/estructuraVirtual">
                  2.1.3 Maquina Virtual
                </NavLink>
                <NavLink to="/primer-parcial/estructuraServidor">
                  2.1.4 Cliente Servidor
                </NavLink>
              </>
            )}
            <h3
              onClick={() => {
                setTheme(3);
              }}
            >
              2.2 Sistemas Operativos por servicios
            </h3>
            {theme === 3 && (
              <>
                <NavLink to="/primer-parcial/servicioUsuario">
                  2.2.1 Monousuarios y Multiusuarios
                </NavLink>
                <NavLink to="/primer-parcial/servicioTarea">
                  2.2.2 Monotareas y Multitareas
                </NavLink>
                <NavLink to="/primer-parcial/servicioProceso">
                  2.2.3 Uniproceso y Multiproceso
                </NavLink>
              </>
            )}
            <h3
              onClick={() => {
                setTheme(4);
              }}
            >
              2.3 Sistemas Operativos por la forma que ofrecen sus servicios
            </h3>
            {theme === 4 && (
              <>
                <NavLink to="/primer-parcial/soRed">
                  2.3.1 Sistema Operativo de Red
                </NavLink>
                <NavLink to="/primer-parcial/soDistribuido">
                  2.3.2 Sistemas Operativos Distribuidos
                </NavLink>
              </>
            )}
            <h3
              onClick={() => {
                setTheme(5);
              }}
            >
              Unidad 3
            </h3>
            {theme === 5 && (
              <>
                <NavLink to="/primer-parcial/arranqueComputadora">
                  3.1 Arranque de la Computadora
                </NavLink>
                <NavLink to="/primer-parcial/arranqueHardware">
                  3.2 Arranque del Hardware
                </NavLink>
                <NavLink to="/primer-parcial/ubicacionSO">
                  3.3 Ubicación del Sistema Operativo
                </NavLink>
                <NavLink to="/primer-parcial/arranqueSO">
                  3.4 Arranque del Sistema Operativo
                </NavLink>
                <NavLink to="/primer-parcial/paradasSO">
                  3.5 Paradas del Sistema
                </NavLink>
                <NavLink to="/primer-parcial/caidasSO">
                  3.6 Caídas del sistema y problemas de arranque
                </NavLink>
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
        {tema === "introduccion" && <PrimerSeccion />}
        {tema === "definicion" && <Definicion />}
        {tema === "evolucion" && <Evolucion />}
        {tema === "estructuraMonolitica" && <EstructuraMonolitica />}
        {tema === "estructuraJerarquica" && <EstructuraJerarquica />}
        {tema === "estructuraVirtual" && <EstructuraVirtual />}
        {tema === "estructuraServidor" && <EstructuraServidor />}
        {tema === "servicioUsuario" && <ServicioUsuario />}
        {tema === "servicioTarea" && <ServicioTarea />}
        {tema === "servicioProceso" && <ServicioProceso />}
        {tema === "soRed" && <SoRed />}
        {tema === "soDistribuido" && <SoDistribuido />}
        {tema === "arranqueComputadora" && <ArranqueComputadora />}
        {tema === "arranqueHardware" && <ArranqueHardware />}
        {tema === "ubicacionSO" && <UbicaciónSO />}
        {tema === "arranqueSO" && <ArranqueSO />}
        {tema === "paradasSO" && <ParadasSistema />}
        {tema === "caidasSO" && <CaidaSistema />}
      </section>
    </>
  );
};

export default PrimerParcial;
