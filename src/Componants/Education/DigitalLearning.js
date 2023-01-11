import Banner from "../Shared/HeaderImg/Banner";
import image from "../../../src/Media/Degital.jpg";
import Head from "../../../src/Media/Head.jpg";
import RightSection from "../Shared/Section/RightSection";
import digitalImg from "../../assets/photos/digital.jpg"


const digitalTitle = <><h3>Digital Learning</h3> </>;
const digitalParagraph = <>     <p>
    Classrooms are equipped with interactive whiteboards the
    school has an active platform (LMS) that is daily provided
    with material and resources. Technology is fully integrated
    across the curriculum.
</p></>
function DigitalLearning() {
    return (
        <>
            <Banner
                head="DIGITAL LEARNING"
                title="INTERACTIVE BLENDED LEARNING"
                img={image}
            />


            <RightSection img={digitalImg} title={digitalTitle} paragraph={digitalParagraph} />
        </>
    );
}

export default DigitalLearning;
