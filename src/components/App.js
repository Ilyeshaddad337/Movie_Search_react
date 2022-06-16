import React , { useEffect, useState} from "react"
import '../App.css';
import Header from './Header.js'
import Movie from './Movie.js'
import Search from './Search.js'
function App() {
  
  
  return (
    <div className='container'>
      <Header className ='Header' text='Movie Search App'></Header>
      <Search ></Search>
      <div className='movieContainer'>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
        <Movie movie = {{"Title":"Predestination","Year":"2014","imdbID":"tt2397535","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"}}></Movie>
      </div>
   </div>
   
  );
}

export default App;
