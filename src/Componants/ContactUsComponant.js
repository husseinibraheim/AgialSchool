
import "./contact.scss"
import Banner from "./Shared/HeaderImg/Banner"

import image from "../assets/photos/about1.jpg"


function ContactUsComponant() {




    return (
        <>            <Banner
            head="CONTACT US"
            title="Stay in touch"
            img={image}
        />
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <p>We would be happy to help you or hear your comments. You may call or send an email to the offices listed below or contact us by filling in the information on the form</p>
                    </div>

                    <div class="row gx-lg-0 gy-4">

                        <div class="col-lg-4">

                            <div class="info-container d-flex flex-column align-items-center justify-content-center">
                                <div class="info-item d-flex">
                                    <i class="fa-solid fa-location-dot me-3"></i>
                                    <div>
                                        <h4>Location </h4>
                                        <p>Tala – Tanta Road near the police station</p>
                                    </div>
                                </div>

                                <div class="info-item d-flex">
                                    <i class="fas fa-envelope me-3"></i>
                                    <div>
                                        <h4>Email </h4>
                                        <p> info@agialinternationalschools.com</p>
                                    </div>
                                </div>

                                <div class="info-item d-flex">
                                    <i class="fa fa-phone me-3 "></i>
                                    <div>
                                        <h4>Call </h4>
                                        <p>+20 1000375247 / +20 1000124574</p>
                                    </div>
                                </div>

                                <div class="info-item d-flex">
                                    <i class="fa-regular fa-clock"></i>
                                    <div>
                                        <h4>Open Hours </h4>
                                        <p>Sat-Thu : 8 AM - 3 PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-8">
                            <form class="email-form">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="7" placeholder="Message" required></textarea>
                                </div>

                                <div class="text-end m-3"><button className="message">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )





}

export default ContactUsComponant