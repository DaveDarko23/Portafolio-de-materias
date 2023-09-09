import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Ignacio</h1>
      <ul>
        <NavLink to="/redes-I">Redes I</NavLink>
        <NavLink to="/redes-II">Redes II</NavLink>
        <NavLink to="/redes-III">Redes III</NavLink>
        <NavLink to="/sistemas-operativos">Sistemas Operativos</NavLink>
      </ul>
    </header>
  );
};

export default Header;
