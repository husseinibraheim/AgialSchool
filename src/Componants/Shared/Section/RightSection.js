import "./section.scss"

function RightSection(props) {
    return (
        <>
            <section id="Section">
                <div className="container">
                    <div className="row">
                     
                        <section className="sectionImg col-md-6">
                            <img src={props.img}>
                            </img>
                        </section>

                        <article className=" RightSection sectionArticle col-md-6">
                            <h3 className="title">
                                {props.title}
                            </h3>
                            <p>
                                {props.paragraph}
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RightSection;