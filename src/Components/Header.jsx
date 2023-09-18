import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="HeaderIMGContainer">
        <img className="HeaderIMG" src="src\assets\logo.png" alt="" />
      </div>
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
