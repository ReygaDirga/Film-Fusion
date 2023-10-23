import {getTopList} from "./api"
import { useEffect, useState } from 'react';
import '../App.css';

const toprated = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [topRated, setTopRated] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getTopList().then((result) => {
        setTopRated(result)
        })
    }, [])

    const TopRatedMovieList = () => {
        return topRated.map((movie, i) => {
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
              <TopRatedMovieList/>
          </div>
      </header>
    </div>
    )
}
export default toprated;