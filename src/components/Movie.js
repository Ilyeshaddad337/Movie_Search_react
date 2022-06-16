import React from 'react'

function Movie({movie}) {
  return (
    <div className='movie'>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`}><strong>{movie.Title}</strong></a>
        <img width="200" alt= {`Poster for ${movie.Title}`}  src={movie.Poster === "N/A" ? "https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg" : movie.Poster }></img>
        <p>{movie.Year} </p>
     
    </div>
  )
}

export default Movie