import { useState, useEffect, useContext } from 'react';

import ArticleCard from '../components/ArticleCard.jsx';
import ArticleList from '../components/ArticleList.jsx';
import Form from '../components/Form.jsx';
import SearchBar from '../components/Searchbar.jsx';
// import ArticleDetails from './pages/ArticleDetails.jsx';

import PostsContext from '../contexts/PostsContext.jsx';


export default function Posts({ api_server, end_point }) {
    const initialFormData = {
        title: "",
        image: "",
        content: "",
        tags: [],
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);

    // const [postsData, setPostsData] = useState([])

    // function fetchData(url = `${api_server}${end_point}`) {
    //     fetch(url)

    //         .then(res => res.json())

    //         .then(data => {

    //             // console.log(data);

    //             setPostsData(data.data)

    //         }).catch(err => {
    //             console.error(err.message);
    //         })
    // }

    // // esegue subito al caricamento della pagina, ma una volta sola perché non ha dipendenze
    // useEffect(fetchData, [])

    const { postsData } = useContext(PostsContext)


    function handleFormField(e) {
        const { name, value, checked, type } = e.target;

        const newValue = type === 'checkbox' ? checked : value;

        if (name === 'tags') {
            const tags = formData.tags.includes(value)
                ? formData.tags.filter(tag => tag !== value)
                : [...formData.tags, value];
            setFormData({ ...formData, tags });
        } else {
            setFormData({
                ...formData,
                [name]: newValue
            });
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setLoading(true)

        // console.log(e.target);
        // console.log(loading);


        const titleToSlug = formData.title.split(" ").join("-");

        // console.log(titleToSlug.toLowerCase());

        const newItem = {
            slug: titleToSlug.toLowerCase(),
            ...formData
        }

        fetch(api_server + end_point, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log("result", result);
                setPostsData(result.data)
                setFormData(initialFormData);
                setLoading(false)
                // console.log(loading);

            })

    }

    function handleDeleteClick(e) {
        e.preventDefault()

        const dataSlug = e.target.getAttribute("data-slug")

        // console.log(dataSlug);


        fetch(api_server + end_point + "/" + dataSlug, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log("result", result);
                setPostsData(result.data)
            })


    }


    return (
        <main>
            <div className="container">
                <Form formData={formData} handleFormField={handleFormField} handleFormSubmit={handleFormSubmit} is_loading={loading} />

                {/* <SearchBar fetchData={fetchData} postsData={postsData} setPostsData={setPostsData} /> */}
                <SearchBar />

                <ArticleList>
                    {postsData ? postsData.map((post, index) => (
                        // <ArticleCard key={index} data={post} index={index} api_server={api_server} end_point={end_point} handleDeleteClick={handleDeleteClick} > </ArticleCard>
                        <ArticleCard key={index} data={post} index={index} api_server={api_server} end_point={end_point} handleDeleteClick={handleDeleteClick} > </ArticleCard>
                    )) : <p>No data found</p>
                    }
                </ArticleList>
            </div>
        </main>
    )
}