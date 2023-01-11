
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
            <ul className={active} >
              <li>About Us
                <ul >
                  <li><Link className="link" to="/Overview">Overview</Link></li>
                  <li><Link className="link" to="/Welcomeletter">Welcome Letter</Link></li>
                  <li><Link className="link" to="/Values">Agial Values</Link></li>
                  <li><Link className="link" to="/SchoolPolicy">School Policy</Link></li>
                </ul>
              </li>
              <li>Education
                <ul >
                  <li><Link className="link" to="/AcademicInfo">Academic Information</Link></li>
                  <li><Link className="link" to="/InnovativeLearn">Innovative Learning</Link></li>
                  <li><Link className="link" to="/DigitalLearning">Digital Learning</Link></li>
                </ul>
              </li>

              <li>School Grades
                <ul>
                  <li class="nav-link dropdown-toggle">KG
                    <ul>
                      <li><Link className="link" to="/KGOne">KG 1</Link></li>
                      <li><Link className="link" to="/KGTwo">KG 2</Link></li>
                    </ul>
                  </li>

                  <li class="nav-link dropdown-toggle">Primary
                    <ul >
                      <li><Link className="link" to="/primaryOne">Primary 1</Link></li>
                      <li><Link className="link" to="/primaryTwo">Primary 2</Link></li>
                      <li><Link className="link" to="/primaryThr">Primary 3</Link></li>
                      <li><Link className="link" to="/primaryFour">Primary 4</Link></li>
                      <li><Link className="link" to="/primaryFi">Primary 5</Link></li>
                      <li><Link className="link" to="/primarySix">Primary 6</Link></li>
                    </ul>
                  </li>
                  <li>
                    <li class="nav-link dropdown-toggle">Prep
                      <ul>
                        <li><Link className="link" to={"/prepOne"}>prep 1</Link></li>
                        <li><Link className="link" to={"/prepTwo"}>prep 2</Link></li>
                        <li><Link className="link" to={"/prepTh"}>prep 3</Link></li>
                      </ul>
                    </li>
                  </li>
                </ul>
              </li>







              <li>Co-Curricular
                <ul >
                  <li><Link className="link" to="/Arts">The arts</Link></li>
                  <li><Link className="link" to="/Technology">Technology and Innovation</Link></li>
                  <li><Link className="link" to="/Sport">Sport</Link></li>
                </ul>
              </li>
              <li>Community
                <ul >
                  <li><Link className="link" to="/Experience">Agial Experience</Link></li>
                  <li><Link className="link" to="/Club">Agial Club</Link></li>
                  <li><Link className="link" to="/Teachers">Agial Teachers</Link></li>
                </ul>
              </li>
              <li><Link class="nav-link active" to="/Admissions">Admissions</Link>

              </li>
              <li>  <Link class="nav-link active" aria-current="page" to="/ContactUs">Contact Us</Link>
              </li>

              <li>LMS
                <ul >
                  <li><a className="nav-link" rel="noopener noreferrer" href="http://localhost:3001/" target="_blank">Login</a> </li>
                  <li><a className="nav-link" rel="noopener noreferrer" href="http://localhost:4200/" target="_blank">Admin Login</a> </li>
                </ul>
              </li>

            </ul>

          </div>

        </div>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

      </nav >



    </>
  )
}


export default NavbarComponant



