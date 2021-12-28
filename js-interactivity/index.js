document.addEventListener("DOMContentLoaded", function() {
    //console.log("The dom is loaded")

  

const inputField = document.querySelector('input');
const form = document.querySelector('form')

function addMovie(event) {
    event.preventDefault()

    var movie = document.createElement('li')

    var movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.addEventListener('click',crossOffMovie) //this event doesn't work


    movie.appendChild(movieTitle)

    deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click',deleteMovie)

    movie.appendChild (deleteBtn)

    document.querySelector('ul').appendChild(movie)

    inputField.value = ""

}

function deleteMovie (event) {
    event.target.parentNode.remove()

};


function crossOffMovie (event) {
    event.target.classList.toggle('.checked')

};

form.addEventListener("submit", addMovie);


















});
