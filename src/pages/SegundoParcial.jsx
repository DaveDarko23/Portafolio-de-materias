import { useState } from "react";
import Navigator from "../Components/Navigator";
import { NavLink } from "react-router-dom";
import AdProcesos from "./SistemasOperativos/SegundoParcial/AdProcesos";
import AdHilos from "./SistemasOperativos/SegundoParcial/AdHilos";
import AdJerarquia from "./SistemasOperativos/SegundoParcial/AdJerarquia";
import AdLlamadas from "./SistemasOperativos/SegundoParcial/AdLlamadas";
import AdPlanificacion from "./SistemasOperativos/SegundoParcial/AdPlanificacion";
import ArchivosConcepto from "./SistemasOperativos/SegundoParcial/ArchivosConcepto";
import ArchivosOrganizacion from "./SistemasOperativos/SegundoParcial/ArchivosOrganizacion";
import ArchivosEstructura from "./SistemasOperativos/SegundoParcial/ArchivosEstructura";
import MemoriaFuncion from "./SistemasOperativos/SegundoParcial/MemoriaFuncion";
import MemoriaAsignacion from "./SistemasOperativos/SegundoParcial/MemoriaAsignacion";
import MemoriaVirtual from "./SistemasOperativos/SegundoParcial/MemoriaVirtual";
import IODispositivos from "./SistemasOperativos/SegundoParcial/IODispositivos";
import IOAlmacenamiento from "./SistemasOperativos/SegundoParcial/IOAlmacenamiento";
import Introduccion from "./SistemasOperativos/Introduccion";

const SegundoParcial = ({ tema = "" }) => {
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
              4.1 Administración de Procesos
            </h3>
            {theme === 1 && (
              <>
                <NavLink to="/segundo-parcial/adProcesos">
                  4.1.1 Procesos. Concepto y estados de un proceso
                </NavLink>
                <NavLink to="/segundo-parcial/adHilos">
                  4.1.2 Hilos (subprocesos) y Concurrencia
                </NavLink>
                <NavLink to="/segundo-parcial/adJerarquia">
                  4.1.3 Jerarquia de procesos
                </NavLink>
                <NavLink to="/segundo-parcial/adLlamadas">
                  4.1.4 Llamadas al Sistema para Administración de procesos
                </NavLink>
                <NavLink to="/segundo-parcial/adPlanificacion">
                  4.1.5 Planificación de Procesos y sus tipos
                </NavLink>
              </>
            )}
            <h3
              onClick={() => {
                setTheme(2);
              }}
            >
              4.2 Sistema de Archivos
            </h3>
            {theme === 2 && (
              <>
                <NavLink to="/segundo-parcial/ArchivosConcepto">
                  4.2.1 Concepto y tipos de Archivos
                </NavLink>
                <NavLink to="/segundo-parcial/ArchivosOrganizacion">
                  4.2.2 Organización y Accesso a Archivos
                </NavLink>
                <NavLink to="/segundo-parcial/ArchivosEstructura">
                  4.2.3 Estructura de los Directorios y de los Sistemas de
                  Archivos
                </NavLink>
              </>
            )}
            <h3
              onClick={() => {
                setTheme(3);
              }}
            >
              4.3 Administración de Memoria
            </h3>
            {theme === 3 && (
              <>
                <NavLink to="/segundo-parcial/MemoriaFuncion">
                  4.3.1 Funciones y operaciones del Administrador de Memoria
                </NavLink>
                <NavLink to="/segundo-parcial/MemoriaAsignacion">
                  4.3.2 Asignación de Memoria Contigua
                </NavLink>
                <NavLink to="/segundo-parcial/MemoriaVirtual">
                  4.3. Memoria Virtual
                </NavLink>
              </>
            )}
            <h3
              onClick={() => {
                setTheme(4);
              }}
            >
              4.4 Sistemas de Entrada/Salida
            </h3>
            {theme === 4 && (
              <>
                <NavLink to="/segundo-parcial/ioDispositivos">
                  4.4.1 Dispositivos de Entrada/Salida
                </NavLink>
                <NavLink to="/segundo-parcial/ioAlmacenamiento">
                  4.4.2 Almacenamiento Intermedio de La Entrada/Salida
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
        {tema === "adProcesos" && <AdProcesos />}
        {tema === "adHilos" && <AdHilos />}
        {tema === "adJerarquia" && <AdJerarquia />}
        {tema === "adLlamadas" && <AdLlamadas />}
        {tema === "adPlanificacion" && <AdPlanificacion />}
        {tema === "ArchivosConcepto" && <ArchivosConcepto />}
        {tema === "ArchivosOrganizacion" && <ArchivosOrganizacion />}
        {tema === "ArchivosEstructura" && <ArchivosEstructura />}
        {tema === "MemoriaFuncion" && <MemoriaFuncion />}
        {tema === "MemoriaAsignacion" && <MemoriaAsignacion />}
        {tema === "MemoriaVirtual" && <MemoriaVirtual />}
        {tema === "ioDispositivos" && <IODispositivos />}
        {tema === "ioAlmacenamiento" && <IOAlmacenamiento />}
      </section>
    </>
  );
};

export default SegundoParcial;
