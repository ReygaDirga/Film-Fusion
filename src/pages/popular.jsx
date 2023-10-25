import { useEffect, useState } from "react";
import '../App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

    const kirimkan = (movieId) => {
      navigasi(`/detail/${movieId}`)
    }

    return(
        <>
        <div className="App">
        <div className="App-header">
          <div className="Movie-container">
            {popularMovie.map((movie, i) => (
              <div className="Movie-wrapper" key={i} onClick={() => kirimkan(movie.id)}>
                <div className="Movie-title">{movie.title}</div>
                <img
                  className="Movie-image"
                  src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`}
                  alt=" "
                />
                <div className="Movie-date">Release : {movie.release_date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}
export default Popular