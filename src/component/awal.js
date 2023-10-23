import '../App.css';
import bioskop from "../img/bioskop.jpg";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Awal = () => {
  const [home, setHome] = useState([])

  useEffect(() => {
    getHome()
  }, [])

  const getHome = async() => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?page=4&api_key=62013f8d2955d920db1bb2fca0d27481")
      const data = response.data.results 
      setHome(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="gambar-container">
          <img class="h-auto max-w-full transition-all duration-300 rounded-lg blur-sm hover:blur-none" src={bioskop} alt="image description"/>
        </div>
        <div className="Movie-container">
          {home.map((movie, i) => (
            <div className="Movie-wrapper" key={i}>
              <div className="Movie-title">{movie.title}</div>
              <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`}/>
              <div className="Movie-date">Release : {movie.release_date}</div>
            </div>
          ))}
        </div>
      </header>
    </div>
  )
}

export default Awal;
