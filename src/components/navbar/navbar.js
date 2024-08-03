import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { DataContext } from "../../App";
import { RecipeContext } from "../../navigation/navigation";

const NavBar = () => {
  const linkStyle = { margin: 10, textDecoration: "none" };
  const { darkMode } = useContext(DataContext);
  const { favouriteDish } = useContext(RecipeContext);
  return (
    <nav
      className={`navbar navbar-expand-sm bg-${
        darkMode ? "dark" : "light"
      } navbar-dark`}
    >
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/"} style={linkStyle}>
              Main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/blog"} style={linkStyle}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"} style={linkStyle}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/settings"} style={linkStyle}>
              Setting
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/recipes"} style={linkStyle}>
              Recipes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/favouriteRecipe"} style={linkStyle}>
              Favourite Recipes {favouriteDish.length}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
