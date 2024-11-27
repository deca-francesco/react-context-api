import NavBar from "./NavBar"


export default function AppHeader() {

    return (
        <header>
            <div className="container d-flex justify-content-between align items-center">
                <h1>Benvenuto nel blog!</h1>
                <NavBar />
            </div>
        </header>
    )
}