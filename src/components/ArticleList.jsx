export default function ArticleList({ children }) {


    return (

        <section className="list-group mt-5 mb-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {children}
            </div>
        </section>
    )
}