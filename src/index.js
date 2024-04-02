
   // Your code here
let url = 'http://localhost:3000/films'
const listHolder = document.getElementById('films')
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementsByClassName('film item')[0].remove()
    fetchMovies(url)
})

//Create fetch function
function fetchMovies(url){
    fetch(url)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
        });
    })
}// function to display the movies  in the browser
function displayMovie(movie){
   
    const li = document.createElement('li') // creating  a tag list where our movies will be displayed 
    li.style.cursor="pointer"  // when the pointer is above the movie it is displayed 
    li.textContent= (movie.title).toUpperCase() // making all our movie titles to be in capital letters 
    listHolder.appendChild(li) // initializing the list tag created  with our text content and appending it to our
    addClickEvent() // calling out the next function 
}
// buying ticket  functionality
function addClickEvent(){
    let children=listHolder.children
    // console.log(children)

    for(let i=0; i<children.length; i++){  // calling  the click event on each child of ul
        let child=children[i]
        // console.log(child)

        child.addEventListener('click',() => {  // giving the click  action to every child element a purpose 
            fetch(`${url}/${i+1}`)

            .then(res => res.json())
            .then(movie => {
                document.getElementById('buy-ticket').textContent = 'Buy Ticket'
                setUpMovieDetails(movie)
            })

        })
    }
}
// movie details
function setUpMovieDetails(childMovie){
    const preview = document.getElementById('poster') // posters i
    preview.src = childMovie.poster;

    const movieTitle = document.querySelector('#title'); // the movie title  on top of page 
    movieTitle.textContent = childMovie.title;
    const movieTime = document.querySelector('#runtime'); // the movies' run time 
    movieTime.textContent = `${childMovie.runtime} minutes`;
    const movieDescription = document.querySelector('#film-info'); // description  of the movies 
    movieDescription.textContent = childMovie.description;
    const showTime = document.querySelector('#showtime') // Time of the show 
    showTime.textContent = childMovie.showtime;
    const tickets  = document.querySelector('#ticket-num') // get the input field of ticket number
    tickets.textContent = childMovie.capacity -childMovie.tickets_sold;
}
const btn = document.getElementById('buy-ticket') // creating  a button element from the HTML id "buy-ticket" 

        btn.addEventListener('click', function(e){  // added cick functiona 
            let remTickets = document.querySelector('#ticket-num').textContent
            e.preventDefault()
            if(remTickets > 0){
                document.querySelector('#ticket-num').textContent  = remTickets-1
                
            }
            else if(parseInt(remTickets, 10)===0){
                btn.textContent = 'Sold Out'
            } 
    })
// deleting films functions
    function deleteFilm() {
    const response =  fetch(`${url}`, {
      method: 'GET',
        });
      
        if (response.ok) {
          const data =  response.json();
          const ul = document.getElementById('films');
      
          data.forEach((film) => {
            const li = document.createElement('li');
            li.id = `film-${film.id}`;
            li.textContent = film.title;
            const btn = document.createElement('button');
            btn.textContent = 'Delete';
            btn.addEventListener('click', () => deleteFilm(film.id));
            li.appendChild(btn);
            ul.appendChild(li);
          });
        } else {
          console.error('Error fetching films:', response.status);
        }
      }
deleteFilm();