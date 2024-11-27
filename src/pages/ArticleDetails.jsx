import { useParams, useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";

export default function ArticleDetails({ api_server, end_point }) {

    const navigate = useNavigate()
    const [article, setArticle] = useState(null)
    const { slug } = useParams()
    // console.log(slug, useParams())
    const url = `${api_server}${end_point}/${slug}`
    // console.log(url);
    // console.log(index);

    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)



    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const keys = Object.keys(data)
                    // console.log(keys);

                    if (keys.includes("error")) {
                        navigate("/404")
                    } else {
                        setArticle(data.data)
                        fetchPrevNext(data.data.slug)
                    }
                }).catch(err => {
                    console.log(err);
                })


        }, [slug])





    function fetchPrevNext(currentSlug) {
        fetch(`${api_server}${end_point}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);

                const result = data.data

                const currentPostIndex = result.indexOf(result.find(item => item.slug === currentSlug))

                console.log(currentPostIndex);

                setPrev(result[currentPostIndex - 1])
                setNext(result[currentPostIndex + 1])

                console.log(result[currentPostIndex]);
                console.log(prev);
                console.log(next);

            })
    }

    function prevHandle(prev) {
        if (prev === null) {
            navigate("/404")
        } else {
            navigate(`/posts/${prev.slug}`)
        }
    }

    function nextHandle(next) {
        if (next === null) {
            navigate("/404")
        } else {
            navigate(`/posts/${next.$slug}`)
        }
    }



    return (
        <>
            {article ? (
                <div>
                    <section className="article_details">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <img src={`${api_server}/${article.image}`} className="card-img-top" />
                                    </div>
                                </div>
                                <div className="col">
                                    <h3>{article.title}</h3>
                                    <div>
                                        <p>{article.content}</p>
                                        <p>Tags: {article.tags}</p>
                                        <Link to="/posts">
                                            <button type="button" className="btn btn-outline-dark mt-3" >Torna ai posts</button>
                                        </ Link>
                                        <div className="mt-4 mb-4">
                                            <button type="button" className="btn btn-outline-secondary" onClick={prevHandle} >Post precedente</button>
                                            <span></span>
                                            <button type="button" className="btn btn-outline-secondary ms-3" onClick={nextHandle} >Post successivo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            ) : (
                <div>Caricamento...</div>
            )}
        </>
    )
}
