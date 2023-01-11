
import LeftSection from "../../Shared/Section/LeftSection";
import subjectsImg from "../../../assets/photos/aim.jpg"
function KGOne() {

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

    return (

        <>

                <LeftSection img={subjectsImg} title={subjectsTitle} paragraph={subjectsParagraph} />




        </>
    )



}

export default KGOne