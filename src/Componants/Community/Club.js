import Banner from "../Shared/HeaderImg/Banner";
import image from "../../../src/Media/Club.jpg";
import Head from "../../../src/Media/Head.jpg";
import RightSection from "../Shared/Section/RightSection";

function Club() {
    const firstTitle = <h3> Our school is open for pupils and families</h3>
    const firstParagraph = <> <p> Pupils and families have a secure and safe environment with a
        wide range of sport and entertainment facilities. This
        contributes to the development, in pupils, of personal
        responsibility, moral values, cooperation, emotional maturity,
        self-discipline, social competence, individuality, leadership,
        and a realisation of the value of group goals.
    </p>
    </>

    return (
        <>
            <Banner head="Agial CLUB" title="OUR DOORS ARE ALWAYS OPEN" img={image} />

            <RightSection img={Head} title={firstTitle} paragraph={firstParagraph} />

        </>
    );
}

export default Club;
