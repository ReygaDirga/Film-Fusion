import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';

const Nowplaying = () => {

  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() =>{
    getNowPlaying()
  }, [])

  const getNowPlaying = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/movie/popular?now_playing=2&api_key=${process.env.REACT_APP_APIKEY}`
      );
      const data = response.data.results;
      setNowPlaying(data);
    } catch (error) {
      console.log("API NOT CALLED");
    }
  }

  return (
    <>
    <div className="App">
        <div className="App-header">
          <div className="Movie-container">
            {nowPlaying.map((movie, i) => (
              <div className="Movie-wrapper" key={i}>
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
export default Nowplaying