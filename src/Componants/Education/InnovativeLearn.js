import Banner from "../Shared/HeaderImg/Banner";
import image from "../../../src/Media/junior.jpg";
import Head from "../../../src/Media/Head.jpg";
import LeftSection from "../Shared/Section/LeftSection";
import innovativeImg from "../../assets/photos/admission.jpg"

const innovativeTitle = <><h3>Innovative Learning</h3></>
const innovativeParagraph = <>   <p>
The Junior School classrooms are designed around a central
learning courtyard where pupils can engage, discover, and
collaborate. The concept revolves around all learning spaces
having physical and visual access to the outdoors. The aim is
to support and promote the sensory, cognitive, physical, and
emotional development of our pupils through innovative
learning techniques.
</p></>
function InnovativeLearn() {
  return (
    <>
      <Banner
        head="Innovative Learning"
        title="LEARN THROUGH DISCOVERY "
        img={image}
      />
     
     <LeftSection img={innovativeImg} title={innovativeTitle} paragraph={innovativeParagraph}/>

   
    </>
  );
}

export default InnovativeLearn;
