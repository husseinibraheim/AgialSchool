
import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./navbar.scss"
import logo from "../assets/whitelogo.png"
function NavbarComponant() {


  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <>
      <nav id="navBar">
        <div className="navContainer">
          <div className="navImg">
            <Link to="/home">
              <img src={logo} alt="Agial Logo">
              </img>
            </Link>


          </div>
          <div className="navItem">
            <ul>
              <li><Link to="/aboutus" className="link" >About Us</Link>
                <ul className="dropDown">
                  <li><Link  className="link"to="/Overview">Overview</Link></li>
                  <li><Link  className="link"to="/Welcomeletter">Welcome Letter</Link></li>
                  <li><Link  className="link"to="/Values">Agial Values</Link></li>
                  <li><Link  className="link"to="/SchoolPolicy">School Policy</Link></li>
                </ul>
              </li>
              <li>Education
                <ul className="dropDown">
                  <li><Link  className="link"to="/AcademicInfo">Academic Information</Link></li>
                  <li><Link  className="link"to="/InnovativeLearn">Innovative Learning</Link></li>
                  <li><Link  className="link"to="/DigitalLearning">Digital Learning</Link></li>
                </ul>
              </li>
              <li>School Grades
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        KG
                      </a>
                      <ul class="dropdown-menu">
                        <li><Link  className="link"to="/KGOne">KG 1</Link></li>
                        <li><Link  className="link"to="/KGTwo">KG 2</Link></li>
                      </ul>
                    </li>
                  </Link></li>
                  <li><Link class="dropdown-item">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Primary
                      </a>
                      <ul class="dropdown-menu">
                        <li><Link  className="link"to="/primaryOne">Primary 1</Link></li>
                        <li><Link  className="link"to="/primaryTwo">Primary 2</Link></li>
                        <li><Link  className="link"to="/primaryThr">Primary 3</Link></li>
                        <li><Link  className="link"to="/primaryFour">Primary 4</Link></li>
                        <li><Link  className="link"to="/primaryFi">Primary 5</Link></li>
                        <li><Link  className="link"to="/primarySix">Primary 6</Link></li>
                      </ul>
                    </li>
                  </Link></li>
                  <li><Link class="dropdown-item">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        prep
                      </a>
                      <ul class="dropdown-menu">
                        <li><Link  className="link"to={"/prepOne"}>prep 1</Link></li>
                        <li><Link  className="link"to={"/prepTwo"}>prep 2</Link></li>
                        <li><Link  className="link"to={"/prepTh"}>prep 3</Link></li>
                      </ul>
                    </li>
                  </Link></li>
                </ul>
              </li>
          
            <li>Co-Curricular
              <ul className="dropDown">
                <li><Link  className="link"to="/Arts">The arts</Link></li>
                <li><Link  className="link"to="/Technology">Technology and Innovation</Link></li>
                <li><Link  className="link"to="/Sport">Sport</Link></li>
              </ul>
            </li>
            <li>Community
              <ul className="dropDown">
                <li><Link  className="link"to="/Experience">Agial Experience</Link></li>
                <li><Link  className="link"to="/Club">Agial Club</Link></li>
                <li><Link  className="link"to="/Teachers">Agial Teachers</Link></li>
              </ul>
            </li>
            <li><Link class="nav-link active" to="/Admissions">Admissions</Link>

            </li>
            <li>  <Link class="nav-link active" aria-current="page" to="/ContactUs">Contact Us</Link>
            </li>

          </ul>

        </div>

      </div>


    </nav> 
      {/* <nav className="nav">
        <div className="navbarContainer">

          <Link class="nav__logo" to="/Home">
            <img src={logo} />
          </Link>

          <ul className={active}>
            <li><Link to="/aboutus" className="nav__item" >About Us</Link>
              <ul className="dropDown">
                <li><Link className="nav__link" to="/Overview">Overview</Link></li>
                <li><Link className="nav__link" to="/Welcomeletter">Welcome Letter</Link></li>
                <li><Link className="nav__link" to="/Values">Agial Values</Link></li>
                <li><Link className="nav__link" to="/SchoolPolicy">School Policy</Link></li>
              </ul>
            </li>
           
            <li className="nav__item">
              <Link class="nav__link" to="/flight">Flight</Link>

            </li>
            <li className="nav__item">
              <Link class="nav__link" to="/TourGuiding">Tour Guiding</Link>

            </li>
            <li className="nav__item">
              <Link class="nav__link " to="/holidays">Holidays</Link>
            </li>

          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav> */}

    </>
  )
}


export default NavbarComponant



