import Banner from "../Shared/HeaderImg/Banner";
import image from "../../../src/Media/kg.jpg";
import Head from "../../../src/Media/Head.jpg";
import LeftSection from "../Shared/Section/LeftSection";
import schoolProgramImg from "../../assets/photos/schoolProgram.jpg"
import RightSection from "../Shared/Section/RightSection";
import curriculumImg from "../../assets/photos/curriculumImg.jpg"
import assessmentsImg from "../../assets/photos/schoolMission.jpg"
const schoolProgramTitle = <> <h3>School Program</h3></>
const schoolProgramParagraph = <> <p>
    Agial International Language Schools apply an international
    standard and style of education that offers a rigorous
    curriculum aimed towards academic success. All courses are
    appropriate to student’s developmental stages, and a
    well-rounded education is offered. Our motto “Education is a
    life shaper” is a clear indication of our endeavor to provide
    all students with an excellent base of skills with which to
    confront their world. Our understanding of the ever-changing
    landscape of knowledge assists us in guiding the students
    towards a relevant base from which they can confidently face
    the future. It is our mission to make a difference in the
    lives of all those who come under our care.
</p></>

const curriculumTitle = <><h3>Curriculum</h3></>
const curriculumParagraph = <><p>
    The school follows the national standards of the curriculum
    provided by the Egyptian Ministry of Education. In order to
    improve the language skills of our learners, we added an
    advanced level book for all the grades with a group of readers
    to make our students exposed to the foreign language in the
    best way. Our number one goal for students at Agial School is
    that they “learn how to learn” and begin to see themselves as
    learners, because we know that strong experiences will help a
    child think, “I am a good learner. I can find problems to
    solve. I can master a hard task.” These experiences show our
    learners the power that learning creates for him. English
    Language, French, Mathematics, Physics, Chemistry, Biology,
    Social Studies, Information Technology, Science, Physical
    Education, Music, Art and Library Programs are also taught.
    Arabic, Religion under the guidance and supervision of the
    ministry of Education.


</p> </>

const assessmentsTitle = <><h3>Assessments</h3></>;
const assessmentsParagraph = <><p>
    Our students are assessed frequently on each subject
    throughout each class. Assessing trains students in sustained
    mental effort for long periods of time, a training that is
    essential for future success. Frequent assessment allows the
    teachers to monitor students’ performance and identify gaps
    that need re-teaching. Classwork and homework performances are
    also weighed in the final assessment marks.
</p></>
function AcademicInfo() {
    return (
        <>
            <Banner
                head="ACADEMIC INFORMATION"
                title="LEARN THROUGH DISCOVERY "
                img={image}
            />
            <LeftSection img={schoolProgramImg} title={schoolProgramTitle} paragraph={schoolProgramParagraph} />
            <RightSection img={curriculumImg} title={curriculumTitle} paragraph={curriculumParagraph} />
            <LeftSection img={assessmentsImg} title={assessmentsTitle} paragraph={assessmentsParagraph} />
        </>
    );
}

export default AcademicInfo;
