import { NavLink } from "react-router-dom";
import Navigator from "../Components/Navigator";
import Kernal from "./SistemasOperativos/Kernal";
import Windows from "./SistemasOperativos/Windows";
import { useState } from "react";

const SistemasOperativos = ({ tema }) => {
  const [navigator, setNavigator] = useState(false);

  console.log(tema);

  const closeNavigator = () => {
    setNavigator(!navigator);
  };

  return (
    <>
      <Navigator controller={navigator}>
        {navigator && (
          <>
            <NavLink to="/sistemas-operativos/windows">Sistemas Operativos</NavLink>
            <NavLink to="/sistemas-operativos/kernel">Kernal</NavLink>
            <NavLink to="/sistemas-operativos/windows">Windows</NavLink>
            <NavLink to="/sistemas-operativos/windows">Kali</NavLink>
            <NavLink to="/sistemas-operativos/windows">Mac OS</NavLink>
          </>
        )}
      </Navigator>

      <section className={"ContainerInfo " + (navigator ? "ochenta" : "cien")}>
        <section className="container-close" onClick={closeNavigator}>
          <section className="btn-close">
            <p> {navigator ? "<" : ">"} </p>
          </section>
        </section>
        {tema === "kernel" && <Kernal />}
        {tema === "windows" && <Windows />}
      </section>
    </>
  );
};

export default SistemasOperativos;
