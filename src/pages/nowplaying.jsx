import {getMovieList} from "../api/api"
import { useEffect, useState } from 'react';
import '../App.css';

const nowplaying = ({ inputValue }) =>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nowPlaying, setNowPlaying] = useState([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getMovieList().then((result) => {
      setNowPlaying(result)
    })
  }, [])

  const NowPlayingMovieList =  () => {
    return nowPlaying.map((movie, i) => {
      return(
          <div className="Movie-wrapper" key={i}>
              <div className="Movie-title">{movie.title}</div>
              <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`}/>
              <div className="Movie-date">Release : {movie.release_date}</div>
            </div>
      )
    })
  }

    return(
    <div className="App">
      <header className="App-header">
          <div className="Movie-container">
              <NowPlayingMovieList/>
          </div>
      </header>
    </div>
    )
}
export default nowplaying;