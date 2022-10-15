import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      colour: isActive ? "white" : "none",
    };
  };
  return (
    <div>
      <div
        style={{
          height: "60px",
          width: "100%",
          backgroundColor: "green",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          paddingLeft: "18px",
        }}
      >
        <NavLink style={navLinkStyles} to="/Adduser">
          Adduser
        </NavLink>
        <NavLink style={navLinkStyles} to="/Login">
          Login
        </NavLink>
        <NavLink style={navLinkStyles} to="/Onlineshop">
          Onlineshop
        </NavLink>
        <NavLink style={navLinkStyles} to="/Product">
          Product
        </NavLink>
        <NavLink style={navLinkStyles} to="/Profile">
          Profile
        </NavLink>
        <NavLink style={navLinkStyles} to="/signup">
          Signup
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
