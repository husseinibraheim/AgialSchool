import logo from "../assets/whitelogo.png"
function Footer() {
    return (
        <>
            <div className="container-fluid p-0 m-0 mt-5 ">
                <footer className="bg-dark text-muted ">
                    <div className="row m-0 ">
                        <div className="col-1"></div>
                        <div className="col-1 ms-3 me-5 mt-4"> <img src={logo} /> </div>
                        <div className="col-4 mt-4 ">
                            <h4 className="text-light mb-3">Agial international schools</h4>
                            <p className="fs-6">
                                We promote critical thinking,
                                international understanding and appreciation for diversity while
                                preserving our culture, values and beliefs. We seek to empower
                                students to become lifelong-learners who are knowledgeable and
                                inquirers, equipping them with the skills needed for success in
                                a global society through the cornerstones of relationships,
                                authenticity and innovation.
                            </p>

                        </div>
                        <div className="col-1">
                        </div>

                        <div className="col-4 mt-4">
                            <h4 className="text-light mb-3">Contact us</h4>
                            <p>
                                <i class="fas fa-home me-3"></i>
                                Tala , Monofya{" "}
                            </p>
                            <p>
                                <i class="fa fa-phone me-3"></i>
                                01000375247 / 01000124574{" "}
                            </p>
                            <p>
                                <i class="fa fa-phone me-3"></i>
                                0483553500 / 0483553400{" "}
                            </p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>{" "}
                                info@agialinternationalschools.com
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot me-3"></i> Tala – Tanta Road
                                near the police station
                            </p>
                            <p>
                                <i class="fa-solid fa-location-dot me-3"></i>{" "}
                                <a className="text-muted text-decoration-none" target={"_blank"} href="https://www.google.com/maps/place/Agial+Language+School/@30.688526,30.952282,16z/data=!4m5!3m4!1s0x0:0x1177f455a5d71857!8m2!3d30.6885258!4d30.9522823?hl=en&shorturl=1"
                                >
                                    Show Location On Map
                                </a>
                            </p>
                        </div>

                        <div class="container text-center">
                            <section class="mb-2 mt-2 social-links">
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    target={"_blank"}
                                    href="https://www.facebook.com/Agial.School.2015"
                                    role="button"
                                >
                                    <i class="fab fa-facebook-f"></i>
                                </a>

                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    target={"_blank"}
                                    href="https://www.instagram.com/agial_schools/"
                                    role="button"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>

                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    target={"_blank"}
                                    href="https://www.youtube.com/channel/UCtoSMGCCaYpjdSTCUx-HLNw/"
                                    role="button"
                                >
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </section>
                        </div>
                        <hr />

                        <div class="text-center p-3" >
                            © 2022 Agial School , All rights reserved
                        </div>
                    </div>
                </footer>
            </div>
            {/* <div class="container-fluid p-0">
                <footer class="bg-dark text-center text-muted">
                    <div class="container p-4 pb-0">
                        <section class="mb-4 social-links">
                            <a class="btn btn-outline-light btn-floating m-1" target={"_blank"} href="https://www.facebook.com/Agial.School.2015" role="button"
                            ><i class="fab fa-facebook-f"></i></a>

                            <a class="btn btn-outline-light btn-floating m-1" target={"_blank"} href="https://www.instagram.com/agial_schools/" role="button"
                            ><i class="fab fa-instagram"></i></a>

                            <a class="btn btn-outline-light btn-floating m-1" target={"_blank"} href="https://www.youtube.com/channel/UCtoSMGCCaYpjdSTCUx-HLNw/" role="button"
                            ><i class="fab fa-youtube"></i></a>
                        </section>
                    </div>
                    <div className="text-muted justify-content-center">
                        <h5>
                            <i class="fas fa-home me-3"></i>
                            Tala , Monofya </h5>
                        <h5 >
                            <i class="fa fa-phone me-3"></i>
                            (+20) 1000375247</h5>
                        <h5 ><i class="fas fa-envelope mr-3"></i> info@agialinternationalschools.com</h5>

                    </div>
                    <div class="text-center p-3" >
                        © 2022 Agial School , All rights reserved
                    </div>
                </footer>

            </div > */}
        </>
    );
}

export default Footer;
