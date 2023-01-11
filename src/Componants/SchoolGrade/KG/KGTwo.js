import RightSection from "../../Shared/Section/RightSection";
import subjectsImg from "../../../assets/photos/schoolMission.jpg"



const subjectsTitle = <><h3>Educational Subjects</h3></>
const subjectsParagraph = <>
    <ul>
        <li>Le jardin 1</li>
        <li>Connect</li>
        <li>Connect+</li>
        <li>Discover</li>
        <li>Level Read on : Phonics</li>
    </ul>
</>

function KGTwo() {
    return (
        <>
            <RightSection img={subjectsImg} title={subjectsTitle} paragraph={subjectsParagraph} />
        </>


    )


}

export default KGTwo