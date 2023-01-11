import Banner from "../Shared/HeaderImg/Banner";
import image from "../../../src/Media/sports.jpg";
import Head from "../../../src/Media/Head.jpg";
import RightSection from "../Shared/Section/RightSection";

function Sport() {

    const firstTitle = <h3>Sports</h3>
    const firstParagraph = <> <p> At Agial we are committed to the development of the whole
        child, including their physical well-being. We encourage
        competitiveness and ambition in sport, ensuring every child
        feels that they have a level of success by celebrating and
        rewarding achievement as well as effort. Agial is fortunate to
        have highly skilled sports teachers and coaches and excellent
        sporting facilities, including an outdoor pool, one football
        pitch, a tennis court, one full-size basketball court, and a
        running track. Through physical education classes during the
        school day, along with a wide range of co-curricular
        programmes on offer morning and afternoon, sports and athletic
        teams, students have opportunities to set goals, improve their
        skills, and excel in both individual and team sports.
    </p>
    </>
    return (
        <>
            <Banner head="SPORT" title="INSPIRE FUTURE ATHLETES" img={image} />
            <RightSection img={Head} title={firstTitle} paragraph={firstParagraph} />
        </>
    );
}

export default Sport;
