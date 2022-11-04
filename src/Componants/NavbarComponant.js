
import React from "react"
import { Link } from "react-router-dom"
import "./navbar.scss"
import logo from "../assets/whitelogo.png"
function NavbarComponant() {

  return (
    <>
      {/* <nav id="navBar">
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


    </nav>  */}
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center justify-content-between">

          <h1 class="logo"><a href="index.html">Dewi</a></h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="#team">Team</a></li>
              <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>



        </div>
      </header>


    </>
  )
}


export default NavbarComponant



