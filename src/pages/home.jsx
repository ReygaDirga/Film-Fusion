import '../App.css';
import bioskop from "../img/bioskop.jpg";
import poster from "../img/poster.jpg";
import { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { searchMovie } from '../api/api';

const Home = () => {
  const [home, setHome] = useState([])
  const naviagte = useNavigate();

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

  const search = async (q) => {
    if(q.length >= 3){
      const query = await searchMovie(q)
      setHome(query.results)
      console.log({query :query})
    }
  }

  const kirim = (movieId) =>{
    naviagte(`/detail/${movieId}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="gambar-container">
          <img class="h-auto max-w-full transition-all duration-300 rounded-lg " src={bioskop} alt=" "/>
        </div>
        <div className="search">
          <div className="pt-2 relative mx-auto text-gray-600">  
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input onChange={({target}) => search(target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Film" required/>
        </div>
          </div>
        </div>
        <div className="Movie-container" >
          {home.map((movie, i) => (
            <div className="Movie-wrapper" onClick={() => kirim(movie.id)} key={i}>
              <div className="Movie-title">{movie.title}</div>
              {movie.poster_path ? (
                <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`} alt=' '/>
              ) : (
                <img className="Movie-image" src={poster} alt=''/>
              )}

              {movie.release_date ? (
                <div className="Movie-date">Release : {movie.release_date}</div>
              ) : (
                <div className="Movie-date">Release : unknown</div>
              )}
            </div>
          ))}
        </div>
      </header>
    </div>
  )
}

export default Home;
