import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="HeaderIMGContainer">
        <img className="HeaderIMG" src="src\assets\logo.png" alt="" />
      </div>
      <ul>
        <NavLink to="/primer-parcial">Primer Parcial</NavLink>
        <NavLink to="/segundo-parcial">Segundo Parcial</NavLink>
        <NavLink to="/tercer-parcial">Tercer Parcial</NavLink>
      </ul>
    </header>
  );
};

export default Header;
