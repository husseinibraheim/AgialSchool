import Banner from "../Banner";
import image from "../../../src/Media/values.jpg";
import "../../App.scss";
import Head from "../../../src/Media/Head.jpg";
import LeftSection from "../Shared/Section/LeftSection";
import visionImg from "../../assets/photos/junior.jpg"
import RightSection from "../Shared/Section/RightSection";
import aimImg from "../../assets/photos/aim.jpg"

function Values() {

    const valuesTitle = <><h3>Our Values </h3></>;
    const valuesParagraph = <> <p>  A Repton education is underpinned by our values and characterised by
        breadth and depth of experience. Our values provide the foundation
        for all pupils to thrive. A Repton pupil is a happy, kind, balanced
        and well-rounded young person.
    </p> </>

    const valuesItem = <>
        <h3>Ethics and Manners</h3>
        <p>
            Being respectful, demonstrating humility and choosing
            accurately.
        </p>
        <h3>Celebrating range</h3>
        <p>
            increasing our horizons, being attentive to others and growing collectively.
        </p>
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


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                            <i class="fa-solid fa-school"></i>
                            </div>
                            <article>
                                <h3>Ethics and Manners</h3>
                                <p>
                                    Being respectful, demonstrating humility and choosing
                                    accurately.
                                </p>
                            </article>

                        </div>
                        <div className="col-md-6">

                        </div>

                    </div>


                </div>



            </section>

            <LeftSection img={aimImg} title={aimTitle} paragraph={aimsParagraph} />


        </>
    );
}

export default Values;
