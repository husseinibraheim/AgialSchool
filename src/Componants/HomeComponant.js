import image2 from "../../src/Media/welcome image.jpg";
import school from "../../src/Media/school.jpeg";
import Head from "../../src/Media/Head.jpg";
import HomeCarousel from "./HomeCarousel";
import LeftSection from "./Shared/Section/LeftSection";
import RightSection from "./Shared/Section/RightSection";

///For Sections /////
import welcomeImg from "../assets/photos/welcomeimg.jpg"
import adminstrationImg from "../assets/photos/admission.jpg"
import HeaderVideo from "./Shared/HeaderVideo/HeaderVideo";


function HomeComponant() {

    const welcomeTitle = <>Warm Welcome to Agial school</>
    const welcomeParagraph = <>
        Welcome to Agial International Language Schools. We opened in
        2015 as a premium language school in the road between Tala and
        Tanta. Located in the city of Tala, the school currently
        serves about 900 students. We are here to help make your
        children’s education a positive and rewarding experience.</>

    const administrationTitle = <>School Administration</>
    const administrationParagraph = <> We have a team of management and staff who care, act
        professionally, are qualified and dedicated to guide your
        child towards better performance. The school management is a
        well structured team that ensures efficient provision of
        services to all stake-holders in the school community.</>

    return (
        <>

            <HeaderVideo />

            {/* ////Welcome Section//// */}
            <LeftSection img={welcomeImg} title={welcomeTitle} paragraph={welcomeParagraph} />
            {/* ////adminstration Section//// */}

            <RightSection img={adminstrationImg} title={administrationTitle} paragraph={administrationParagraph} />

        </>
    );
}

export default HomeComponant;
