import { Link } from "react-router-dom";
import "../css/Header.css"
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <h1>MuscleMentor</h1>
      </div>
      <h2 className="welcome_text">Welcome to Muscle Mentor - Where Strength Meets Consistency</h2>
      <div className="links_container">
      <Link to={"/"} className="links_from_home">
        Home
      </Link>
      <Link to={"/workouts"} className="links_from_home">
        workouts
      </Link>
      <Link to={"/programs"} className="links_from_home">
        programs
      </Link>
      <Link to={"/about"} className="links_from_home">
        About
      </Link>
      </div>
    </div>
  );
};

export default Header;
