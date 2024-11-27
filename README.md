# Consegna
Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.

- Partiamo col definire la lista dei post all’interno di App.jsx

- Se non lo abbiamo già fatto in precedenza, creiamo un componente PostsPage.jsx che conterrà al suo interno un titolo e un componente PostsList.jsx che mostra la lista di tutti i nostri post.

Creiamo un file per definire il nostro Context ed esportiamolo

Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione - Facciamo in modo che il componente PostsList.jsx ****recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.

La struttura dell’App deve essere
App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx

### Bonus 
- Recuperare la lista delle categorie in App.jsx tramite una chiamata a un’API.