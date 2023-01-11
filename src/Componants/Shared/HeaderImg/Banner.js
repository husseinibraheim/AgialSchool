
import "./banner.scss";


function Banner(props) {
    return (
        <>
            <section id="banner">
                <div class="card">
                    <img src={props.img} class="card-img " alt="..." />
                    <article class="card-img-overlay">
                        <span class="card-head ">{props.head}</span>
                        <span class="card-title ">{props.title}</span>
                    </article>

                </div>
            </section>
        </>
    )

}

export default Banner;