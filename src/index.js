// Your code here
/*let url =`http://localhost:3000/films`; 
const listHolder= document.getElementById("films");
document.addEventListener('DOMContentLoaded', () => { 
    document.getElementsByClassName(`film item`)[0].remove()
    fetchMovies(url)
})

// Fetch films from the server and display them in the browser
function fetchMovies(url){
    fetch(url)
    .then(response=> response.json())
    .then(movies=>{
        movies.forEach(movie=>{
            displayMovies(movie);
        })
    });
}



// Display a movie on the page
function displayMovies(movie){
const li= document.createElement('li'); // creating a tag List where our movie list will be displayed 
li.style.cursor="pointer"; // adding a style  to make it clickable
li.textContent= (movie.title).upperCaseto() // making the movie titles to be in caps 
listHolder.appendChild(li) // initializing of the created tag of list 
addClickEvent(); // calling out the next function 
}

function addClickEvent(){
    let children=listHolder.children;
    for(i=0 ; i<children.length; i++){
        let child =children(i);
// creating the fuction click when we buy a ticket 
        child.addEventListener('click' , ()=>{
            fetch(`${url}/${i+1}`);
            then(res=>res.json()) // respond ing with JSON data 
            .then (movie=>{
                document.getElementById(`buy-ticket`).textContent=`Buy Tickets`
                setupMovieDetails(movie)
            })
            
        })
        
    }
    
}
function setupMovieDetails(childMovie) {
    const Preview=document.getElementById('poster')  // poster 
    Preview.src= childMovie.poster;
    
    const movieTitle=document.getElementById('title') // movie title
    movieTitle.textContent= childMovie.title;

    const childMovieTime=document.querySelector('#runtime') //  time 
    childMovieTime.textContent= `${childMovie.time} min.`;

    const movieDetails=document.querySelector('#film-info') // details
    movieDetails.textContent=childMovie.description;

    const showTime = document.querySelector('#showtime')
    showTime.textContent = childMovie.showtime;

    const tickets  = document.querySelector('#ticket-num')
    tickets.textContent = childMovie.capacity -childMovie.tickets_sold;
}
    
const btn = document.getElementById('buy-ticket')

        btn.addEventListener('click', function(e){
            let remTickets = document.querySelector('#ticket-num').textContent
            e.preventDefault()
            if(remTickets > 0){
                document.querySelector('#ticket-num').textContent  = remTickets-1
                
            }
            else if(parseInt(remTickets, 10)===0){
                btn.textContent = 'Sold Out'
            }
    })
    */
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
}

function displayMovie(movie){
   
    const li = document.createElement('li')
    li.style.cursor="pointer"
    li.textContent= (movie.title).toUpperCase()
    listHolder.appendChild(li)
    addClickEvent()
}
function addClickEvent(){
    let children=listHolder.children
    // console.log(children)

    for(let i=0; i<children.length; i++){
        let child=children[i]
        // console.log(child)

        child.addEventListener('click',() => {
            fetch(`${url}/${i+1}`)

            .then(res => res.json())
            .then(movie => {
                document.getElementById('buy-ticket').textContent = 'Buy Ticket'
                setUpMovieDetails(movie)
            })

        })
    }
}
function setUpMovieDetails(childMovie){
    const preview = document.getElementById('poster')
    preview.src = childMovie.poster;

    const movieTitle = document.querySelector('#title');
    movieTitle.textContent = childMovie.title;
    const movieTime = document.querySelector('#runtime');
    movieTime.textContent = `${childMovie.runtime} minutes`;
    const movieDescription = document.querySelector('#film-info');
    movieDescription.textContent = childMovie.description;
    const showTime = document.querySelector('#showtime')
    showTime.textContent = childMovie.showtime;
    const tickets  = document.querySelector('#ticket-num')
    tickets.textContent = childMovie.capacity -childMovie.tickets_sold;
}
const btn = document.getElementById('buy-ticket')

        btn.addEventListener('click', function(e){
            let remTickets = document.querySelector('#ticket-num').textContent
            e.preventDefault()
            if(remTickets > 0){
                document.querySelector('#ticket-num').textContent  = remTickets-1
                
            }
            else if(parseInt(remTickets, 10)===0){
                btn.textContent = 'Sold Out'
            }
    })