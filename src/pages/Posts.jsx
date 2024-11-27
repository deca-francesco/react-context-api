import AppMain from "../components/AppMain";


export default function Posts({ api_server, end_point }) {



    return (
        <>
            <AppMain api_server={api_server} end_point={end_point} />
        </>
    )
}