import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieDTO } from './Movies/Movie.model';
import MoviesList from './Movies/MovieList';

function App() {

const inTheater: MovieDTO[]= [{
  id: 2,
  title: "home",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Home_%282015_film%29_poster.jpg",
},
{
  id: 2,
  title: "home",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Home_%282015_film%29_poster.jpg",
},
{
  id: 2,
  title: "home",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Home_%282015_film%29_poster.jpg",
},
]
const upComming: MovieDTO[] = [
  {
    id: 2,
    title: "home",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Home_%282015_film%29_poster.jpg",
  },
  {
    id: 2,
    title: "home",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Home_%282015_film%29_poster.jpg",
  },
  {
    id: 2,
    title: "home",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Home_%282015_film%29_poster.jpg",
  },
]
  return (
    <div className="App">
      <h3>In Theather</h3>
     <MoviesList movies={inTheater} />
     <h3>Up Comming</h3>
      <MoviesList movies={upComming} />
    </div>
  );
}

export default App;
