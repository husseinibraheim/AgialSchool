import Banner from "../Shared/HeaderImg/Banner";
import "../style/aboutusValues.scss"
import image from "../../../src/Media/values.jpg";
import "../../App.scss";
import Head from "../../../src/Media/Head.jpg";
import LeftSection from "../Shared/Section/LeftSection";
import visionImg from "../../assets/photos/junior.jpg"
import RightSection from "../Shared/Section/RightSection";
import aimImg from "../../assets/photos/aim.jpg"
import React, { useEffect } from "react";
import "../../../node_modules/aos/dist/aos.css"
import AOS from 'aos';

function Values() {

  useEffect(() => {
    AOS.init();
  }, [])
  const valuesTitle = <><h3>Our Values </h3></>;
  const valuesParagraph = <> <p>  An Agial education is underpinned by our values and characterised by
    breadth and depth of experience. Our values provide the foundation
    for all pupils to thrive. An Agial pupil is a happy, kind, balanced
    and well-rounded young person.
  </p> </>

  const valuesItem = <>

    <h3>Entrepreneurial Spirit</h3>
    <p>
      Creativity, exploring our passions and taking healthful risks.
    </p>
    <h3>Entrepreneurial Spirit</h3>
    <p>
      Creativity, exploring our passions and taking healthful risks.
    </p>
    <h3>Pursuing Excellence</h3>
    <p>Having high standards and being the great that we can be.</p>

  </>

  const aimTitle = <><h3>Agial Aims</h3> </>
  const aimsParagraph = <><p>Our school is an institute with ambitious expectations, aims at creating a new generation of great thinkers who are able to face challenges.  It is a place for the ambitious parents who want to provide a high-quality education for their children.
  </p> </>
  return (
    <>
      <Banner
        head="AGIAL VALUES"
        title="WHOLENESS, EXCELLENCE, TRUTH, RESPECT01"
        img={image}
      />

      <LeftSection img={visionImg} title={valuesTitle} paragraph={valuesParagraph} />


      <section id="services" class="services section-bg mt-5">
        <div class="container" data-aos="fade-up">
          <div class="row" data-aos="fade-up" data-aos-delay="200">
            <div class="col-md-6">
              <div class="icon-box">
                <i class="fa-sharp fa-solid fa-heart"></i>
                <h4><a href="#">Ethics and Manners</a></h4>
                <p> Being respectful, demonstrating humility and choosing
                  accurately.</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="fa-solid fa-graduation-cap"></i>
                <h4><a href="#">Celebrating range</a></h4>
                <p>increasing our horizons, being attentive to others and growing collectively.
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="fa-solid fa-comment-plus"></i>

                <i class="fa-solid fa-earth-americas"></i>
                <h4><a href="#">Entrepreneurial Spirit</a></h4>
                <p>Creativity, exploring our passions and taking healthful risks.</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box">

                <i class="fa-brands fa-envira"></i>
                <h4><a href="#">Pursuing Excellence</a></h4>
                <p>Having high standards and being the great that we can be.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
      <RightSection img={aimImg} title={aimTitle} paragraph={aimsParagraph} />


    </>
  );
}

export default Values;
