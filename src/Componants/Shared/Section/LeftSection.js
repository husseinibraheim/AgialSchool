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
                            <span className="title">
                                {props.title}
                            </span>
                            <span>
                                {props.paragraph}
                            </span>

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