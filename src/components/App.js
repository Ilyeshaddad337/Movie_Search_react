import React , { useEffect, useState} from "react"
import '../App.css';
import Header from './Header.js'
import Movie from './Movie.js'
import Search from './Search.js'
function App() {
  const API_URL ='http://www.omdbapi.com/?apikey=44b62668&s='
  const [loading,setLoading] = useState(true)
  const [movies,setMovies] = useState([])
  const [error,setErr] = useState(null)
  useEffect(() => {
    fetch(`${API_URL}batman`)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);
  const search = searchValue => {
    setLoading(true);
    setErr(null)
    fetch(API_URL+searchValue)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === 'True') {
      setMovies(jsonResponse.Search);
      setLoading(false);
      }
      else {
        setErr(jsonResponse.Error)
        setLoading(false)
      }
    });

  }
  return (
    <div className='container'>
      <Header className ='Header' text='Movie Search App'></Header>
      <Search search ={search}></Search>
      <div className='movieContainer'>
        {loading && !error ? <p>Loading</p> 
        :error !== null ? <p className="err">{error}</p> 
        : movies.map((movie,indx)=>{
          return <Movie key={`${movie.imdbID}-${movie.Title}`} movie = {movie} ></Movie>
        })}
      </div>
   </div>
   
  );
}

export default App;
