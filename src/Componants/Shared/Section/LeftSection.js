import "./section.scss"

function LeftSection(props) {
// Section Props: 
//           *title 
//           *paragraph
//           *img
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                       
                        <article className="leftSection sectionArticle col-md-6">
                            <h3 className="title">
                                {props.title}
                            </h3>
                            <p>
                                {props.paragraph}
                            </p>

                        </article>

                        <section className="sectionImg col-md-6">
                            <img src={props.img}>
                            </img>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LeftSection;