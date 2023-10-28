import { useEffect, useState } from "react";
import '../App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import poster from "../img/poster.jpg"
import { searchMovie } from "../api/api";

const Popular = () => {

    const [popularMovie, setPopular] = useState([])
    const navigasi = useNavigate()

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        try {
            const response = await axios.get(
              `${process.env.REACT_APP_BASEURL}/movie/popular?page=2&api_key=${process.env.REACT_APP_APIKEY}`
            );
            const data = response.data.results;
            setPopular(data);
          } catch (error) {
            console.log("API NOT CALLED");
          }
    }

    const serpop = async (q) => {
      if(q.length >= 3){
        const query = await searchMovie(q)
        setPopular(query.results)
        console.log({query :query})
      }
    }

    const kirimkan = (movieId) => {
      navigasi(`/detail/${movieId}`)
    }

    return(
        <>
        <div className="App">
        <div className="App-header">
        <div className="search-container">
          <div className="pt-2 relative mx-auto text-gray-600">  
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input onChange={({target}) => serpop(target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Film" required/>
        </div>
          </div>
        </div>
          <div className="Movie-container">
            {popularMovie.map((movie, i) => (
              <div className="Movie-wrapper" key={i} onClick={() => kirimkan(movie.id)}>
                <div className="Movie-title">{movie.title}</div>
                {movie.poster_path ? (
                  <img
                  className="Movie-image"
                  src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`}
                  alt=" "
                />
                ) : (
                  <img
                    className="Movie-image"
                    src={poster}
                    alt=" "
                  />
                )}
                {movie.release_date ? (
                  <div className="Movie-date">Release : {movie.release_date}</div>
                ) : (
                  <div className="Movie-date">Release : unknown</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}
export default Popular