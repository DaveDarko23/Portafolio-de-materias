import { NavLink } from "react-router-dom";
import Navigator from "../Components/Navigator";

const SistemasOperativos = () => {
  return (
    <>
      <Navigator>
        <NavLink to="/sistemas-operativos/info">Kernal</NavLink>
        <NavLink to="/sistemas-operativos/windows">Windows</NavLink>
      </Navigator>
    </>
  );
};

export default SistemasOperativos;
