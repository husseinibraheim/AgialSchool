import Banner from "../Shared/HeaderImg/Banner"
import image from "../../../src/Media/SchoolPolicy.jpg";
import policyImg from "../../assets/photos/policy.jpg"
import LeftSection from "../Shared/Section/LeftSection";
import factorsImg from "../../assets/photos/factorys.jpg"
import RightSection from "../Shared/Section/RightSection";
import teachingImg from "../../assets/photos/teachingImg.jpg"
import instructionImg from "../../assets/photos/instructionImg.jpg"
const policyTitle = <><h3>School language policy</h3></>;
const policyParagraph = <>
    <p>A policy based on integrated systems that are applied in the best international schools, Applying the latest educational technology to make our school the best school ever, the school policy continues from the kindergarten stage till the secondary stage, selecting highly-qualified teachers who have experience and team work spirit, the school applies strict discipline for both its staff and students from the very beginning of the academic year to its end, Creating a quiet, friendly and safe atmosphere to make the students happy, treating the students in a fair way as well as helping them to develop their moral and religious aspects. Implanting in the students love for their school and loyalty for their community and home country.
    </p>
</>

const factorsTitle = <><h3>Factors considered</h3></>
const factorsParagraph = <>
    <h4>In drafting this policy, the following factors have been considered:</h4>
    <ul>
        <li>The capacity of the school</li>
        <li>The resources and staff available to the school</li>
        <li>Interests of the learners</li>
        <li>Interests of the school community</li>
        <li>Interests of the community in which the school is located</li>
        <li>International best practice with regard to class sizes and language in education, with specific reference to the importance of mother tongue education</li>
    </ul>
</>

const teachingTitle = <><h3>Teaching and examination</h3></>;
const teachingParagraph = <>
    <p>All teaching and the taking of tests and examinations shall occur in the schools medium/media of instruction</p>
</>


const instructionTitle = <> <h3>Policy on medium of instruction</h3></>;
const instructionParagraph = <>
    <ul>
        <li>The medium of instruction is English from pre-school to Grade 2</li>
        <li>This Policy may be amended, supplemented, modified or altered from time to time by the SGB</li>
    </ul>
</>
function SchoolPolicy() {

    return (
        <>
            <Banner
                head="Policy"
                title="Agial School language policy "
                img={image}
            />

            <LeftSection img={policyImg} title={policyTitle} paragraph={policyParagraph} />
            <RightSection img={factorsImg} title={factorsTitle} paragraph={factorsParagraph} />
            <LeftSection img={teachingImg} title={teachingTitle} paragraph={teachingParagraph} />
            <RightSection img={instructionImg} title={instructionTitle} paragraph={instructionParagraph} />


        </>

    )

}

export default SchoolPolicy
