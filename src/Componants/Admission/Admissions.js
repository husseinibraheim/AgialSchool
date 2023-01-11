import Banner from "../Shared/HeaderImg/Banner"
import image from "../../../src/Media/Admissions.jpg";
import RightSection from "../Shared/Section/RightSection";
import LeftSection from "../Shared/Section/LeftSection";
import Head from "../../../src/Media/Head.jpg";




function Admissions() {

    const firstTitle = <h3>Enrollment steps</h3>
    const firstParagraph = <><ul>
        <li>A filled admission form signed by the parent.</li>
        <li>Interview with the school principal and the head of stage.</li>
        <li>A second interview with the school principal. </li>
        <li>Based on the two interviews, the school principal and the head of stage choose the accepted students.  </li>
    </ul>
    </>

    const secTitle = <h3>Upon acceptance, the documents required for admission are:</h3>
    const secParagraph = <><ul>
        <li>10 recent color passport photographs </li>
        <li>Applicant’s Birth certificate</li>
        <li>Copy of identification for both parents</li>
        <li>Copy of parents’ qualification certificates</li>
        <li>An attested Sequence of Years Certificate</li>
        <li>A recent bill for water, gas, or electricity</li>
    </ul>

    </>

    return (
        <>
            <Banner
                head="ADMISSION PROCESS"
                title="JOIN TO AGIAL FAMILY"
                img={image}
            />

            <RightSection img={Head} title={firstTitle} paragraph={firstParagraph} />
            <LeftSection img={Head} title={secTitle} paragraph={secParagraph} />
        </>
    )

}

export default Admissions