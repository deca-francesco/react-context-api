
export default function SearcBar({ fetchData, postsData, setPostsData }) {


    function search(searchQuery) {

        const searchPosts = postsData.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

        setPostsData(searchPosts)

        if (searchQuery.length === 0) {
            fetchData()
        }
    }


    return (
        <input type="search"
            className='form-control mt-5'
            placeholder='Cerca'
            onChange={(e) => search(e.target.value)}
        />
    )
}

