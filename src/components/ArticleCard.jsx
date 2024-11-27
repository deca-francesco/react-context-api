import { Link } from "react-router"

export default function ArticleCard({ data, index, handleDeleteClick, api_server, children }) {


    // function handleModifyClick(e) {
    //     const dataIndex = Number(e.target.getAttribute('data-index'));
    //     setCurrentIndex(dataIndex);
    //     setModifyArticle(articles[dataIndex]);
    // }



    return (
        <div className="col">
            <div className="card mb-5 card_custom">

                <Link to={"/posts/" + data.slug} >
                    <img src={api_server + data.image} className="object-fit-cover card-img-top" height={350} />
                </Link>

                <div className="card-body card_bottom">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <p>Tags: {data.tags.join(", ")}</p>
                    <div className="buttons_div d-flex justify-content-end">
                        <button onClick={handleDeleteClick} data-index={index} data-slug={data.slug} className="btn btn-outline-danger">Cancella</button>
                        {/* <button onClick={handleModifyClick} data-index={index} className="ms-3 btn btn-outline-primary">Modifica</button> */}
                    </div>
                    {children}
                </div>

            </div>
        </div>
    )
}