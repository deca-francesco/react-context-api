export default function Form({ formData, handleFormField, handleFormSubmit, is_loading }) {

    const form = document.getElementById("form")
    const show_btn = document.getElementById("show-form-btn")

    function handleShowForm() {
        form.classList.remove("d-none")
        show_btn.classList.add("d-none")
    }

    function handleCloseForm() {
        form.classList.add("d-none")
        show_btn.classList.remove("d-none")
    }

    // console.log(is_loading);


    return (
        <>
            <button className="btn btn-primary" id="show-form-btn" onClick={handleShowForm}>Inserisci nuovo articolo</button>

            <form onSubmit={handleFormSubmit} className="mt-4 d-none" id="form">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" >Titolo del nuovo articolo</label>
                    <input type="text" className="form-control" name="title" id="title" placeholder="Nuovo titolo" value={formData.title} onChange={handleFormField} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Immagine</label>
                    <input type="text" className="form-control" name="image" id="image" placeholder="https://picsum.photos/200/100" value={formData.image} onChange={handleFormField} />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Contenuto</label>
                    <textarea className="form-control" name="content" id="content" placeholder="Contenuto" value={formData.content} onChange={handleFormField} />
                </div>
                <div className="tags d-flex justify-content-between">
                    <p className="mt-4 mb-3">Tags:</p>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Dolci" checked={formData.tags.includes("Dolci")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="dolci">Dolci</label>
                    </div>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Torte" checked={formData.tags.includes("Torte")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="torte">Torte</label>
                    </div>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Dolci al cioccolato" checked={formData.tags.includes("Dolci al cioccolato")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="dolci_al_cioccolato">Dolci al cioccolato</label>
                    </div>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Ricette vegetariane" checked={formData.tags.includes("Ricette vegetariane")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="ricette_vegetariane">Ricette vegetariane</label>
                    </div>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Ricette al forno" checked={formData.tags.includes("Ricette al forno")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="ricette_al_forno">Ricette al forno</label>
                    </div>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Antipasti" checked={formData.tags.includes("Antipasti")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="antipasti">Antipasti</label>
                    </div>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Primi piatti" checked={formData.tags.includes("Primi piatti")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="primi_piatti">Primi piatti</label>
                    </div>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Dolci veloci" checked={formData.tags.includes("Dolci veloci")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="dolci_veloci">Dolci veloci</label>
                    </div>
                    <div className="form-check mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" name="tags" value="Ricette veloci" checked={formData.tags.includes("Ricette veloci")} onChange={handleFormField} />
                        <label className="form-check-label" htmlFor="ricette_veloci">Ricette veloci</label>
                    </div>
                </div>

                <button className="btn btn-success mt-3" type="submit" disabled={is_loading} >{is_loading ? "Loading" : "Inserisci"}</button>
                <button className="btn btn-secondary mt-3 ms-2" type="button" onClick={handleCloseForm}>Chiudi</button>
            </form>
        </>
    )
}