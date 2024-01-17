document.getElementById('searchButton').addEventListener('click', searchMovies)
let apiKey = 'e086c558481ea3c9263d53035a5739bb';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w200'

function searchMovies(){
    let searchImput = document.getElementById('searchInput').value

    fetch(''+urlBase+'?api_key='+apiKey+'&query='+searchImput)
    .then(response => response.json())
    .then(response =>   displayMovies(response.resultsf) )

}

function displayMovies(movies){
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML = ''

    if (movies.length === 0){
        resultContainer.innerHTML = '<p> No se encontraron resultador para tu busquedad'
        return;
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate  = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: '+ movie.release_data

        let overView = document.createElement('p')
        overView.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overView)

        resultContainer.appendChild(movieDiv)

    });
}