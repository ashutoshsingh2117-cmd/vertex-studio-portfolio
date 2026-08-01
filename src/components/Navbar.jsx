import { useState, useEffect } from "react";
import "./../styles/Navbar.css";
import logo from "../assets/vertex-brand.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  const scrollToSection = (id) => {

    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior:"smooth",
    });

  };


  return (

    <nav className={scrolled ? "navbar scrolled" : "navbar"}>


      <div 
        className="logo"
        onClick={() => scrollToSection("home")}
      >

        <img
          src={logo}
          alt="Vertex Studio"
          className="brand-logo"
        />

      </div>



      <div className={menuOpen ? "nav-links active" : "nav-links"}>


        <a href="#home"
        onClick={(e)=>{
          e.preventDefault();
          scrollToSection("home");
        }}>
          Home
        </a>


        <a href="#about"
        onClick={(e)=>{
          e.preventDefault();
          scrollToSection("about");
        }}>
          About
        </a>


        <a href="#projects"
        onClick={(e)=>{
          e.preventDefault();
          scrollToSection("projects");
        }}>
          Projects
        </a>


        <a href="#services"
        onClick={(e)=>{
          e.preventDefault();
          scrollToSection("services");
        }}>
          Services
        </a>


      </div>



      <button
      className="nav-btn"
      onClick={()=>scrollToSection("contact")}
      >
        LET'S CONNECT ↗
      </button>



      <div
      className="menu-btn"
      onClick={()=>setMenuOpen(!menuOpen)}
      >
        ☰
      </div>


    </nav>

  );

}

export default Navbar;