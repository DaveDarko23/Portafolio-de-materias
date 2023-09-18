import { NavLink } from "react-router-dom";
import Navigator from "../Components/Navigator";
import Kernal from "./SistemasOperativos/Kernal";
import Windows from "./SistemasOperativos/Windows";
import { useState } from "react";

const SistemasOperativos = ({ tema }) => {
  const [navigator, setNavigator] = useState(true);

  console.log(tema);

  const closeNavigator = () => {
    setNavigator(!navigator);
  };

  return (
    <>
      {navigator || (
        <Navigator>
          <NavLink to="/sistemas-operativos/kernel">Kernal</NavLink>
          <NavLink to="/sistemas-operativos/windows">Windows</NavLink>
        </Navigator>
      )}
      <section className="btn-close-container" onClick={closeNavigator}>
        {navigator ? (
          <section className="btn-close">
            <p>A</p>
            <p>B</p>
            <p>R</p>
            <p>I</p>
            <p>R</p>
          </section>
        ) : (
          <section className="btn-close">
            <p>C</p>
            <p>E</p>
            <p>R</p>
            <p>R</p>
            <p>A</p>
            <p>R</p>
          </section>
        )}
      </section>
      <section className={"ContainerInfo " + (navigator ? "cien" : "ochenta")}>
        {tema === "kernel" && <Kernal />}
        {tema === "windows" && <Windows />}
      </section>
    </>
  );
};

export default SistemasOperativos;
