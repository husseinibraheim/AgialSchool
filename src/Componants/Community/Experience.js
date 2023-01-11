import Banner from "../Shared/HeaderImg/Banner";
import image from "../../../src/Media/Experince.jpg";
import Head from "../../../src/Media/Head.jpg";
import RightSection from "../Shared/Section/RightSection";
import LeftSection from "../Shared/Section/LeftSection";

function Experience() {
    const firstTitle = <h3> We nurture competence and confidence, and develop an
        individual’s skills and moral compass</h3>
    const firstParagraph = <> <p> receive an education designed to help them thrive and
        contribute long after their years at school. Learning takes a
        variety of forms and extends beyond the confines of the
        classroom. We are committed to helping our pupils engage with
        the wider world both physically and intellectually.
    </p>
    </>

    const secTitle = <h3> The value of charity and community service is instilled in our
        children alongside an appreciation of the need to care for the
        environment</h3>
    const secParagraph = <> <p> Opportunities for the development of physical and mental
        resilience are built into the outdoor and adventurous
        activities program along with school camps that play a vital
        and enjoyable part in our Outdoor Learning Program.
    </p>
    </>
    return (
        <>
            <Banner
                head="Agial EXPERIENCE"
                title="A UNIQUE LIFELONG JOURNEY "
                img={image}
            />

            <RightSection img={Head} title={firstTitle} paragraph={firstParagraph} />
            <LeftSection img={Head} title={secTitle} paragraph={secParagraph} />

        </>
    );
}

export default Experience;
