import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="container">
        <h1>😥 404 Pagina non trovata</h1>
        <Link to='/' className="btn btn-primary" >Torna alla Home</Link>
      </div>
    </>
  )
}

