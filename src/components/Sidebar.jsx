import home from "./assets/home.png";
import eat from "./assets/eat.png";
import basket from "./assets/basket.png";
import location from "./assets/location.png";
import exit from "./assets/Group 7.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>A</p>
      <NavLink to={"/"}>
        <img src={home} alt="" />
      </NavLink>

      <NavLink to={"/menu"}>
        <img src={eat} alt="" />
      </NavLink>

      <NavLink to={"/basket"}>
        <img src={basket} alt="" />
      </NavLink>

      <NavLink to={"/location"}>
        <img src={location} alt="" />
      </NavLink>

      <NavLink to={"/"}>
        <img src={exit} alt="" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
