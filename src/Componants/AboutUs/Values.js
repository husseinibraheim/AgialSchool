import Banner from "../Banner";
import image from "../../../src/Media/values.jpg";
import "../../App.scss";
import Head from "../../../src/Media/Head.jpg";

function Values() {
    return (
        <>
            <Banner
                head="AGIAL VALUES"
                title="WHOLENESS, EXCELLENCE, TRUTH, RESPECT01"
                img={image}
            />

            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Our Values</h2>
                    <p>
                        A Repton education is underpinned by our values and characterised by
                        breadth and depth of experience. Our values provide the foundation
                        for all pupils to thrive. A Repton pupil is a happy, kind, balanced
                        and well-rounded young person.
                    </p>
                </div>

                <div class="row" data-aos="fade-up" data-aos-delay="200">
                    <div class="col-md-6">
                        <div class="icon-box">
                            <i class="bi bi-laptop"></i>
                            <h4>Ethics and Manners</h4>
                            <p>
                                Being respectful, demonstrating humility and choosing
                                accurately.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <div class="icon-box">
                            <i class="bi bi-bar-chart"></i>
                            <h4>Celebrating range</h4>
                            <p>
                                increasing our horizons, being attentive to others and growing collectively.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <div class="icon-box">
                            <i class="bi bi-bar-chart"></i>
                            <h4>Entrepreneurial Spirit</h4>
                            <p>
                                Creativity, exploring our passions and taking healthful risks.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <div class="icon-box">
                            <i class="bi bi-bar-chart"></i>
                            <h4>Pursuing Excellence</h4>
                            <p>Having high standards and being the great that we can be.</p>
                        </div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">
                                    Agial Aims
                                </h1>
                                <p class="card-text">
                                    Our school is an institute with ambitious expectations, aims at creating a new generation of great thinkers who are able to face challenges.  It is a place for the ambitious parents who want to provide a high-quality education for their children.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Values;
